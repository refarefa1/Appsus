import mailService from '../services/mail.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

import emailFolderList from '../pages/email-folder-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import emailAppHeader from '../cmps/email-app-header.cmp.js'

export default {
    emits: ['showMainHeader', 'hideMainHeader'],
    template: `


    <email-app-header @show="$emit('showMainHeader')" @filter="filter"/>
    <section className="mail-app">
        <main className="mail-container">
            <email-folder-list @add="add" :unRead="unRead"/>
            <email-compose v-if="isCompose" @sent="send" @removeDraft="removeDraft"/>
            <router-view @filter="filter" @sort="sort" @read="read" :mails="mails" :sentMails="sentMails" :mailsToShow="mailsToShow" :filterBy="filterBy"/>
        </main>
    </section>

        `,
    data() {
        return {
            mails: null,
            sentMails: null,
            mailsToShow: null,
            unRead: null,
            isCompose: false,
            sortBy: {
                title: 1,
                date: 1
            },
            filterBy: null
        }
    },
    methods: {
        getUnreadLength() {
            const length = this.mails.filter(mail => !mail.isRead).length
            this.unRead = length
        },

        read(mail) {
            const key = this.getKey
            mail.isRead = true
            mailService.update(mail, key)
            this.getUnreadLength()
        },

        add() {
            this.isCompose = !this.isCompose
        },
        send(mail) {
            mailService.add(mail)
                .then(mail => this.sentMails.unshift(mail))
            this.removeDraft()
        },
        removeDraft() {
            this.isCompose = !this.isCompose
        },
        remove() {
            eventBus.on('delete-mail', ({ mail, key }) => {
                mailService.remove(mail.id, `${key}DB`)
                const currMails = this[`${key}`]
                const idx = currMails.findIndex(email => email.id === mail.id)
                currMails.splice(idx, 1)
            })
        },
        convertToTimestamp(date) {
            let arr = date.split('-')
            var newDate = new Date(arr[2], arr[1] - 1, arr[0])
            return newDate.getTime()
        },
        filter(obj) {
            this.filterBy = true
            if (obj.path === '/email/inbox') var name = 'mails'
            if (obj.path === '/email/sent') var name = 'sentMails'

            if (!obj.type) {
                var name = this.getCurrKey
                const regex = new RegExp(obj, 'i')
                this.mailsToShow = this[name].filter(mail => regex.test(mail.subject))
                return
            }

            else if (obj.type === 'all') {
                console.log('filtering all');
                this.mailsToShow = this[name].filter(mail => mail)
            }
            else if (obj.type === 'read') {
                console.log('filtering read');
                this.mailsToShow = this[name].filter(mail => mail.isRead)
            }
            else if (obj.type === 'unread') {
                console.log('filtering unread');
                this.mailsToShow = this[name].filter(mail => !mail.isRead)
            }
        },
        sort(obj) {
            if (obj.path === '/email/inbox') var name = 'mails'
            if (obj.path === '/email/sent') var name = 'sentMails'

            if (obj.type === 'date') {
                this[name].sort((a, b) => (this.convertToTimestamp(a.sentAt) - this.convertToTimestamp(b.sentAt)) * this.sortBy.date)
                this.sortBy.date *= -1
            }

            if (obj.type === 'title') {
                this[name].sort((a, b) => {
                    const nameA = a.subject.toUpperCase()
                    const nameB = b.subject.toUpperCase()
                    this.sortBy.title *= -1
                    if (nameA < nameB) return -1 * this.sortBy.title
                    if (nameA > nameB) return 1 * this.sortBy.title
                    return 0
                })
            }
        }
    },
    computed: {
        getCurrKey() {
            const history = this.$route.fullPath
            var key
            if (history === '/email/sent') key = 'sentMails'
            if (history === '/email/inbox') key = 'mails'
            return key
        }
    },
    created() {
        mailService.query('mails')
            .then(mails => {
                this.mails = mails
                this.getUnreadLength()
            })
        mailService.query('sentMails')
            .then(mails => this.sentMails = mails)
        this.$emit('hideMainHeader')
        this.remove()
    },

    components: {
        emailFolderList,
        emailCompose,
        emailAppHeader
    },
}

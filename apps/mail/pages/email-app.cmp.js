import mailService from '../services/mail.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

import emailFolderList from '../pages/email-folder-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import emailAppHeader from '../cmps/email-app-header.cmp.js'

export default {
    emits: ['showMainHeader', 'hideMainHeader'],
    template: `


    <email-app-header @show="$emit('showMainHeader')"/>
    <section className="mail-app">
        <main className="mail-container">
            <email-folder-list @add="add" :unRead="unRead"/>
            <email-compose v-if="isCompose" @sent="send" @removeDraft="removeDraft"/>
            <router-view @sort="sort" @read="read" :mails="mails" :sentMails="sentMails"/>
        </main>
    </section>

        `,
    data() {
        return {
            mails: null,
            sentMails: null,
            unRead: null,
            isCompose: false,
            sortBy: {
                title: 1,
                date: 1
            }
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
        sort(type) {
            // if (type === 'date')
            if (type === 'title') {
                this.mails.sort((a, b) => {
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
        getKey() {
            const history = this.$router.options.history.state.back
            var key
            if (history === '/email/sent') key = 'sentMailsDB'
            if (history === '/email/inbox') key = 'mailsDB'
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

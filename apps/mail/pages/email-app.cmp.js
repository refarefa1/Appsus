import mailService from '../services/mail.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

import emailFolderList from '../pages/email-folder-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import emailAppHeader from '../cmps/email-app-header.cmp.js'

export default {
    emits: ['showMainHeader', 'hideMainHeader'],
    template: `

    <email-app-header @show="$emit('showMainHeader')" @filterTxt="filterTxt"/>
    <section className="mail-app">
        <main className="mail-container">
            <email-folder-list @filterPath="filterPath" @add="add" :mails="mails"/>
            <email-compose v-if="isCompose" @sent="send" @removeDraft="removeDraft"/>
            <router-view @filterRead="filterRead" @sort="sort" @read="read" :mailsToShow="mailsToShow"/>
        </main>
    </section>

        `,
    data() {
        return {
            mails: null,
            mailsToShow: null,
            unRead: null,
            isCompose: false,
            criteria: {
                status: 'inbox',
                txt: '',
                isRead: null,
                isStared: false,
                lables: ['important', 'romantic']
            },
            sortBy: {
                title: 1,
                date: 1
            },
        }
    },
    methods: {
        read(mail) {
            mail.isRead = true
            mailService.update(mail)
        },
        add() {
            this.isCompose = !this.isCompose
        },
        send(mail) {
            mailService.add(mail)
                .then(mail => this.mails.unshift(mail))
            this.removeDraft()
        },
        removeDraft() {
            this.isCompose = !this.isCompose
        },
        remove() {
            eventBus.on('deleted', (mail) => {
                mailService.remove(mail.id)
                const idx = this.mails.findIndex(email => email.id === mail.id)
                this.mails.splice(idx, 1)
                this.filter()
            })
        },
        convertToTimestamp(date) {
            let arr = date.split('-')
            var newDate = new Date(arr[2], arr[1] - 1, arr[0])
            return newDate.getTime()
        },
        filterTxt(txt) {
            this.criteria.txt = txt
            this.filter()
        },
        filterRead(type) {
            if (type === 'read') this.criteria.isRead = true
            if (type === 'unread') this.criteria.isRead = false
            if (type === 'all') this.criteria.isRead = null
            this.filter()
        },
        filterPath(path) {
            this.criteria.status = path
            this.filter()
        },
        filter() {

            var filtered

            const regex = new RegExp(this.criteria.txt, 'i')
            filtered = this.mails.filter(mail => regex.test(mail.subject) || regex.test(mail.fullname) || regex.test(mail.body))

            if (this.criteria.isRead !== null) {
                filtered = filtered.filter(mail => mail.isRead === this.criteria.isRead)
            }

            const { status } = this.criteria

            if (status === 'inbox') {
                filtered = filtered.filter(mail => mail.to === 'user@appsus.com')
            }

            else if (status === 'sent') {
                filtered = filtered.filter(mail => mail.to !== 'user@appsus.com')
            }

            this.mailsToShow = filtered

        },
        sort(type) {

            if (type === 'date') {
                this.mailsToShow.sort((a, b) => (this.convertToTimestamp(a.sentAt) - this.convertToTimestamp(b.sentAt)) * this.sortBy.date)
                this.sortBy.date *= -1
            }

            if (type === 'title') {
                this.mailsToShow.sort((a, b) => {
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
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
                this.filter()
            })
        this.$emit('hideMainHeader')
        this.remove()
    },
    components: {
        emailFolderList,
        emailCompose,
        emailAppHeader
    },
}

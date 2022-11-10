import mailService from '../services/mail.service.js'

import emailFolderList from '../pages/email-folder-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import emailAppHeader from '../cmps/email-app-header.cmp.js'

export default {
    template: `


    <email-app-header @show="$emit('showMainHeader')"/>
    <section className="mail-app">
        <main className="mail-container">
            <email-folder-list @add="add" :unRead="unRead"/>
            <email-compose v-if="isCompose" @sent="send" @removeDraft="removeDraft"/>
            <router-view @read="read" :mails="mails" :sentMails="sentMails"/>
        </main>
    </section>

        `,
    data() {
        return {
            mails: null,
            sentMails: null,
            unRead: null,
            isCompose: false
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
    },

    components: {
        emailFolderList,
        emailCompose,
        emailAppHeader
    },
}

import mailService from '../services/mail.service.js'

import emailFolderList from '../pages/email-folder-list.cmp.js'

export default {
    template: `

    <section className="mail-app">
        <main className="mail-container">
            <email-folder-list :unRead="unRead"/>
            <router-view :mails="mails"/>
        </main>
    </section>

        `,

    data() {
        return {
            mails: null,
            unRead: 0
        }
    },
    methods: {
        getUnreadLength() {
            return mailService.getUnread()
                .then(length => {
                    return length
                })
        }
    },

    computed: {

    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails)
    },

    components: {
        emailFolderList
    },
    created() {
        this.getUnreadLength()
            .then(length => this.unRead = length)
    },
    watch: {

    }
}

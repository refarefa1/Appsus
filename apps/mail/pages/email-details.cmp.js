import mailService from '../services/mail.service.js'

import emailFolderList from '../pages/email-folder-list.cmp.js'

export default {
    template: `


    <section className="mail-app">
        <main className="mail-container">
            <h1>Email details</h1>
            <pre>{{ mail }}</pre>
        </main>
    </section>
        

        `,
    data() {
        return {
            mail: null
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
        const id = this.$route.params.id
        const key = this.getKey
        mailService.get(id, key)
            .then(mail => { this.mail = mail })

    },
    components: {
        emailFolderList
    }
}


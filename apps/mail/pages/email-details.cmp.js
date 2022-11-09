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

    created() {
        const id = this.$route.params.id
        mailService.get(id)
            .then(mail => { this.mail = mail })

    },
    components: {
        emailFolderList
    }
}

// mail.isRead = true
// mailService.update(mail)
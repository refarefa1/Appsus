import mailService from '../services/mail.service.js'

import emailList from '../cmps/email-list.cmp.js'
import emailFolderList from '../pages/email-folder-list.cmp.js'

export default {
    template: `

    <section className="mail-app">
        <main className="mail-container">
            <email-folder-list />
            <email-list :mails="mails"/>
        </main>
    </section>

        `,

    data() {
        return {
            mails: null,
        }
    },
    methods: {
    
    },

    computed: {

    },

    created() {
        mailService.query()
            .then(mails => this.mails = mails)
    },

    components: {
        emailList,
        emailFolderList
    }
}
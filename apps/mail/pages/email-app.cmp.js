import mailService from '../services/mail.service.js'

import emailFolderList from '../pages/email-folder-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'

export default {
    template: `

    <section className="mail-app">
        <main className="mail-container">
            <email-folder-list @add="add" :unRead="unRead"/>
            <email-compose @sent="send"/>
            <router-view @read="read" :mails="mails"/>
        </main>
    </section>

        `,
    data() {
        return {
            mails: null,
            unRead: null
        }
    },
    methods: {
        getUnreadLength() {
            const length = this.mails.filter(mail => !mail.isRead).length
            this.unRead = length
        },

        read(mail) {
            mail.isRead = true
            this.getUnreadLength()
        },
        add() {
            console.log('adding...');
        },
        send(mail){
            console.log(mail);
        }
    },

    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
                this.getUnreadLength()
            })
    },

    components: {
        emailFolderList,
        emailCompose
    },
}

import mailService from '../services/mail.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

import emailFolderList from '../pages/email-folder-list.cmp.js'

export default {
    template: `


    <section v-if="mail" className="mail-app flex column" >
            <section className="mail-details-paging">
                <button @click="goBack" title="Go back" class="back"></button>
                <button @click="deleteMail(mail)" title="Delete mail" class="delete-mail"></button>
            </section>
            <section className="mail-subject">
                <h2>{{ mail.subject }}</h2>
            </section>
            <section className="mail-details-profile">
                <img src="assets/img/user.svg" alt="" />
                <h3>{{ mail.fullname }}</h3>
                <p>&lt{{ mail.from }}&gt</p>
            </section>
            <section className="mail-details-body">
                <p>{{ mail.body }}</p>
            </section>

            <section className="mail-details-footer">
                <button>Respond</button>
                <button>Forward</button>
            </section>
    </section>
        

        `,
    data() {
        return {
            mail: null,
        }
    },
    computed: {
        getKey() {
            const history = this.$router.options.history.state.back
            var key
            if (history === '/email/sent') key = 'sentMails'
            if (history === '/email/inbox') key = 'mails'
            return key
        },
    },
    methods: {
        goBack() {
            const key = this.getKey
            if (key === 'sentMails') this.$router.push('sent')
            else if (key === 'mails') this.$router.push('inbox')
        },
        deleteMail(mail) {
            const key = this.getKey
            this.goBack()
            eventBus.emit('delete-mail', { mail, key })
        }
    },

    created() {
        const id = this.$route.params.id
        const key = this.getKey
        mailService.get(id, `${key}DB`)
            .then(mail => { this.mail = mail })

    },
    components: {
        emailFolderList
    }
}


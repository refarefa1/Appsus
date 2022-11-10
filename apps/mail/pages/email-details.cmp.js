import { eventBus } from '../../../services/event-bus.service.js';
import emailFolderList from '../pages/email-folder-list.cmp.js'
import mailService from '../services/mail.service.js';

export default {
    template: `

    <section v-if="mail" className="mail-app-details flex column" >
            <section className="mail-details-paging">
                <button @click="$router.back()" title="Go back" class="back"></button>
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
    methods: {
        deleteMail(mail) {
            mailService.remove(mail.id)
            eventBus.emit('deleted', mail)
            this.$router.back()
        }
    },

    created() {
        const id = this.$route.params.id
        mailService.get(id)
            .then(mail => this.mail = mail)
    },
    components: {
        emailFolderList
    }
}


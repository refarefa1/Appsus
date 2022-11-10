import mailService from "../services/mail.service.js"

export default {
    props: ['unRead'],
    template: `
        <aside className="folder-list-container">

        <button @click="$emit('add')" className="new-mail">New email</button>
        <section @click="goTo('inbox')" className="inbox">
            <button></button>
            <h2>Inbox</h2>
            <h3>{{ unRead }}</h3>
        </section>

        <section @click="goTo('sent')" className="sent">
            <button></button>
            <h2>Sent</h2>
        </section>

        </aside>
        `,
    methods: {
        goTo(location) {
            this.$router.push(`/email/${location}`)
        }
    }

}
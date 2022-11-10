export default {
    emits: ['filterPath', 'add'],
    props: ['mails'],
    template: `
        <aside className="folder-list-container">

        <button @click="$emit('add')" className="new-mail">New email</button>
        <section @click="goTo('inbox')" className="inbox">
            <button></button>
            <h2>Inbox</h2>
            <h3 v-if="mails">{{ unRead }}</h3>
        </section>

        <section @click="goTo('sent')" className="sent">
            <button></button>
            <h2>Sent</h2>
        </section>

        </aside>
        `,
    methods: {
        goTo(location) {
            this.$emit('filterPath', location)
            this.$router.push(`/email/${location}`)
        }
    },
    computed: {
        unRead() {
            var filtered = this.mails.filter(mail => mail.to === 'user@appsus.com')
            return filtered.filter(mail => !mail.isRead).length
        }
    }

}
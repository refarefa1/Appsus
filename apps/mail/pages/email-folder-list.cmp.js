export default {
    emits: ['filterPath', 'add'],
    props: ['mails'],
    template: `
        <aside class="folder-list-container">

        <button @click="$emit('add')" class="new-mail">New email</button>

        <section @click="goTo('inbox')" class="inbox">
            <button></button>
            <h2>Inbox</h2>
            <h3 v-if="mails">{{ unRead }}</h3>
        </section>

        <section @click="goTo('sent')" class="sent">
            <button></button>
            <h2>Sent</h2>
        </section>

        <section @click="goTo('starred')" class="starred">
            <button></button>
            <h2>Starred</h2>
        </section>

        <section @click="goTo('trash')" class="trash">
            <button></button>
            <h2>Trash</h2>
        </section>

        <section @click="goTo('draft')" class="draft">
            <button></button>
            <h2>Draft</h2>
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
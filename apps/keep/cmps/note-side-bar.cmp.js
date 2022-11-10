
export default {
    template: `
        <aside class="side-bar-container">

        <section @click="goTo('notes')" class="notes">
            <button></button>
            <h2>Notes</h2>
        </section>

        <section @click="goTo('notes')" class="notes">
            <button></button>
            <h2>Reminders</h2>
        </section>

        <section @click="goTo('notes')" class="notes">
            <button></button>
            <h2>Label Edit</h2>
        </section>

        <section @click="goTo('sent')" class="notes">
            <button></button>
            <h2>Archive</h2>
        </section>

        <section @click="goTo('sent')" class="notes">
            <button></button>
            <h2>Trash</h2>
        </section>

        </aside>
        `,
    methods: {
        goTo(location) {
            this.$router.push(`/keep/${location}`)
        }
    }

}
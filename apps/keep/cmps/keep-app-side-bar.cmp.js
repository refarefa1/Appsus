
export default {
    template: `
        <aside class="keep-app-side-bar-container">

            <section @click="goTo('notes')" class="notes notes-icon active">
                <button class="fa-regular"></button>
                <h2>Notes</h2>
            </section>

            <section @click="goTo('notes')" class="notes label">
                <button></button>
                <h2>Label Edit</h2>
            </section>

            <section @click="goTo('sent')" class="notes archive">
                <button></button>
                <h2>Archive</h2>
            </section>

            <section @click="goTo('sent')" class="notes trash">
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
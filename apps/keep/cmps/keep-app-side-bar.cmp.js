
export default {
    template: `
        <aside class="keep-app-side-bar-container"> 

            <section @click="goTo('notes')" class="notes notes-icon active">
                <button class="fa-regular"></button>
                <h2>Notes</h2>
            </section>

            <section @click="goTo('archive')" class="notes archive">
                <button></button>
                <h2>Archive</h2>
            </section>

        </aside>
        `,
    created() {
        // this.selectedLoc = this.selectedLoaction
        // console.log(`this.selectedLoc:`, this.selectedLoc)
    },
    data() {
        return {
            // selectedLoc: null,
        }
    },

    methods: {
        goTo(location) {
            if (location === 'notes') {

            }
            this.$emit('goTo', location)
            this.$router.push(`/keep/${location}`)

        },
        // selectedLoaction() {
        //     const path = this.$route.fullPath.split('/')
        //     console.log(`path[path.length - 1]:`, path[path.length - 1])
        //     return path[path.length - 1]
        // }

    },

}
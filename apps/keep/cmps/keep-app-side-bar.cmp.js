
export default {
    template: `
        <aside class="keep-app-side-bar-container" v-if="selectedLoc"> 

            <section @click="goTo('notes')" class="notes notes-icon" :class="{'active': selectedLoc==='notes'}">
                <button class="fa notes"></button>
                <h2>Notes</h2>
            </section>

            <section @click="goTo('archive')" class="notes archive" :class="{'active': selectedLoc==='archive'}">
                <button class="fa archive"></button>
                <h2>Archive</h2>
            </section>

        </aside>
        `,
    created() {
        let path = this.$route.fullPath.split('/')
        const loc = path[path.length - 1]
        this.selectedLoc = loc
    },
    data() {
        return {
            selectedLoc: null,
        }
    },

    methods: {
        goTo(location) {
            this.$emit('goTo', location)
            this.$router.push(`/keep/${location}`)
            this.selectedLoc = location
        }
    },


}
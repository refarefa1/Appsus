export default {
    name: `note-text`,
    props: ['note'],
    template: `
        <section class="note-text flex flex-column justify-between">
        <div class="title flex justify-between align-center">
            <h1 v-if="note.info.title">{{ note.info.title }}</h1>
            <button :class="{'pinned': notePin}" class="fa pin-note" @click="pinNote"></button>
        </div>    
            <p v-if="note.info.txt" class="label">{{ note.info.txt }}</p>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {

        }
    },
    methods: {
        pinNote() {
            this.note.isPinned = !this.note.isPinned
        }
    },
    computed: {},
}


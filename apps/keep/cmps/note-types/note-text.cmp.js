import { emitUpdated } from "../../../../services/event-bus.service.js"

export default {
    name: `note-text`,
    props: ['note'],
    template: `
        <section class="note-text flex flex-column justify-between">
        <div class="title flex justify-between align-center" :class="{'justify-right': !note.info.title}">
            <h1 v-if="note.info.title">{{ note.info.title }}</h1>
            <button :class="{'pinned': notePin}" class="fa pin-note" @click.stop="pin"></button>
        </div>    
            <p v-if="note.info.txt" class="label">{{ note.info.txt }}</p>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
            notePin: this.note.isPinned

        }
    },
    methods: {
        pin() {
            const note = JSON.parse(JSON.stringify(this.note))
            note.isPinned = !note.isPinned
            emitUpdated(note)
        }
    },
    computed: {},
}


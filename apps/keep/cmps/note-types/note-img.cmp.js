import { emitUpdated } from "../../../../services/event-bus.service.js"

export default {
    name: `note-img`,
    props: ['note'],
    template: `
        <section class="note-img flex flex-column">
            <img :src="note.info.url" />
            <div class="title flex justify-between align-center" :class="{'justify-right': !note.info.title}">
                <h1 v-if="note.info.title" class=img-title>{{ note.info.title }}</h1>
                <button :class="{'pinned': notePin}" class="fa pin-note" @click.stop="pin"></button>
            </div>
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
    computed: {
    },
}



import noteImg from "./note-types/note-img.cmp.js"
import noteTodo from "./note-types/note-todo.cmp.js"
import noteVideo from "./note-types/note-video.cmp.js"
import noteText from "./note-types/note-text.cmp.js"

export default {
    name: `note-preview`,
    props: ['note'],
    template: `
        <section class="note-preview">
            <component :is="note.type" :note="note" @pin="pin"/>
        </section>
    `,
    components: {},
    data() {
        return {}
    },
    methods: {
        pin(note) {
            console.log(`pinning in preview:`, )
            this.$emit('pin', note)

        }
    },
    computed: {},
    components: {
        noteImg,
        noteText,
        noteTodo,
        noteVideo
    }
}

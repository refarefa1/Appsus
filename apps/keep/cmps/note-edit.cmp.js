import noteTextEdit from "./note-edit-type/note-text-edit.cmp.js"
import noteImgEdit from "./note-edit-type/note-img-edit.cmp.js"
import noteTodoEdit from "./note-edit-type/note-todo-edit.cmp.js"
// import noteVideo from "./note-edit-types/note-edit-video.cmp.js"


export default {
    name: `note-edit`,
    props: ['note'],
    template: `
        <section class="note-edit flex flex-column justify-between">
            <div class="header flex justify-between align-center">
                <component :is="strNoteCmp" :note="note"/>

            </div>
            <!-- <input type="note-title" v-model="note.info.title" placeholder="note.info.title" /> -->
            <button class="save" @click="edit">Save</button>
        </section>
  
    `,
    components: {},
    created() { 
        this.strNoteCmp = `${this.note.type}-edit`
    },
    data() {
        return {}
    },
    methods: {
        edit() {
            this.$emit('noteEdited', this.note)
        }
    },
    computed: {},

    components: {
        noteImgEdit,
        noteTextEdit,
        noteTodoEdit,
        // noteVideo
    }
}

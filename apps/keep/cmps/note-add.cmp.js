import noteService from "../services/note.service.js"

export default {
    name: `note-add`,
    props: [],
    template: `
    <section class="note-add">
        <input type="text" v-model="noteToEdit.info.title" placeholder="Note title..">
        <button class="add-note" @click="addNote">New Note</button>
    </section>
  
  `,
    components: {},
    data() {
        return {
            noteToEdit: noteService.getEmptyNote()
        }
    },
    methods: {
        addNote() {
            const note = noteService.save(this.noteToEdit)
            .then(note => {
                console.log(`note:`, note)
                this.$emit('noteSaved', note)
            })
            this.noteToEdit = noteService.getEmptyNote()
        }

    },
}

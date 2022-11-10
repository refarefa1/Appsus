import noteService from "../services/note.service.js"

export default {
    name: `note-add`,
    props: [],
    template: `
        <section class="note-add flex flex-column">
            <div class="title flex">
                <input type="text" v-model="noteToEdit.info.title" placeholder="Note title..">
                <button class="pin-note fa" @click="pin"></button>
            </div>
            <div class="title flex">
                <input type="text" placeholder="Note content..">
            </div>
            <!-- <component :is="note.type"/> -->
            <div class="control-panel flex justify-between">
                <div class="control-btns">
                    <button class="color fa"></button>
                    <button class="img fa"></button>
                    <button class="archive fa"></button>
                </div>
                <button class="add-note" @click="addNote">Save</button>
            </div>

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
            noteService.save(this.noteToEdit)
                .then(note => {
                    this.$emit('noteSaved', note)
                })
            this.noteToEdit = noteService.getEmptyNote()
        }

    },
    components: {

    }
}

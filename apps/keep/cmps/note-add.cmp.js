import noteService from "../services/note.service.js"
import noteAddImg from "./note-add-types/note-add-img.cmp.js"
import noteAddTodo from "./note-add-types/note-add-todo.cmp.js"
import noteAddVideo from "./note-add-types/note-add-video.cmp.js"
import noteAddText from "./note-add-types/note-add-text.cmp.js"

export default {
    name: `note-add`,
    props: ['noteType'],
    template: `
        <section class="note-add flex flex-column">
            <div class="title flex">
                <input type="text" v-model="noteToEdit.info.title" placeholder="Title">
                <button :class="{'pinned': notePin}" class="fa pin-note" @click="pinNote"></button>
            </div>
            
            <!-- <component :is="note.type"/> -->
            <div class="control-panel flex justify-between">
                <div class="control-btns">
                    <button class="color fa"></button>
                    <button class="img fa"></button>
                    <button class="archive fa"></button>
                </div>
                <div>
                    <button class="add-note" @click="$emit('cancelAdd')">Cancel</button>
                    <button class="add-note" @click="addNote">Save</button>
                </div>
                
            </div>

        </section>
    `,
    components: {},
    data() {
        return {
            noteToEdit: noteService.getEmptyNote(),
            notePin: false
        }
    },
    methods: {
        addNote() {
            // noteService.save(this.noteToEdit)
            //     .then(note => {
            //         this.$emit('noteSaved', note)
            //     })
            // this.noteToEdit = noteService.getEmptyNote()
        },
        pinNote() {
            console.log(`pining note...:`)
            this.notePin = !this.notePin

        }

    },
    components: {
        noteAddImg,
        noteAddText,
        noteAddTodo,
        noteAddVideo
    }
}

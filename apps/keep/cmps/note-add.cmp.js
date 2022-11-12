import noteService from "../services/note.service.js"

import noteTextAdd from "./note-add-types/note-text-add.cmp.js"
import noteTodoAdd from "./note-add-types/note-todo-add.cmp.js"
import noteImgAdd from "./note-add-types/note-img-add.cmp.js"
import noteVideoAdd from "./note-add-types/note-video-add.cmp.js"

export default {
    name: `note-add`,
    props: ['noteType'],
    template: `
        <section class="note-add flex flex-column">

            
            <div v-if="noteToEdit" class="edit-area">
                <component :is="strNoteCmp" :note="noteToEdit"/>
                
                <div class="control-panel flex justify-between">
                    <div class="control-btns">
                        <button class="bg-color fa"><input type="color" @click.stop="" v-model="noteToEdit.style.backgroundColor"></button>  
                        <button class="font-color fa" @click.stop=""><input type="color" @click.stop="" v-model="noteToEdit.style.color"></button>
                        <button class="img fa"></button>
                        <button class="archive fa"></button>
                    </div>
                    <div>
                        <button class="add-note" @click="$emit('cancelAdd')">Cancel</button>
                        <button class="add-note" @click="addNote">Save</button>
                    </div>
                    
                </div>
            </div>

        </section>
    `,
    components: {},
    data() {
        return {
            noteToEdit: null,
            strNoteCmp: null
        }
    },
    created() {
        this.strNoteCmp = `${this.noteType}-add`
        this.noteToEdit = noteService.getEmptyNote(this.noteType)

    },

    methods: {
        addNote() {
            if (this.noteToEdit.type === "note-todo") {
                const emptyTodosFilter = this.noteToEdit.info.todos.filter(todo => todo.txt)
                this.noteToEdit.info.todos = emptyTodosFilter
            }
            noteService.save(this.noteToEdit)
                .then(note => {
                    this.$emit('noteSaved', note)
                })
        },

    },
    components: {
        noteTextAdd,
        noteTodoAdd,
        noteImgAdd,
        noteVideoAdd
    }
}

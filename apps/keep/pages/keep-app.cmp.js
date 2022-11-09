import noteService from '../services/note.service.js'

import noteList from '../cmps/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteEdit from '../cmps/note-edit.cmp.js'

export default {
    name: `keep-app`,
    props: [],
    template: `
    <section className="keep-app">
        <note-edit v-if="noteToEdit" :note="noteToEdit" @noteEdited="edit"/>
        <div className="note-add-container">
            <note-add class="flex justify-center" @noteSaved="save" />
        </div>

        

        <note-list v-if="notes"
            @remove="removeNote" 
            @noteClicked="noteClicked"
            :notes="notes" />
        
    </section>
  
  `,
    components: {},
    created() {
        noteService.query()
            .then(notes => this.notes = notes)
    },
    data() {
        return {
            notes: null,
            noteToEdit: null
        }
    },
    methods: {
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)

                    // const msg = {
                    //     txt: `Note ${noteId} deleted...`,
                    //     type: `success`,
                    // }
                    // eventBus.emit('user-msg', msg)
                })
        },
        save(note) {
            this.notes.push(note)
        },
        edit(updatedNote) {
            const idx = this.notes.findIndex(note => note.id === updatedNote.id)
            this.notes.splice(idx, 1, updatedNote)
            noteService.edit(updatedNote)
                .then(() => this.noteToEdit = null)
        },
        noteClicked(note) {
            this.noteToEdit = note
        }

    },
    computed: {},
    components: {
        noteList,
        noteAdd,
        noteEdit,

    }
}

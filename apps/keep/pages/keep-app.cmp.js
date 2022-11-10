import noteService from '../services/note.service.js'

import noteList from '../cmps/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteEdit from '../cmps/note-edit.cmp.js'
import noteSideBar from '../cmps/note-side-bar.cmp.js'
import noteAppHeader from '../cmps/note-app-header.cmp.js'

export default {
    name: `keep-app`,
    emits: ['showMainHeader', 'hideMainHeader'],
    template: `

        <note-app-header @show="$emit('showMainHeader')"/>

        <section class="keep-app flex">
            <note-side-bar />

            <main class="main-container flex flex-column align-center">
                <note-edit v-if="noteToEdit" :note="noteToEdit" @noteEdited="edit" @cancelEdit="noteToEdit=null"/>
                <note-add class="" @noteSaved="save" />
    
                <note-list v-if="notes"
                    @remove="removeNote" 
                    @noteClicked="noteClicked"
                    :notes="notes" />
            </main>
            
        </section>
    `,
    components: {},
    created() {
        noteService.query()
            .then(notes => this.notes = notes)
            this.$emit('hideMainHeader')
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
        },


    },
    computed: {},
    components: {
        noteList,
        noteAdd,
        noteEdit,
        noteSideBar,
        noteAppHeader
    }
}

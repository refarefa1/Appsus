import noteService from '../services/note.service.js'

import noteList from '../cmps/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteEdit from '../cmps/note-edit.cmp.js'
import keepAppSideBar from '../cmps/keep-app-side-bar.cmp.js'
import keepAppHeader from '../cmps/keep-app-header.cmp.js'

export default {
    name: `keep-app`,
    emits: ['showMainHeader', 'hideMainHeader'],
    template: `

        <keep-app-header :class="scrolled ? 'scroll' : ''" @show="$emit('showMainHeader')"/>

        <section class="keep-app flex">
            <keep-app-side-bar />

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
        window.addEventListener('scroll', this.handleScroll)



    },
    data() {
        return {
            notes: null,
            noteToEdit: null,
            scrolled: false,

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
        handleScroll() {
            this.scrolled = window.scrollY > 0;
        },


    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    computed: {},
    components: {
        noteList,
        noteAdd,
        noteEdit,
        keepAppSideBar,
        keepAppHeader
    }
}

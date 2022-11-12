import noteService from '../services/note.service.js'

import noteList from '../cmps/note-list.cmp.js'
import noteAddFolded from '../cmps/note-add-folded.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteEdit from '../cmps/note-edit.cmp.js'
import keepAppSideBar from '../cmps/keep-app-side-bar.cmp.js'
import keepAppHeader from '../cmps/keep-app-header.cmp.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default {
    name: `keep-app`,
    emits: ['showMainHeader', 'hideMainHeader'],
    template: `

        <keep-app-header :class="scrolled ? 'scroll' : ''" @show="$emit('showMainHeader')"/>

        <section class="keep-app flex">

            <div v-if="noteToEdit" class="black-screen" @click="noteToEdit=null"></div>
            <keep-app-side-bar @goTo="filter" />

            <main class="main-container flex flex-column align-center">
                <note-edit v-if="noteToEdit" :note="noteToEdit" @noteEdited="edit" @cancelEdit="noteToEdit=null"/>
                <note-add-folded v-if="!selectedNoteTypeToCreate" @noteTypeSelected="setNoteType" />
                <note-add v-if="selectedNoteTypeToCreate" :noteType="selectedNoteTypeToCreate" @cancelAdd="selectedNoteTypeToCreate=null" @noteSaved="save" />
    
                <router-view v-if="notesToShow"
                    @remove="removeNote"
                    @archive="archiveNote"
                    @noteClicked="noteClicked"
                    :notes="notesToShow"> </router-view>
            </main>            

        </section>
    `,
    components: {},
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
                const path = this.$route.fullPath.split('/')
                this.filter(path[path.length - 1])

            })
        this.$emit('hideMainHeader')
        window.addEventListener('scroll', this.handleScroll)
        eventBus.on('updated', this.edit)
    },
    data() {
        return {
            notes: null,
            noteToEdit: null,
            scrolled: false,
            selectedNoteTypeToCreate: null,
            notesToShow: null
        }
    },
    methods: {
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(noteB => noteB.id === noteId)
                    this.notes.splice(idx,1)
                    let path = this.$route.fullPath.split('/')
                    const loc = path[path.length - 1]
                    this.filter(loc)
                    eventBus.emit('user-msg', 'Note Removed')
                })
        },
        archiveNote(note) {
            note.isArchived = !note.isArchived
            noteService.edit(note)
                .then(() => {
                    let path = this.$route.fullPath.split('/')
                    const loc = path[path.length - 1]
                    this.filter(loc)
                    eventBus.emit('user-msg', 'Note Archived')

                })
        },
        save(note) {
            noteService.save(note)
            .then(() => {
                this.notes.push(note)
                let path = this.$route.fullPath.split('/')
                const loc = path[path.length - 1]
                this.filter(loc)
                this.selectedNoteTypeToCreate = null
                eventBus.emit('user-msg', 'Note Add')
            })
        },
        edit(note) {
            noteService.edit(note)
                .then((updatedNote) => {
                    const idx = this.notes.findIndex(note => note.id === updatedNote.id)
                    this.notes.splice(idx, 1, updatedNote)
                    this.noteToEdit = null
                    let path = this.$route.fullPath.split('/')
                    const loc = path[path.length - 1]
                    this.filter(loc)
                    eventBus.emit('user-msg', 'Note Edited')
                })
        },
        noteClicked(note) {
            this.noteToEdit = note
        },
        handleScroll() {
            this.scrolled = window.scrollY > 0;
        },
        setNoteType(noteType) {
            this.selectedNoteTypeToCreate = noteType
        },
        filter(location) {
            if (location === 'notes') this.notesToShow = this.notes.filter(note => !note.isArchived)
            else {
                this.notesToShow = this.notes.filter(note => note.isArchived)
            }
        }


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
        keepAppHeader,
        noteAddFolded
    }
}

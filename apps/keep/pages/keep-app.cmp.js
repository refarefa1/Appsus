import noteService from '../services/note.service.js'

import noteList from '../cmps/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'

export default {
    name: `keep-app`,
    props: [],
    template: `
    <section className="keep-app">
        <h1>keep-app</h1>

        <note-add @noteSaved="save" />

        <note-list v-if="notes"
            @remove="removeNote" 
            :notes="notes" />
    </section>;
  
  `,
    components: {},
    created() {
        noteService.query()
            .then(notes => this.notes = notes)
    },
    data() {
        return {
            notes: null,
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
            console.log(`note:`, note)
            this.notes.push(note)
        }
    },
    computed: {},
    components: {
        noteList,
        noteAdd,

    }
}

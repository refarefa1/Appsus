import noteService from '../services/note.service.js'
import noteList from '../cmps/note-list.cmp.js'

export default {
    name: `keep-app`,
    props: [],
    template: `
    <section className="keep-app">
        <h1>keep-app</h1>
        <note-list v-if="notes"
            @remove="removeNote" 
            :notes="notes">
        </note-list>

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
    },
    computed: {},
    components: {
        noteList,

    }
}

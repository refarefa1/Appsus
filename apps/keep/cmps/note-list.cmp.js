import notePreview from './note-preview.cmp.js'

export default {
    name: `note-list`,
    props: ['notes'],
    template: `
    <section class="note-list">
        <ul>
            <li v-for="note in notes" :key="note.id" @click="editNote(note.id)">
                <note-preview :note="note" />
                <button class="remove-note" @click.stop="remove(note.id)">X</button>
            </li>
        </ul>
    </section>

  
  `,
    methods: {
        remove(noteId) {
            console.log(`removing...` + ' note:' + noteId)
            this.$emit('remove', noteId)
        },
        editNote(noteId) {
            console.log('editing...')
            console.log(noteId)
        }
    },
    computed: {},
    components: {
        notePreview
    },
}

import notePreview from './note-preview.cmp.js'

export default {
    name: `note-list`,
    props: ['notes'],
    template: `
    <section class="note-list">
        <ul class="clean-list">
            <li class="note-container" v-for="note in notes" :key="note.id" @click="editNote(note)">
                <note-preview :note="note" />
                <div class="actions hide">
                    <button class="remove-note" @click.stop="remove(note.id)">X</button>
                </div>
            </li>
        </ul>
    </section>

  
  `,
    methods: {
        remove(noteId) {
            console.log(`removing...` + ' note:' + noteId)
            this.$emit('remove', noteId)
        },
        editNote(clickedNote) {
            console.log('noteClicked...')
            const noteToEdit = JSON.parse(JSON.stringify(clickedNote))
            this.$emit('noteClicked', noteToEdit)
        }
    },
    computed: {},
    components: {
        notePreview
    },
}

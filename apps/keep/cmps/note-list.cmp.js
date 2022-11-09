import notePreview from './note-preview.cmp.js'

export default {
name:`note-list`,
  props: ['notes'],
  template: `
    <section class="note-list">
        <ul>
            <li v-for="note in notes" :key="note.id">
                <note-preview :note="note" />
                <pre>{{ note }}</pre>
                <button class="remove-note" @click="remove(note.id)">X</button>
            </li>
        </ul>
    </section>

  
  `,
  methods: {
      remove(noteId){
          this.$emit('remove', noteId)
        }
    },
    computed: {},
    components:{
        notePreview
    },
}

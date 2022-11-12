
export default {
  name: `note-text-edit`,
  props: ['note'],
  template: `
    <section class="note-text-add flex flex-column">
                <input type="text" v-model="note.info.title" placeholder="Title">
                <input type="text" v-model="note.info.txt" placeholder="Write a note...">
    </section>
    `,
  components: {},
  created() { },
  data() {
    return {
      notePin: false,

      pinNote() {
        console.log(`pining note...:`)
        this.notePin = !this.notePin
      },
      notePin: false,
    }
  },
  methods: {},
  computed: {},
}

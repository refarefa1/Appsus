
export default {
  name: `note-text-add`,
  props: ['note'],
  template: `
    <section class="note-text-add">
            <div class="title flex">
                <input type="text" v-model="note.info.title" placeholder="Title">
                <button :class="{'pinned': notePin}" class="fa pin-note" @click="pinNote"></button>
            </div>
            <div class="content flex">
                <input type="text" v-model="note.info.txt" placeholder="Write a note...">
            </div>
    </section>
    `,
    
  components: {},
  created() { },
  data() {
    return {
      notePin: false,

      pinNote() {
        this.notePin = !this.notePin
      },
      notePin: false,
    }
  },
  methods: {},
  computed: {},
}

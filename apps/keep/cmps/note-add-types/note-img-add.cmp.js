

export default {
  name: `note-img-add`,
  props: ['note'],
  template: `
      <section class="note-text-add">
            <div class="title flex">
                <input type="text" v-model="note.info.title" placeholder="Title">
                <button :class="{'pinned': notePin}" class="fa pin-note" @click="pinNote"></button>
            </div>
            <div class="content flex">
                <input v-if="!selectedFile" type="text" v-model="note.info.url" placeholder="insert url">
                
            </div>
            <div class="upload-from-pc">
              <input type="file" @change="onFileSelected"/>
              <button class="upload">upload</button>
            </div>
    </section>
    `,

  components: {},
  created() { },
  data() {
    return {
      selectedFile: null,
      pinNote() {
        console.log(`pining note...:`)
        this.notePin = !this.notePin
      },
      notePin: false,
    }
  },
  methods: {
    onFileSelected(event) {
      console.log(`event:`, event)
      this.selectedFile=event.target.files[0]
    }
  },
  computed: {},
}

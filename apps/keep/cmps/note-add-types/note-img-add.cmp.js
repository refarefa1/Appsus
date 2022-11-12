

export default {
  name: `note-img-add`,
  props: ['note'],
  template: `
      <section class="note-text-add">
            <div class="title flex">
                <input type="text" v-model="note.info.title" placeholder="Title">
                <button :class="{'pinned': notePin}" class="fa pin-note" @click="pinNote"></button>
            </div>
            <div class="content flex column">
                <!-- <input v-if="!selectedFile" type="text" v-model="note.info.url" placeholder="insert url"> -->
                <input v-if="!selectedFile" type="text" v-model="note.info.url" placeholder="insert url">
                
                <button v-if="!note.info.url" class="img-upload fa" @click.stop=""><input type="file" @change="loadImageFromInput" /></button>
                
            </div>
    </section>
    `,

  components: {},
  created() { },
  data() {
    return {
      selectedFile: null,
      pinNote() {
        this.notePin = !this.notePin
      },
      notePin: false,
    }
  },
  methods: {
    loadImageFromInput(ev) {
      const changeNoteImgUrl = this.changeNoteImgUrl
      const reader = new FileReader()
      // After we read the file
      reader.onload = function (event) {
        let img = new Image() // Create a new html img element
        img.src = event.target.result // Set the img src to the img file we read
        // Run the callBack func, To render the img on the canvas
        //   img.onload = onImageReady.bind(null, img)
        // Can also do it this way:
        img.onload = () => {changeNoteImgUrl(img.src)}
      }
      reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
    },
    changeNoteImgUrl(url) {
      this.note.info.url = url
    }

  },
  computed: {

  },

}

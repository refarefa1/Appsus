

export default {
  name: `note-img-edit`,
  props: ['note'],
  template: `
      <section class="note-text-edit">
            <div class="title flex">
                <input type="text" v-model="note.info.title" placeholder="Title">
            </div>
            <div class="content flex">
              <img :src="note.info.url" alt="" />
                <!-- <input v-if="!selectedFile" type="text" v-model="note.info.url" placeholder="insert url"> -->
                <!-- <input v-if="!selectedFile" type="text" v-model="note.info.url" placeholder="insert url"> -->
                <input type="file" @change="loadImageFromInput" />
                
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

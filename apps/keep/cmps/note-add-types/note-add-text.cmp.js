
export default {
name:`note-add-text`,
  props: ['note'],
  template: `
    <section class="note-add-text">
            <div class="content flex">
                <input type="text" v-model="note.info.content" placeholder="Content">
            </div>
    </section>
  
  `,
components:{},
created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}

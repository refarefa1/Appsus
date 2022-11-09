export default {
name:`note-preview`,
  props: ['note'],
  template: `
    <section class="note-preview flex column">
        <div className="title">{{ note.info.title }} </div>
        <div className="txt"> Text </div>
    </section>
  `,
components:{},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}

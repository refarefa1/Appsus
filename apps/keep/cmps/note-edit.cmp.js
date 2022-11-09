export default {
    name: `note-edit`,
    props: ['note'],
    template: `
        <section class="note-edit">
            <h1>{{ note.info.title }}</h1>
            <input type="note-title" v-model="note.info.title" placeholder="note.info.title" />
            <pre>{{ note }}</pre>
            <button class="save" @click="edit">Save</button>
        </section>
  
  `,
    components: {},
    created() { },
    data() {
        return {}
    },
    methods: {
        edit() {
            console.log(`editing..:`, this.note.id)
            this.$emit('noteEdited', editedNote)
        }
    },
    computed: {},
}

export default {
    name: `note-edit`,
    props: ['note'],
    template: `
        <section class="note-edit flex flex-column justify-between">
            <div class="header flex justify-between align-center">
                <button class="pin-note fa"></button>
                <h1>{{ note.info.title }}</h1>
                <button class="cancel fa" @click="$emit('cancelEdit')"></button>
            </div>
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
            this.$emit('noteEdited', this.note)
        }
    },
    computed: {},
}

export default {
    name: `note-text`,
    props: ['note'],
    template: `
        <section class="note-text flex flex-column justify-between">
            <h1 v-if="note.info.title">{{ note.info.title }}</h1>
            <p v-if="note.info.txt" class="label">{{ note.info.txt }}</p>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {}
    },
    methods: {},
    computed: {},
}


export default {
    name: `note-text`,
    props: ['note'],
    template: `
        <section class="note-text">
            <h1 class="note-title">{{ note.info.title }}</h1>
            <p class="label">{{ note.info.txt }}</p>
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


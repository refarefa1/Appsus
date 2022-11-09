export default {
    name: `note-text`,
    props: ['note'],
    template: `
        <section class="note-text">
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


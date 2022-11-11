export default {
    name: `note-img`,
    props: ['note'],
    template: `
        <section class="note-img flex flex-column">
            <img :src="note.info.url" />
            <h1 class=img-title>{{ note.info.title }}</h1>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
        }
    },
    methods: {},
    computed: {
    },
}



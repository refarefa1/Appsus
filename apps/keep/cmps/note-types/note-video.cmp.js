export default {
    name: `note-video`,
    props: ['note'],
    template: `
        <section class="note-video">
            <h1 class=img-title>{{ note.info.title }}</h1>
            <!-- <img class="img">{{ note.info.txt }}</i> -->
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



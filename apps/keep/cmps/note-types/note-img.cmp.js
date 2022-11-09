export default {
    name: `note-img`,
    props: ['note'],
    template: `
        <section class="note-img">
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



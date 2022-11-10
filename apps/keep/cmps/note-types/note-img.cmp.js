export default {
    name: `note-img`,
    props: ['note'],
    template: `
        <section class="note-img">
            <h1 class=img-title>{{ note.info.title }}</h1>
            <img :src="imgUrl" />
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
        imgUrl() {
            return `assets/img/${this.note.info.title.toLowerCase()}.jpg`
        }
    },
}



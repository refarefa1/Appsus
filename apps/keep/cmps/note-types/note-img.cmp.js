export default {
    name: `note-img`,
    props: ['note'],
    template: `
        <section class="note-img flex flex-column">
            <img :src="note.info.url" />
            <div class="title flex justify-between align-center">
                <h1 v-if="note.info.title" class=img-title>{{ note.info.title }}</h1>
                <button :class="{'pinned': notePin}" class="fa pin-note" @click.stop="pinNote"></button>

            </div>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
        }
    },
    methods: {
        pinNote() {
            this.note.isPinned = !this.note.isPinned
        }
    },
    computed: {
    },
}



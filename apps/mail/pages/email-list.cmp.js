import emailPreview from '../cmps/email-preview.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'

export default {
    emits: ['read', 'sort', 'filterRead', 'remove', 'mark'],
    props: ['mailsToShow'],
    template: `

        <ul class="mail-list-container">

            <li class="sort-preview">
                <h3>Sort by:</h3>
                <h4 @click="sort('title')">Title</h4>
                <h4 @click="sort('date')">Date</h4>
                <email-filter @filterRead="filterRead"/>
            </li>
            <li v-for="mail in mailsToShow" @click="read(mail)" :key="mail.id" class="mail-preview">
                <section className="mail-hover">
                    <button @click="" title="Make note" class="note-btn"></button>
                    <button @click.stop="mark(mail)" title="Mark as read/unread" class="toggle-btn"></button>
                    <button @click.stop="remove(mail)" title="Delete mail" class="remove-btn"></button>
                </section>
                <router-link :to="'/email/' + mail.id">
                    <button class="star-btn"></button>
                    <h2 class="mail-fullname" :class="{ read: mail.isRead }">{{ mail.fullname }}</h2>
                    <email-preview :mail="mail" />
                </router-link>
            </li>



        </ul>

        `,
    methods: {
        read(mail) {
            this.$emit('read', mail)
        },
        sort(type) {
            this.$emit('sort', type)
        },
        filterRead(type) {
            this.$emit('filterRead', type)
        },
        remove(mail) {
            this.$emit('remove', mail)
        },
        mark(mail) {
            this.$emit('mark', mail)
        }
    },
    computed:{

    },

    components: {
        emailPreview,
        emailFilter
    },

}
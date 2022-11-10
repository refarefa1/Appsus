import emailPreview from '../cmps/email-preview.cmp.js'

export default {
    props: ['mailsToShow', 'mails', 'filterBy'],
    template: `

        <ul class="mail-list-container">

            <li class="sort-preview">
                <h3>Sort by:</h3>
                <h4 @click="sort('title')">Title</h4>
                <h4 @click="sort('date')">Date</h4>
                <section className="filter">
                    <h3>Filter by:</h3>
                    <h4 @click="filter('all')">All</h4>
                    <h4 @click="filter('read')">Read</h4>
                    <h4 @click="filter('unread')">Unread</h4>
                </section>
            </li>
            <li v-for="mail in mailsToShow" @click="read(mail)" :key="mail.id" class="mail-preview">
                <router-link :to="'/email/' + mail.id">
                <button class="star-btn"></button>
                <h2 class="mail-fullname" :class="{ read: mail.isRead }">{{ mail.fullname }}</h2>
                <email-preview :mail="mail"/>
                </router-link>
            </li>
            <li v-if="!filterBy" v-for="mail in mails" @click="read(mail)" :key="mail.id" class="mail-preview">
                <router-link :to="'/email/' + mail.id">
                <button class="star-btn"></button>
                <h2 class="mail-fullname" :class="{ read: mail.isRead }">{{ mail.fullname }}</h2>
                <email-preview :mail="mail"/>
                </router-link>
            </li>


        </ul>

        `,
    methods: {
        read(mail) {
            this.$emit('read', mail)
        },
        sort(type) {
            const path = this.$route.fullPath
            this.$emit('sort', { type, path })
        },
        filter(type) {
            const path = this.$route.fullPath
            this.$emit('filter', { type, path })
        }
    },

    components: {
        emailPreview
    },

}
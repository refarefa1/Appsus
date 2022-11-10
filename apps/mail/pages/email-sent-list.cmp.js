import emailPreview from '../cmps/email-preview.cmp.js'

export default {
    props: ['sentMails'],
    template: `

<ul class="mail-list-container">

<li class="sort-preview">
    <h3>Sort by:</h3>
    <h4 @click="sort('title')">Title</h4>
    <h4 @click="sort('date')">Date</h4>
</li>
<li v-for="mail in sentMails" @click="read(mail)" :key="mail.id" class="mail-preview">
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
            this.$emit('sort', type)
        }
    },
    data() {
        return {
            isRead: false
        }
    },
    components: {
        emailPreview
    }
}
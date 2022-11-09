import emailPreview from '../cmps/email-preview.cmp.js'

export default {
    props: ['sentMails'],
    template: `

       <ul class="mail-list-container">
            <li v-for="mail in sentMails" @click="read(mail)" :key="mail.id" class="mail-preview">
                <router-link :to="'/email/' + mail.id">
                <button class="toggle-read-btn"></button>
                <button class="star-btn"></button>
                <button class="mark-btn"></button>
                <email-preview :mail="mail"/>
                </router-link>
            </li>
        </ul>

        `,
    methods: {
        read(mail) {
            this.$emit('read', mail)
        }
    },
    components: {
        emailPreview
    }
}
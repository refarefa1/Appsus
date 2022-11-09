import emailPreview from './email-preview.cmp.js'

export default {
    props: ['mails'],
    template: `

        <ul class="mail-list-container">
            <li v-for="mail in mails" @click="select(mail)" :key="mail.id" class="mail-preview">
                <router-link :to="'/email/' + mail.id">
                <button class="toggle-read-btn"></button>
                <button class="star-btn"></button>
                <button class="mark-btn"></button>
                <email-preview :mail="mail"/>
                </router-link>
            </li>
        </ul>

        `,
    data() {
        return {

        }
    },
    methods: {
        select(mail) {
            this.$emit('selected', mail)
        }
    },

    components: {
        emailPreview
    }
}
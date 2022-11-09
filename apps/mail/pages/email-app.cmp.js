import mailService from '../services/mail.service.js'

import emailList from '../cmps/email-list.cmp.js'

export default {
    template: `
        <h1>Email APP</h1> 
        <email-list :mails="mails"/>
        `,

    data() {
        return {
            mails: null
        }
    },

    computed: {

    },

    created() {
        mailService.query()
            .then(mails => this.mails = mails)
    },

    components: {
        emailList
    }
}
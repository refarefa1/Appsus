import mailService from '../services/mail.service.js'

export default {
    template: `

        <h1>Email details</h1>
            <h2>Details!!!</h2> 

        `,
    data() {
        return {
            mail: null
        }
    },

    created() {
        const id = this.$route.params.id
        // mailService

    }
}
export default {
    props: ['mail'],
    template: `
         <section class="mail-prev-text flex align-center">
        <h2 class="mail-title" :class="{ read: mail.isRead }">{{ mail.subject }}</h2>
        <h2 class="mail-body" :class="{ read: mail.isRead }">{{ mail.body }}</h2>
        </section>   
        <h3 class="mail-date">{{ showDate(mail.sentAt) }}</h3>

        `,
        methods:{
            showDate(timestamp){
                const date = new Date(timestamp)
                return date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
            }
        }
}
export default {
    props: ['mail'],
    template: `
         <section class="mail-prev-text flex align-center">
        <h2 class="mail-title" :class="{ read: mail.isRead }">{{ mail.subject }}</h2>
        <h2 class="mail-body" :class="{ read: mail.isRead }">{{ mail.body }}</h2>
        </section>   
        <h3 class="mail-date">{{ mail.sentAt }}</h3>

        `,
}
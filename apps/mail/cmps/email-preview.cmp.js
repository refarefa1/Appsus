export default {
    props: ['mail'],
    template: `
         <section class="mail-prev-text flex align-center" :class="{ read: mail.isRead }">
        <h2 class="mail-title">{{ mail.subject }}</h2>
        <h2 class="mail-body">{{ mail.body }}</h2>
        <h3 class="mail-date">{{ mail.sentAt }}</h3>
        </section>   

        `,
}
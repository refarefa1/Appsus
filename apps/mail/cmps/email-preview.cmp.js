export default {
    props: ['mail'],
    template: `
            
        <h2 class="mail-title">{{ mail.subject }}</h2>
        <h2 class="mail-body">{{ mail.body }}</h2>
        <h3 class="mail-date">{{ mail.sentAt }}</h3>

        `,
}
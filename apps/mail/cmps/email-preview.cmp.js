export default {
    props: ['mail'],
    template: `
            
        <h2>{{ mail.subject }}</h2>
        <h2>{{ mail.body }}</h2>
        <h3>{{ mail.datePublished }}</h3>

        `,
}
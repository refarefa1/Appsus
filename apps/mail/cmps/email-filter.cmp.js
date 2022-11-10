export default {
    emits:['filterRead'],
    template: `
        <section className="filter">
                    <h3>Filter by:</h3>
                    <h4 @click="filter('all')">All</h4>
                    <h4 @click="filter('read')">Read</h4>
                    <h4 @click="filter('unread')">Unread</h4>
        </section>   
        `,
    methods: {
        filter(type) {
            this.$emit('filterRead', type)
        }
    }

}
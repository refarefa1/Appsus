export default {
    emits: ['show', 'filterTxt'],
    template: `
        <header class="app-header">

            <router-link to="/" @click="$emit('show')">
            <img class="logo" src="assets/img/mail.png" alt="logo" />
            </router-link>

            <input @input="filterTxt" v-model="filterByTxt" class="search-bar" type="text" placeholder="Search"/>
            <button class="search"></button>
            <nav class="main-nav">
                <button @click="toggleMenu = !toggleMenu" class="nav"></button>

                <section v-if="toggleMenu" className="menu">
                <router-link to="/keep" @click="toggleMenu = !toggleMenu">
                    <img src="assets/img/keep.png" alt="" />
                    <h2>Keep</h2>
                </router-link>
                <router-link to="/email/inbox" @click="toggleMenu = !toggleMenu">
                <img src="assets/img/mail.png" alt="" />
                    <h2>Mail</h2>
                </router-link>
                </section>     

            </nav>
        </header>
    `,
    data() {
        return {
            toggleMenu: false,
            filterByTxt: ''
        }
    },
    methods: {
        filterTxt() {
            this.$emit('filterTxt', this.filterByTxt)
        }
    }
}

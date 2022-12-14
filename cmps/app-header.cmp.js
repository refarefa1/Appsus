export default {
    template: `
        <header class="app-header">
            <router-link to="/">
            <h1 class="logo">AppSus</h1>
            </router-link>
            <nav class="main-nav">
                <button @click="toggleMenu" class="nav"></button>
                <section v-if="menu" className="menu">
                <!-- <router-link to="/about">About</router-link> | -->
                <router-link to="/keep">
                    <img src="assets/img/keep.png" alt="" />
                    <h2>Keep</h2>
                </router-link>
                <router-link to="/email/inbox">
                <img src="assets/img/mail.png" alt="" />
                    <h2>Mail</h2>
                </router-link>
                </section>
            </nav>
        </header>
    `,
    data() {
        return {
            menu: false
        }
    },
    methods: {
        toggleMenu() {
            this.menu = !this.menu
        },
    }
}

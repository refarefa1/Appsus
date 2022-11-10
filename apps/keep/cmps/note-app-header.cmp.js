export default {
    template: `
        <header class="app-header">

            <router-link to="/" @click="$emit('show')">
            <h1 class="logo">AppSus</h1>
            </router-link>

            <input class="search-bar" type="text" placeholder="Search"/>
            <button class="search"></button>
            <nav class="main-nav">
                <button @click="toggleMenu = !toggleMenu" class="nav"></button>
                <section v-if="toggleMenu" className="menu">
                <!-- <router-link to="/about">About</router-link> | -->
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
            toggleMenu: false
        }
    },
}

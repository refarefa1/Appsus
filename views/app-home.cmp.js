export default {
    template: `
        <section class="home-page">
            <img class="home-hero" src="assets/img/hero.jpg" alt="hero" />    

            <Transition>
            <h1 v-if="show" class="home-title">Welcome to a new world of <span style="color:#313c79;">Technology</span></h1>
            </Transition>

            <Transition>
            <section v-if="show" className="home-btns">

                <router-link to="/email/inbox">
                <button>Appsus Mail</button>
                </router-link>

                <router-link to="/keep/notes">
                <button>Appsus Keep</button>
                </router-link>

            </section>
            </Transition>

        </section>
    `,
    data() {
        return {
            show: false
        }
    },
    created() {
        setTimeout(() => {
            this.show = true
        }, 1)
    }
}

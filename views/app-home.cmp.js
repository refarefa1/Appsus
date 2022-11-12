export default {
	template: `
        <section class="home-page">
            <img class="home-hero" src="assets/img/hero.jpg" alt="hero" />
            <h1 class="home-title">Welcome to a new world of Technology</h1>
            <section className="home-btns">

                <router-link to="/email/inbox">
                <button>Mail</button>
                </router-link>

                <router-link to="/keep">
                <button>Keep</button>
                </router-link>


            </section>
        </section>
    `,
}

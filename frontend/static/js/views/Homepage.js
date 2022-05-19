import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }

    async getHTML() {
        return `
            <main>
                <section class="hero">
                    <div class="hero-description">
                        <h2>Explore the world</h2>
                        <a href="/countries">
                            <button type="button">See more!</button>
                        </a>
                    </div>
                </section>
                <section class="authors">
                    <h2>Meet the authors</h2>
                    <div class="authors-container">
                        <div class="author">
                            <img src="static/css/images/emir.jpeg" alt="Emir" />
                            <h3>Emir</h3>
                        </div>
                        <div class="author">
                            <img src="static/css/images/ozan.jpeg" alt="Ozan" />
                            <h3>Ozan</h3>
                        </div>
                        <div class="author">
                            <img src="static/css/images/mauricio.jpeg" alt="Mauricio" />
                            <h3>Mauricio</h3>
                        </div>
                    </div>
                </section>
            </main>
        `;
    }
}
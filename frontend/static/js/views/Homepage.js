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
                    <h2>Explore the world</h2>
                    <button type="button">See more!</button>
                </section>
                <section class="authors">
                    <h2>Meet the authors</h2>
                    <div class="authors-container">
                        <div class="author">
                            <img src="emir.jpeg" alt="Emir" />
                            <h3>Emir</h3>
                        </div>
                        <div class="author">
                            <img src="ozan.jpeg" alt="Ozan" />
                            <h3>Ozan</h3>
                        </div>
                        <div class="author">
                            <img src="mauricio.jpeg" alt="Mauricio" />
                            <h3>Mauricio</h3>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <p>
                    Final Project Webdev I - Cornerstone International College | Emir, Ozan and Maurício.
                </p>
            </footer>
        `;
    }
}
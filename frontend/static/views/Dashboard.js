import AbstracViews from "./AbstracViews.js";

export default class extends AbstracViews{
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
            <h1>Welcome back, Dom </h1>
            <p>birşeryler işte</p>
            <p>
                <a href ="/posts" data-link>View recent posts</a>
            </p>
        `;
    }
}
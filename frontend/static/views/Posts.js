import AbstracViews from "./AbstracViews.js";

export default class extends AbstracViews{
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml(){
        return `
            <h1>Posts </h1>
            <p>posttayız</p>
            <p>
                <a href ="/posts" data-link>View recent posts</a>
            </p>
        `;
    }
}
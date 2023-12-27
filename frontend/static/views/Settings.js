import AbstracViews from "./AbstracViews.js";

export default class extends AbstracViews{
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml(){
        return `
            <h1>Settings</h1>
            <p>settings deyiz işte</p>
            <p>
                <a href ="/dashboard" data-link>View recent posts</a>
            </p>
        `;
    }
}

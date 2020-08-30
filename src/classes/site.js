export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    render(model) {
        console.log(this.$el);
        this.$el.innerHTML = '';
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML());
        })
    }
}
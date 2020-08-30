import {TitleBlock, TextBlock} from './bloсks'

export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector);
        this.update = update;

        this.init();
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$el.innerHTML = this.template;
    }

    get template() {
        return [
            block('Title'),
            block('Text')
        ].join('');
    }
    
    addBlock(event) {
        event.preventDefault();
        const type = event.target.name,
            value = event.target.value.value,
            styles = event.target.styles.value;

        const Constructor = type === 'Title' ? TitleBlock: TextBlock;
        const newBlock = new Constructor(value, {styles});
        this.update(newBlock);

        event.target.value.value = '';
        event.target.styles.value = '';
    }
}



function block(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="Значение">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="Стили">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        </form>
        <hr>
    `
}
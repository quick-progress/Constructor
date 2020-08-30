import {row, col} from '../utils'

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован!');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
    const {tag = 'h2', styles} = this.options;
        return row(col(`
            <${tag}>${this.value}</${tag}>
        `), styles);
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {styles , alt, stylesImage} = this.options,
            src = this.value; 
        return row(col(`
            <img src="${src}" style="${stylesImage}" alt="${alt}">
        `), styles)
    }

}

export class TextColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const styles = this.options.styles; 
        const html = this.value.map(item => col(item, styles));
        return row( html.join('') )
    }

}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const styles = this.options.styles; 
        return row(col(`
            <p>${this.value}</p>
        `), styles)
    }
}


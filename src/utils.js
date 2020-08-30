export function row(content, styles = '') {
    return `<div class="row row-block" style="${styles}">${content}</div>`;
}

export function col(content, styles = '') {
    return `<div class="col-sm" style="${styles}">${content}</div>`;
}

function css(styles = {}) {
    const toString = key => { `${key}: ${styles[key]}`}
    Object.keys(styles).map(toString).join(';');
}
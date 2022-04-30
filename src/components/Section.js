export default class Section {
    constructor({renderer}, sectionContainer){
        this._renderer = renderer;
        this._container = sectionContainer;
    };

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems(data) {
        data.forEach(item => {
            this._renderer(item);
        });
    }
}
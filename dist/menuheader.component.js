import { __decorate, __metadata } from "tslib";
import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import { MenuItem } from '@spectrum/sp-menuitem';
import menuheaderStyles from './menuheader.styles';
import template from './menuheader.template';
let MenuHeader = class MenuHeader extends Base {
    constructor() {
        super(...arguments);
        this.title = '';
        this.width = '';
    }
    getItems() {
        return this.slot
            .assignedNodes({ flatten: true })
            .filter((e) => (e instanceof MenuItem && !e.divider && !e.disabled));
    }
    handleSlotChange(e) {
        let currentElement = e.path.filter((e) => (e instanceof MenuItem));
        let selectedItem = '';
        if (this.slot) {
            const items = this.getItems();
            if (currentElement[0].selected) {
                selectedItem = currentElement[0].label;
                items
                    .filter((item) => item.label != currentElement[0].label)
                    .forEach((item) => {
                    item.selected = false;
                });
            }
        }
        let changedEvent = new CustomEvent('slectionChanged', {
            detail: {
                selectedItem: selectedItem
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(changedEvent);
    }
    render() {
        return template.call(this);
    }
};
MenuHeader.componentStyles = menuheaderStyles;
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MenuHeader.prototype, "title", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], MenuHeader.prototype, "width", void 0);
__decorate([
    query('slot'),
    __metadata("design:type", HTMLElement)
], MenuHeader.prototype, "slot", void 0);
MenuHeader = __decorate([
    customElement('sp-menuheader')
], MenuHeader);
export { MenuHeader };
//# sourceMappingURL=menuheader.component.js.map
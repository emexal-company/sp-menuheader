import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';
import '@spectrum/sp-icon';
export default function template() {
    return html `
    <li role="presentation" >
         <span class="spectrum-Menu-sectionHeading" id="menu-heading-category-1" aria-hidden="true">${this.title}</span>
         <ul class="spectrum-Menu" role="group" aria-labelledby="menu-heading-category-1" style="${styleMap({ width: this.width + 'px' })}">
             <slot style="${styleMap({ width: this.width + 'px' })}" @click="${this.handleSlotChange}"></slot>
         </ul>
     </li>
    `;
}
//# sourceMappingURL=menuheader.template.js.map
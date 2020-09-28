/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { MenuHeader } from './menuheader.component';

import '@spectrum/sp-icon';

export default function template(this: MenuHeader) {

    return html`
    <li role="presentation" >
         <span class="spectrum-Menu-sectionHeading" id="menu-heading-category-1" aria-hidden="true">${this.title}</span>
         <ul class="spectrum-Menu" role="group" aria-labelledby="menu-heading-category-1" style="${styleMap({ width: this.width + 'px'})}">
             <slot style="${styleMap({ width: this.width + 'px'})}" @click="${this.handleSlotChange}"></slot>
         </ul>
     </li>
    `;
}

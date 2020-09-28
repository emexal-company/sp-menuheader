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

import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import { MenuItem } from '@spectrum/sp-menuitem';
import menuheaderStyles from './menuheader.styles';
import template from './menuheader.template';

@customElement('sp-menuheader')
export class MenuHeader extends Base {
  public static componentStyles = menuheaderStyles;

  @property({ type: String }) public title: string = '';
  @property({ type: String }) public width: string = '';
  @query('slot') private slot!: HTMLElement;

  protected getItems(): MenuItem[] {
    return (this.slot as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: Node) => (e instanceof MenuItem && !e.divider && !e.disabled)) as any as MenuItem[];
  }

  protected handleSlotChange(e) {
    let currentElement = e.path.filter((e: Node) => (e instanceof MenuItem));
    let selectedItem = '';
    if (this.slot) {
      const items = this.getItems();
      if (currentElement[0].selected) {
        selectedItem = currentElement[0].label;
        items
          .filter((item: any) => item.label != currentElement[0].label)
          .forEach((item: any) => {
            item.selected = false
          })
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

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-menuheader': MenuHeader;
  }
}

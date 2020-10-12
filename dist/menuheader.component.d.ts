import { Base } from '@spectrum/sp-base';
import { MenuItem } from '@spectrum/sp-menuitem';
export declare class MenuHeader extends Base {
    static componentStyles: import("lit-element").CSSResult;
    title: string;
    width: string;
    private slot;
    protected getItems(): MenuItem[];
    protected handleSlotChange(e: any): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-menuheader': MenuHeader;
    }
}

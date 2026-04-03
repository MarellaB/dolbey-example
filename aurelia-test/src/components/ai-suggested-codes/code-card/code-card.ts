import { bindable, INode, resolve } from "aurelia";
import { ICDCode } from "@/models/icdCode";

export class CodeCard {
  @bindable code: ICDCode;
  private readonly el: HTMLElement;

  constructor() {
    this.el = resolve(INode) as HTMLElement;
  }

  accept = () =>  {
    this.el.dispatchEvent(new CustomEvent('accept', { detail: this.code, bubbles: true }));
  }

  reject = () => {
    this.el.dispatchEvent(new CustomEvent('reject', { detail: this.code, bubbles: true }));
  }

  undo = () => {
    this.el.dispatchEvent(new CustomEvent('undo', { detail: this.code, bubbles: true }));
  }
}

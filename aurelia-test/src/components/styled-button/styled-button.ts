import { bindable } from "aurelia";

export class StyledButton {
  @bindable variant: 'primary' | 'secondary' | 'accept' | 'destructive' = 'primary';
  @bindable fill: boolean = false;
  @bindable disabled: boolean = false;

  @bindable action: () => void = (): void => { console.log("HI - " + this.variant); }

  get buttonClasses() {
    return {
      'px-4 py-2 text-sm font-bold rounded-sm': true,
      'text-white bg-sky-600': this.variant === 'primary',
      'text-slate-600 bg-slate-200': this.variant === 'secondary',
      'text-green-500 bg-green-800': this.variant === 'accept',
      'text-red-800 bg-red-200': this.variant === 'destructive',
      'w-fit': !this.fill
    }
  }
}

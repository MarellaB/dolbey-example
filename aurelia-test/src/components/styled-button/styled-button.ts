import { bindable } from "aurelia";

export class StyledButton {
  @bindable variant: 'primary' | 'secondary' | 'accept' | 'destructive' = 'primary';
  @bindable fill: boolean = false;
  @bindable disabled: boolean = false;

  @bindable action: () => void = (): void => { console.log("HI - " + this.variant); }

  get buttonClasses() {
    return {
      'px-4 py-2 text-sm font-bold rounded-sm flex items-center justify-center gap-2 transition-all cursor-pointer': true,
      'text-white bg-sky-600 hover:bg-sky-500': this.variant === 'primary',
      'text-slate-600 bg-slate-200 hover:bg-slate-100': this.variant === 'secondary',
      'text-green-500 bg-green-800 hover:bg-green-700': this.variant === 'accept',
      'text-red-800 bg-red-200 hover:bg-red-100': this.variant === 'destructive',
      'w-fit': !this.fill
    }
  }
}

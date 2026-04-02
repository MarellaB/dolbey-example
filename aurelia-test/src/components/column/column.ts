import { bindable } from "aurelia";

export class Column {
  @bindable iconName: string = "Home";
  @bindable name: string = "New Column"
}

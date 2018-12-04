import { Pipe, PipeTransform } from "@angular/core";
import { Prestation } from "../models/prestation";

@Pipe({
  name: "total",
})
export class TotalPipe implements PipeTransform {
  transform(value: Prestation, args?: number): number {
    if (value) {
      if (args) {
        return value.totalTTC(args);
      }
      return value.totalHt();
    }
    return null;
  }
}

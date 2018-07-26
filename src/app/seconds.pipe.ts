import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seconds'
})
export class SecondsPipe implements PipeTransform {

  // Takes a number of seconds, e.g. 90, and formats as 1m 30s.
  transform(value: number, args?: any): any {
    const minutes = value / 60;
    const seconds = value % 60;
    return `${Math.trunc(minutes)}m ${seconds}s`;
  }

}

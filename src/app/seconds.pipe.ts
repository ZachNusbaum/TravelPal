import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seconds'
})
export class SecondsPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let minutes = value / 60;
    let seconds = value % 60;
    return `${minutes}m ${seconds}s`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesquisaPrestador'
})
export class PesquisaPrestadorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

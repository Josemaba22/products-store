import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageable'
})
export class PageablePipe implements PipeTransform {

  transform(value: any[], page: number, pageSize: number): any[] {
    if (!value) {
      return [];
    }
    const index_start = page * pageSize;

    return value.slice(index_start, index_start + pageSize);
  }

}

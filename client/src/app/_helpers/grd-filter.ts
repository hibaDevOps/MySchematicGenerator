import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grdFilter',
  pure: false
})
export class GrdFilterPipe implements PipeTransform {
  RegExpescape (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').trim();
};
  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter){
      return items;
    }

    if (!Array.isArray(items)){
      return items;
    }

    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      
      if (defaultFilter) {
        return items.filter(item =>
            filterKeys.reduce((x, keyName) =>
                (x && new RegExp(this.RegExpescape(filter[keyName]), 'gi').test(item[keyName]))  || filter[keyName] == "" , true));
      }
      else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(this.RegExpescape(filter[keyName]), 'gi').test(item[keyName]) ||  filter[keyName]  == "" ;
          });
        });
      }
    }
  }
}
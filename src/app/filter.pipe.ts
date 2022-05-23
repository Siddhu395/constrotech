import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, selectrole:string) {
    if(value.length===0 || selectrole===''){
      return value;
    }
     const users=[];
     for(let user of value){
       if(user['city']===selectrole){
         users.push(user);
       }
     }
    return users
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if(value.length > args){
      return value.slice(0,args)+"...";
    }
    else{
      return value;
    }
  }

}

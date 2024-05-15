import { User } from './user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(allUsers: any[],term:string): any[] {
    if (!allUsers || !term) {
      return allUsers;
    }
    return allUsers.filter(user => {
      const userId = user.id != null ? user.id.toString() : '';
      return userId.includes(term);
    });
  }

}

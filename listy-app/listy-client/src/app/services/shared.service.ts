import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class SharedService {
    //private caseNumber: any;

    // Observable string sources
  private listUpdateNeeded = new Subject<string>();  

  // Observable string streams
  listUpdateNeeded$ = this.listUpdateNeeded.asObservable();

    // Service message commands
  publishData(data: string) {
    this.listUpdateNeeded.next(data);
  }

}
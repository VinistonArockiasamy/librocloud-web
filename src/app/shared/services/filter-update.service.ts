import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterUpdateService {
    public subject = new Subject<any>();

    public updateFilter(filterStatus: boolean) {
        this.subject.next({ status: filterStatus });
    }

    public getFilter(): Observable<any> {
        return this.subject.asObservable();
    }
}

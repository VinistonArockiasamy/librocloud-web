import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseClientProxy {
  constructor(public http: HttpClient) {}

  public baseGet<T>(serviceUrl: string): Observable<T> {
    return new Observable<T>((observer) => {
      this.http.get<T>(serviceUrl).subscribe((response: T) => {
        observer.next(response);
      });
    });
  }

  public basePost<T>(serviceUrl: string, data: any): Observable<T> {
    return new Observable<T>((observer) => {
      this.http.post<T>(serviceUrl, data).subscribe({
        next: (response: T) => {
          observer.next(response);
        },
        complete: () => {},
        error: (error) => {
          observer.error(error.error);
        },
      });
    });
  }
  public basePut<T>(serviceUrl: string, data: any): Observable<T> {
    return new Observable<T>((observer) => {
      this.http.put<T>(serviceUrl, data).subscribe({
        next: (response: T) => {
          observer.next(response);
        },
        complete: () => {},
        error: (error) => {
          observer.error(error.error);
        },
      });
    });
  }

  public baseDelete<T>(serviceUrl: string, data: any): Observable<T> {
    return new Observable<T>((observer) => {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        body: data,
      };
      this.http.delete<T>(serviceUrl, httpOptions).subscribe({
        next: (response: T) => {
          observer.next(response);
        },
        complete: () => {},
        error: (error) => {
          observer.error(error.error);
        },
      });
    });
  }

  public getFormattedURL(url: string, replaceValue: string): string {
    return url.replace(
      url.substring(url.indexOf('{'), url.indexOf('}') + 1),
      replaceValue
    );
  }
}

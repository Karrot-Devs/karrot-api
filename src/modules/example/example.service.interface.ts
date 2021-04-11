import { Observable } from 'rxjs';

export interface IExampleService {
  getExample({}): Observable<any>
}

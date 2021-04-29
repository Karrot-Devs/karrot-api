import { Observable } from 'rxjs';
import { ExampleResponseDto } from '../../../../common/dto/example.dto';

export interface IExampleService {
  getExample({}): Observable<ExampleResponseDto>;
}

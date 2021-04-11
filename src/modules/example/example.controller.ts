import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { IExampleService } from './example.service.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { EXAMPLE_GRPC_OPTIONS } from './example.grpc.options';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ExampleService } from './example.service';

@ApiTags('example')
@ApiSecurity('x-key')
@ApiBearerAuth('authenticate')
@Controller('example')
export class ExampleController implements OnModuleInit {
  private exampleService: IExampleService;

  @Client(EXAMPLE_GRPC_OPTIONS)
  private client: ClientGrpc;

  constructor() {}

  onModuleInit(): any {
    this.exampleService = this.client.getService<IExampleService>('ExampleService');
  }

  @Get()
  getExample() {
    return this.exampleService.getExample({});
  }
}

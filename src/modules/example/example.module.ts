import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { ExampleController } from './example.controller';

@Module({
  controllers: [ExampleController],
  providers: [],
})
export class ExampleModule {}

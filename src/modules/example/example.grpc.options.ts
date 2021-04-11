import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const EXAMPLE_GRPC_OPTIONS: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'example',
    protoPath: join(__dirname, 'example.proto'),
  },
};

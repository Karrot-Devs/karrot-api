import { ClientOptions, Transport } from '@nestjs/microservices';
import { join, resolve } from 'path';

export const EXAMPLE_GRPC_OPTIONS: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'example',
    protoPath: join(
      resolve(__dirname, '../../../../../../common/proto/'),
      'example.proto',
    ),
  },
};

import { Module } from '@nestjs/common';
import { MicrocontrollerResolver } from './microcontroller.resolver';

@Module({
  providers: [MicrocontrollerResolver]
})
export class MicrocontrollerModule {}

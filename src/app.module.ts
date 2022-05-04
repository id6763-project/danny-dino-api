import { Module } from '@nestjs/common';
import { DannyController } from './danny.controller';

@Module({
  imports: [],
  controllers: [DannyController],
  providers: [],
})
export class AppModule {}

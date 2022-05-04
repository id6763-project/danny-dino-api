import { Module } from '@nestjs/common';
import { BonesController } from './bones.controller';
import { ButtonsController } from './buttons.controller';
import { DannyController } from './danny.controller';
import { LedStripController } from './led-strip.controller';

@Module({
  imports: [],
  controllers: [
    DannyController,
    BonesController,
    ButtonsController,
    LedStripController,
  ],
  providers: [],
})
export class AppModule {}

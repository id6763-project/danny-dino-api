import { Controller, Post } from '@nestjs/common';
import { color, danny } from '@danny-dino/arduino';

@Controller('api/v1/led-strip')
export class LedStripController {
  constructor() {}

  @Post('turn-on')
  async turnOnLedStrip() {
    danny.ledStrip.setColor(color(0, 0, 0));
    return danny.ledStrip
      .fadeTo(color(25, 25, 25), 1000)
      .then(() => danny.ledStrip.fadeTo(color(15, 15, 15), 1000))
      .then(() => danny.getState());
  }

  @Post('turn-off')
  async turnOffLedStrip() {
    danny.ledStrip.setColor(color(0, 0, 0));
    return danny.getState();
  }

  @Post('control')
  controlLedStrip(data: { r: number; g: number; b: number }) {
    danny.ledStrip.setColor(color(data.r, data.g, data.b));
  }
}

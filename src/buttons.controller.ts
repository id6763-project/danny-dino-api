import { Controller, Param, Post } from '@nestjs/common';
import { ButtonState, danny } from '@danny-dino/arduino';

@Controller('api/v1/buttons')
export class ButtonsController {
  constructor() {}

  @Post('heart-button/:state')
  pressHeartButton(@Param() { state }: { state: string }) {
    if (state === 'reset') danny.heartButton.state.state = 'n/a';
    else danny.heartButton.state.state = state as ButtonState;

    return danny.getState();
  }
}

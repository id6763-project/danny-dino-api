import { Controller, Param, Post } from '@nestjs/common';
import { ButtonState, danny } from '@danny-dino/arduino';

@Controller('api/v1/buttons')
export class ButtonsController {
  constructor() {}

  @Post('heart-button/:state')
  pressHeartButton(@Param() state: ButtonState) {
    danny.heartButton.state.state = state;

    return danny.getState();
  }
}

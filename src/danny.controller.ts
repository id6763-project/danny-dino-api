import { Controller, Get, Param, Post } from '@nestjs/common';
import { color, danny } from '@danny-dino/arduino';

@Controller('api/v1/danny')
export class DannyController {
  constructor() {}

  @Get()
  getState() {
    return danny.getState();
  }

  @Post('connect')
  async connect() {
    danny.connect().then(() => {
      console.log('Connected');
      danny.start().then(() => console.log('Started'));
    });

    return danny.getState();
  }

  @Post('button/heart-button/press')
  pressHeartButton() {
    danny.heartButton.state.state = 'press';

    return danny.getState();
  }

  @Post('button/heart-button/reset')
  resetHeartButton() {
    danny.heartButton.state.state = 'n/a';

    return danny.getState();
  }

  @Post('/bone/:id/activate')
  activateBone(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.activate();
    }
  }

  @Post('/bone/:id/deactivate')
  deactivateBone(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.makeInactive();
    }
  }

  @Post('/bone/:id/red')
  makeBoneRed(@Param('id') id: string) {
    console.log('Turning bone', id, 'red');
    const bone = danny.bones.find((bone) => bone.state.id === id);
    console.log('Found bone', bone);

    if (bone) {
      bone.turnRed();
    }
  }

  @Post('/bone/:id/green')
  makeBoneGreen(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.turnGreen();
    }
  }

  @Post('ledStrip/turnOn')
  async turnOnLedStrip() {
    danny.ledStrip.setColor(color(0, 0, 0));
    return danny.ledStrip
      .fadeTo(color(25, 25, 25), 1000)
      .then(() => danny.ledStrip.fadeTo(color(15, 15, 15), 1000))
      .then(() => danny.getState());
  }

  @Post('ledStrip/turnOff')
  async turnOffLedStrip() {
    danny.ledStrip.setColor(color(0, 0, 0));
    return danny.getState();
  }

  @Post('start')
  start() {
    danny.start();

    return danny.getState();
  }

  @Post('stop')
  async stopBeat() {
    danny.stop();

    return danny.getState();
  }

  @Post('restart')
  restartBeat() {
    danny.restart();

    return danny.getState();
  }

  @Get('setup')
  getScript() {
    return danny.getSetup();
  }

  @Post('/ledStrip')
  controlLedStrip(data: { r: number; g: number; b: number }) {
    danny.ledStrip.setColor(color(data.r, data.g, data.b));
  }

  @Post('activateRandomBone')
  async activateRandomBone() {
    danny.activateNextBone();

    return danny.getState();
  }
}

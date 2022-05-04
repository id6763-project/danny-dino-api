import { Controller, Get, Post, Res } from '@nestjs/common';
import { danny } from '@danny-dino/arduino';
import { Response } from 'express';

@Controller('api/v1/danny')
export class DannyController {
  constructor() {}

  @Get()
  getState() {
    return danny.getState();
  }

  @Get('setup')
  getSetup() {
    return danny.getSetup();
  }

  @Post('connect')
  async connect(@Res() res: Response) {
    danny.connect().then(() => {
      console.log('Connected');
      res.send(danny.getState());
    });
  }

  @Post('start')
  async start(@Res() res: Response) {
    return danny.start().then(() => res.send(danny.getState()));
  }

  @Post('stop')
  async stopBeat(@Res() res: Response) {
    danny.stop().then(() => res.send(danny.getState()));
  }
}

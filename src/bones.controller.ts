import { Controller, Param, Post } from '@nestjs/common';
import { danny } from '@danny-dino/arduino';

@Controller('api/v1/bones')
export class BonesController {
  constructor() {}

  @Post(':id/complete')
  complete(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.complete();
    }

    return danny.getState();
  }

  @Post(':id/activate')
  activateBone(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.activate();
    }

    return danny.getState();
  }

  @Post(':id/deactivate')
  deactivateBone(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.makeInactive();
    }

    return danny.getState();
  }

  @Post(':id/set-to-red')
  makeBoneRed(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.turnRed();
    }

    return danny.getState();
  }

  @Post(':id/set-to-green')
  makeBoneGreen(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.turnGreen();
    }

    return danny.getState();
  }

  @Post('activate-next')
  async activateRandomBone() {
    danny.activateNextBone();

    return danny.getState();
  }
}

import { Controller, Param, Post } from '@nestjs/common';
import { danny } from '@danny-dino/arduino';

@Controller('api/v1/bones')
export class BonesController {
  constructor() {}

  @Post(':id/activate')
  activateBone(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.activate();
    }
  }

  @Post(':id/deactivate')
  deactivateBone(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.makeInactive();
    }
  }

  @Post(':id/set-to-red')
  makeBoneRed(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.turnRed();
    }
  }

  @Post(':id/set-to-green')
  makeBoneGreen(@Param('id') id: string) {
    const bone = danny.bones.find((bone) => bone.state.id === id);

    if (bone) {
      bone.turnGreen();
    }
  }

  @Post('activate-next')
  async activateRandomBone() {
    danny.activateNextBone();

    return danny.getState();
  }
}

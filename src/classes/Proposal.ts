import Phaser from 'phaser';
import { ProposalType } from './Proposals';

export class Proposal extends Phaser.Physics.Arcade.Image {
  proposalType: ProposalType;
  fire(x, y, vx, vy) {
    this.enableBody(true, x, y, true, true);
    this.setVelocity(vx, vy);
  }

  onCreate(proposalType: ProposalType) {
    this.proposalType = proposalType;
    this.proposalType === ProposalType.Good
      ? this.setTintFill(0x63ad64)
      : this.setTintFill(0xad6369);
    this.disableBody(true, true);
  }

  stack() {
    this.setVelocity(0);
    this.disableBody(false, false);
  }

  onWorldBounds() {
    console.log('hi!');
    this.disableBody(true, true);
  }
}

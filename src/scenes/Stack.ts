import Phaser, { GameObjects } from 'phaser';
import { Character } from '../classes/Character';
import { Faller } from '../classes/Faller';
import { Stacker } from '../classes/Stacker';
import { Proposals, ProposalType } from '../classes/Proposals';
import { Proposal } from '../classes/Proposal';

export default class Stack extends Phaser.Scene {
  rat: Character | undefined;
  ickBar: GameObjects.Rectangle;
  ickCount: number;
  collectedPapers: any[] = [];
  proposals: Proposals;
  constructor() {
    super('stack');
  }

  create() {
    this.add.image(400, 300, 'test-background').setScale(1 / 2);
    this.rat = new Character(this, 400, 550, 'dude');

    this.ickCount = 0;
    const backBar = this.add.rectangle(600, 50, 162, 20, 0x000000).setOrigin(0);
    const shading1 = this.add.rectangle(603, 53, 50, 14, 0x616161).setOrigin(0);
    const shading2 = this.add.rectangle(656, 53, 50, 14, 0x616161).setOrigin(0);
    const shading3 = this.add.rectangle(709, 53, 50, 14, 0x616161).setOrigin(0);

    this.ickBar = this.add.rectangle(603, 53, 0, 14, 0xffea00).setOrigin(0);
    this.createProposals();
  }

  createProposals() {
    if (!this.rat) return;
    this.proposals = this.add.existing(
      new Proposals(this.physics.world, this, { name: 'proposals' })
    );

    this.proposals.createMultiple({
      key: 'test-paper',
      setScale: {
        x: 0.02,
        y: 0.02,
      },
      quantity: 20,
    });
    this.proposals.start();

    this.physics.add.overlap(
      this.rat,
      this.proposals,
      (rat, paper) => {
        const proposal = paper as Proposal;
        this.collectedPapers.push(proposal);
        proposal.stack();
        if (proposal.proposalType == ProposalType.Bad) {
          if (this.ickCount < 2) {
            this.ickBar.width += 50;
            this.ickCount++;
          } else {
            this.scene.pause('stack');
            this.scene.launch('end');
          }
        }
      },
      undefined,
      this
    );
  }

  update() {
    this.rat?.update();
    this.collectedPapers.forEach((element, index) => {
      element.setPosition(this.rat?.getBounds().centerX, 400 - 5 * index);
    });
  }
}

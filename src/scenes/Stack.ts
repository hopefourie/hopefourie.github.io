import Phaser, { GameObjects } from 'phaser';
import { Character } from '../classes/Character';
import { Faller } from '../classes/Faller';
import { Stacker } from '../classes/Stacker';
import { Proposals, ProposalType } from '../classes/Proposals';
import { Proposal } from '../classes/Proposal';
import Particles from '../classes/Particles';
import GameStore from '../stores/GameStore';
import Score from '../classes/Score';
import Timer from '../classes/Timer';
export default class Stack extends Phaser.Scene {
  rat: Character | undefined;
  ickBar: GameObjects.Rectangle;
  ickBarOutline: GameObjects.Rectangle;
  ickCount: number;
  collectedPapers: any[] = [];
  proposals: Proposals;
  particles: Particles;
  score: Score | undefined;
  timer: Timer | undefined;
  unsubscribe: () => void;
  constructor() {
    super('stack');
  }

  create() {
    this.add.image(400, 300, 'test-background').setScale(1 / 2);
    this.rat = new Character(this, 400, 550, 'dude');
    this.particles = new Particles(this, 'red');
    this.ickCount = 0;
    const backBar = this.add.rectangle(600, 50, 162, 20, 0x000000).setOrigin(0);
    const shading1 = this.add.rectangle(603, 53, 50, 14, 0x616161).setOrigin(0);
    const shading2 = this.add.rectangle(656, 53, 50, 14, 0x616161).setOrigin(0);
    const shading3 = this.add.rectangle(709, 53, 50, 14, 0x616161).setOrigin(0);
    this.ickBar = this.add.rectangle(603, 53, 0, 14, 0xffea00).setOrigin(0);
    this.unsubscribe = GameStore.subscribe(state => {
      this.ickCount = state.ickCount;
    });
    this.createProposals();
    this.score = new Score(this, 40, 40);
    this.timer = new Timer(this, 350, 40, this.endLevel.bind(this));
    this.events.on('destroy', () => this.unsubscribe());
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
          this.particles.spawnAt(rat.body.center.x, rat.body.center.y);
          this.rat?.damage();
          this.ickBar.width += 50 + 2 * this.ickCount;

          GameStore.getState().incrementIck();
          if (this.ickCount > 2) {
            this.scene.pause('stack');
            this.scene.launch('end');
          }
        } else {
          GameStore.getState().incrementScore();
        }
      },
      undefined,
      this
    );
  }

  update() {
    this.rat?.update();
    this.timer?.update();
    this.collectedPapers.forEach((element, index) => {
      element.setPosition(this.rat?.getBounds().centerX, 400 - 5 * index);
    });
  }

  endLevel() {
    this.scene.pause('stack');
    this.scene.launch('level-end');
  }
}

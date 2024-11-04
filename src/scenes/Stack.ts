import Phaser, { GameObjects } from "phaser";
import { Character } from "../classes/Character";
import { Faller } from "../classes/Faller";
import { Stacker } from "../classes/Stacker";

export default class Stack extends Phaser.Scene {
  rat: Character | undefined;
  ickBar: GameObjects.Rectangle;
  constructor() {
    super("stack");
  }

  create() {
    this.add.image(400, 300, 'test-background').setScale(1/2);
    this.rat = new Character(this, 400, 550, 'dude');

    let ickCount = 0
    const backBar = this.add
      .rectangle(600, 50, 162, 20, 0x000000)
      .setOrigin(0);
      const shading1 = this.add.rectangle(603, 53, 50, 14, 0x616161).setOrigin(0);
      const shading2 = this.add.rectangle(656, 53, 50, 14, 0x616161).setOrigin(0);
      const shading3 = this.add.rectangle(709, 53, 50, 14, 0x616161).setOrigin(0);


    this.ickBar = this.add.rectangle(603, 53, 0, 14, 0xffea00).setOrigin(0);

    const paperStack = this.physics.add.group({ allowGravity: true });
    const goodProposals = this.physics.add.group({ allowGravity: true });
    goodProposals.add(new Faller(this, 150, -100, "test-paper", 1, 20), true).setTint(0xad6369);
    const badProposals = this.physics.add.group({ allowGravity: true });
    badProposals.add(new Faller(this, 350, -100, "test-paper", 1, 20), true).setTint(0x63ad64);

    this.physics.add.overlap(
      this.rat,
      goodProposals,
      (rat, paper) => {
        paper.destroy();
      },
      undefined,
      this
    );

    this.physics.add.overlap(
      this.rat,
      badProposals,
      (rat, paper) => {
        paper.destroy();
        if (ickCount<2){
          this.ickBar.width += 50
          ickCount++
        } else {
          this.scene.pause("stack");
		      this.scene.launch("end");
        }
      },
      undefined,
      this
    );

    
  }

  update() {
    this.rat?.update();
  }
}

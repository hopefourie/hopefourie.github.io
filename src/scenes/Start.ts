import Phaser, { GameObjects } from 'phaser';

export default class Start extends Phaser.Scene { 
  constructor() {
    super('start');
  }

  create() {

    this.add.image(400, 300, 'sky');

    // Start game button
		const startButton = this.add.rectangle(100, 100, 50, 20,  0xffea00).setOrigin(0);
    const startText = this.add.text(100, 100, "Start", { color: "#000000", fontSize: "14px" })
    .setOrigin(0);
		startButton.setInteractive({ useHandCursor: true });
		startButton.on("pointerup", () => {
		  this.scene.pause("start");
		  this.scene.launch("stack");
		});

  }
}

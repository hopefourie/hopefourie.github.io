import Phaser, { GameObjects } from 'phaser';

export default class Start extends Phaser.Scene { 
  constructor() {
    super('start');
  }

  create() {
    // Start game button
		const startButton = this.add.rectangle(400, 300, 50, 20,  0xffea00).setOrigin(0);
    const startText = this.add.text(400, 300, "Start", { color: "#000000", fontSize: "14px" }).setOrigin(0);
		startButton.setInteractive({ useHandCursor: true });
		startButton.on("pointerup", () => {
		  this.scene.pause("start");
		  this.scene.launch("stack");
		});

  }
}

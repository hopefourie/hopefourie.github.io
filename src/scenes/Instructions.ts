import Phaser, { GameObjects } from 'phaser';

export default class Start extends Phaser.Scene { 
  constructor() {
    super('instructions');
  }

  create() {

    const descriptionText = this.add.text(400, 120, "You’re Scabby the rat - and you're not a scab! \nYou want to help the NYT Tech Guild get to a \nfair contract - including Just Cause (no exceptions!), \nfair wages, and a respectful Return to Office proposal. ").setOrigin(1/2);
    const howToTitle = this.add.text(400, 210, "How to Play", { fontSize: "20px", align: "center" }).setOrigin(1/2);
    const howToText = this.add.text(130, 230, "-Use the left and right arrow keys to help Scabby catch \nthe good proposals (green) \n\n- Avoid the bad proposals from mangement (red). They’re \ndisrespectful, incomplete, or include loopholes. \n\n- Get as many good contract proposals you can in 10 \nseconds to reach a tentative agreement and move \nto the next level. \n\n- If you catch 3 bad proposals, your contract is too \nweak and the game is over.").setOrigin(0);

    // Instructions button
    const backButton = this.add.image(400, 500, 'back').setScale(1 / 3).setOrigin(1/2);
		backButton.setInteractive({ useHandCursor: true });
		backButton.on("pointerup", () => {
		  this.scene.stop("instructions");
		  this.scene.launch("start");
		});

  }
}

import Phaser from "phaser";
import Score from "../classes/Score";

export default class Win extends Phaser.Scene {
  score: Score;
  constructor() {
    super("win");
  }

  create() {
    this.add.image(400, 300, "score");
    
    const winText = this.add.text(
      100,
      100,
      `YOU WON A FAIR CONTRACT!`,
      {
        stroke: '#000000',
        strokeThickness: 4,
        fontSize: "20px"}
    ).setOrigin(0);
    const text = this.add.text(
      100,
      140,
      `Congrats and thanks so much for your help! \nYour hard work alongside the guild’s \ncollective actions helped us add \nstrong proposals to our TA list. Keep \ngoing and help Scabby stay energized \nto get the NYT Tech Union closer to a fair \nand just contract!! 
      `,
      {
        stroke: '#000000',
        strokeThickness: 4,
      }
    ).setOrigin(0);
    this.score = new Score(this, 100, 350);
    const playAgainButton = this.add.image(100, 400, "playagain").setScale(1 / 3).setOrigin(0);
    playAgainButton.setInteractive({ useHandCursor: true });
    playAgainButton.on("pointerup", () => {
      this.scene.stop("win");
      this.scene.start("start");
    });
  }
}

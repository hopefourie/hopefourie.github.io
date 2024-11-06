import Phaser from "phaser";
import Score from "../classes/Score";

export default class Win extends Phaser.Scene {
  score: Score;
  constructor() {
    super("win");
  }

  create() {
    this.add.image(400, 300, "score");
    this.score = new Score(this, 100, 200);

    const playAgainButton = this.add.image(100, 250, "playagain").setScale(1 / 3).setOrigin(0);
    playAgainButton.setInteractive({ useHandCursor: true });
    playAgainButton.on("pointerup", () => {
      this.scene.stop("win");
      this.scene.start("start");
    });
  }
}

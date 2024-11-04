import Phaser from "phaser";

export class Faller extends Phaser.GameObjects.Sprite {
  paper;
  constructor(
    scene: any,
    x: number,
    y: number,
    texture: string,
    scaleX: number = 1,
    scaleY: number = 2
  ) {
    super(scene, x, y, texture);

    // Making the homie
    this.setTexture(texture);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.paper = <Phaser.Physics.Arcade.Body>this.body;

    // Player Config
    this.setScale(scaleX / scaleY);
    this.paper.setGravityY(0);
    this.paper.setCollideWorldBounds(false);
  }

  update() {
    this.paper.setVelocityX(0);
    this.paper.setVelocityY(-200);
  }
}

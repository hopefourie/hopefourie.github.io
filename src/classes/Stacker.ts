import Phaser from "phaser";

export class Stacker extends Phaser.GameObjects.Sprite {
  cursors: any;
  facingLeft: boolean;
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
    let paper = <Phaser.Physics.Arcade.Body>this.body;

    // Player Config
    this.setScale(scaleX / scaleY);
    paper.setGravityY(0);
    paper.setCollideWorldBounds(false);
  }
}

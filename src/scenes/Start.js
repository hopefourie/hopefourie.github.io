import Phaser from 'phaser';

export default class Start extends Phaser.Scene {
  constructor() {
    super('start');
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.add.image(400, 300, 'sky');
    const particles = this.add.particles('red');

    this.dude = this.physics.add.sprite(500, 500, 'test-sprite');
    this.dude.setBounce(0.2);
    this.dude.setCollideWorldBounds(true);

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    emitter.startFollow(this.dude);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.dude.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      this.dude.setVelocityX(160);
    } else {
      this.dude.setVelocityX(0);
    }

    if (this.cursors.up.isDown && this.dude.body.touching.down) {
      this.dude.setVelocityY(-330);
    }
  }
}

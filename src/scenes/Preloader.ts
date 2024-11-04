import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene {
  constructor() {
    console.log('hello!');
    super('preloader');
  }

  preload() {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
    this.load.image(
      'test-background',
      'http://localhost:8000/images/test-sprite.jpg'
    );
    this.load.spritesheet('dude', 'http://localhost:8000/images/walk.png', {
      frameWidth: 512,
      frameHeight: 512,
    });
    this.load.on('complete', () => {
      this.scene.start('start');
    });
  }
}

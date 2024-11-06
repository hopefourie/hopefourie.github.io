import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene {
  constructor() {
    console.log('hello!');
    super('preloader');
  }

  preload() {
    this.load.image('test-background', '/images/bg.png');
    this.load.image('test-paper', '/images/test-paper.png');
    this.load.image('test-stack', '/images/test-stack.webp');
    this.load.image('red', '/images/red.png');
    this.load.image('score', '/images/score.png');
    this.load.image('gameover', '/images/gameover.png');

    this.load.spritesheet('dude', 'http://localhost:8000/images/pixelrat.png', {
      frameWidth: 512,
      frameHeight: 512,
    });
    this.load.on('complete', () => {
      this.scene.start('start');
    });
  }
}

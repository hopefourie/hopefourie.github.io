export default class Particles extends Phaser.GameObjects.Particles
  .ParticleEmitterManager {
  constructor(scene: Phaser.Scene, texture: string) {
    super(scene, texture);
    scene.add.existing(this);
  }

  spawnAt(x: number, y: number) {
    this.createEmitter({
      alpha: { start: 1, end: 0 },
      scale: { start: 0.5, end: 1.5 },
      speed: { random: [20, 100] },
      accelerationY: { random: [-100, 200] },
      rotate: { min: -180, max: 180 },
      lifespan: { min: 300, max: 800 },
      frequency: 20,
      maxParticles: 10,
      blendMode: 'ADD',
      x: x,
      y: y,
    });
  }
}

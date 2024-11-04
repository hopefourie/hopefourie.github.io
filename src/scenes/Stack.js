import Phaser from 'phaser'

export default class Stack extends Phaser.Scene {
	constructor() {
		super('stack')
	}

	create() {
		this.add.image(400, 300, 'sky')
        this.backBar = this.add.rectangle(200, 20, 150, 20, 0x000000).setOrigin(0);
        this.ickBar = this.add.rectangle(203, 23, 0, 14, 0xffea00).setOrigin(0);

		const particles = this.add.particles('red')

		const emitter = particles.createEmitter({
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD',
		})

		const logo = this.physics.add.image(400, 100, 'logo')

		logo.setVelocity(100, 200)
		logo.setBounce(1, 1)
		logo.setCollideWorldBounds(true)

		emitter.startFollow(logo)
	}
}
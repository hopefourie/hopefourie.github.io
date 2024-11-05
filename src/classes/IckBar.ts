import GameStore from '../stores/GameStore';

export default class IckBar {
  ickCount: number = 0;
  ickBar: Phaser.GameObjects.Rectangle;
  unsubscribe: () => void;

  constructor(scene: Phaser.Scene) {
    const backBar = scene.add
      .rectangle(600, 50, 162, 20, 0x000000)
      .setOrigin(0);
    const shading1 = scene.add
      .rectangle(603, 53, 50, 14, 0x616161)
      .setOrigin(0);
    const shading2 = scene.add
      .rectangle(656, 53, 50, 14, 0x616161)
      .setOrigin(0);
    const shading3 = scene.add
      .rectangle(709, 53, 50, 14, 0x616161)
      .setOrigin(0);
    this.ickBar = scene.add.rectangle(603, 53, 0, 14, 0xffea00).setOrigin(0);
    this.ickCount = GameStore.getState().ickCount;
    this.ickBar.width = (50 + 2 * this.ickCount) * this.ickCount;

    this.unsubscribe = GameStore.subscribe(state => {
      this.ickCount = state.ickCount;
      this.ickBar.width = (50 + 2 * this.ickCount) * this.ickCount;
    });
  }

  destroy() {
    this.unsubscribe();
  }
}

import GameStore from '../stores/GameStore';
export default class Score extends Phaser.GameObjects.Text {
  score: number = 0;
  unsubscribe: () => void;
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, `Score: 0`, {
      fontFamily: 'Arial',
      fontSize: '32px',
      color: '#ffffff',
    });
    this.score = GameStore.getState().score;
    this.setText(`Score: ${this.score}`);
    scene.add.existing(this);
    this.unsubscribe = GameStore.subscribe(state => {
      this.setText(`Score: ${state.score}`);
    });
  }
  destroy() {
    this.unsubscribe();
  }
}

import GameStore from '../stores/GameStore';
export default class Score extends Phaser.GameObjects.Text {
  score: number = 0;
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, `Score: 0`, {
      fontFamily: 'Arial',
      fontSize: '32px',
      color: '#ffffff',
    });
    scene.add.existing(this);
    GameStore.subscribe(state => {
      this.setText(`Score: ${state.score}`);
    });
  }
}

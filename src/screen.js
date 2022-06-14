class Screen {
  constructor() {
    this.height = 10;
    this.width = 10;
    this.blocks = [];
  }

  generateBlocks() {
    for (let index = 0; index < this.height; index++) {
      this.blocks.push(Array(this.width).fill('-'));
    }
  }

  addObstacles({ x, y }, obstacles) {
    this.blocks[x][y] = obstacles;
  }

  displayBlocks() {
    const screen = this.blocks.map((row) => {
      return row.join('');
    }).join('\n');

    console.log(screen);
  }
}

const screen = new Screen();
screen.generateBlocks();
screen.addObstacles({ x: 2, y: 2 }, '▓');
screen.addObstacles({ x: 2, y: 3 }, '▓');
screen.addObstacles({ x: 2, y: 4 }, '▓');
screen.addObstacles({ x: 2, y: 5 }, '▓');
screen.addObstacles({ x: 2, y: 6 }, '▓');

screen.addObstacles({ x: 3, y: 2 }, '▓');
screen.addObstacles({ x: 4, y: 2 }, '▓');

screen.addObstacles({ x: 4, y: 3 }, '▓');
screen.addObstacles({ x: 4, y: 4 }, '▓');
screen.addObstacles({ x: 4, y: 5 }, '▓');
screen.addObstacles({ x: 4, y: 6 }, '▓');

screen.addObstacles({ x: 5, y: 6 }, '▓');
screen.addObstacles({ x: 6, y: 6 }, '▓');

screen.addObstacles({ x: 6, y: 5 }, '▓');
screen.addObstacles({ x: 6, y: 4 }, '▓');
screen.addObstacles({ x: 6, y: 3 }, '▓');
screen.addObstacles({ x: 6, y: 2 }, '▓');

screen.displayBlocks();


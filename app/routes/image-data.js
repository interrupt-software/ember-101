import Route from '@ember/routing/route';

export default class ImageDataRoute extends Route {
  model() {
    let tiles = [];
    [...Array(12)].forEach((e, i) => tiles.push(`isometric-cube-${++i}.svg`));
    return tiles;
  }
}

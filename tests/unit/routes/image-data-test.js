import { module, test } from 'qunit';
import { setupTest } from 'v01/tests/helpers';

module('Unit | Route | image-data', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:image-data');
    assert.ok(route);
  });
});

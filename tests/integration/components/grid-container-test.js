import { module, test } from 'qunit';
import { setupRenderingTest } from 'v01/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | grid-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GridContainer />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <GridContainer>
        template block text
      </GridContainer>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});

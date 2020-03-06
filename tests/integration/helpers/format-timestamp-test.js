import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('myDate', '05 05 1985');

    await render(hbs`{{format-timestamp myDate}}`);

    assert.equal(this.element.textContent.trim(), 'May 5, 1985 00:00.00 AM')
  });
});

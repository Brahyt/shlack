import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubbs/auth-service'

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:auth', MockAuthService)
  })

  test('visiting /teams and clicking logout', async function(assert) {
    this.owner.lookup('service:auth').currentUserId = '1'
    await visit('/teams/linkedIn'); // Go to teams url
    assert.equal(currentURL(), '/teams/linkedIn');
    await click('.team-sidebar__logout-button')
    assert.equal(currentURL(), '/login')
  });

});

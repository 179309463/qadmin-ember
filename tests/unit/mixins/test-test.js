import EmberObject from '@ember/object';
import TestMixin from 'qadmin-ember/mixins/test';
import { module, test } from 'qunit';

module('Unit | Mixin | test', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let TestObject = EmberObject.extend(TestMixin);
    let subject = TestObject.create();
    assert.ok(subject);
  });
});

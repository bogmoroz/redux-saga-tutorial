import test from 'tape';

import { put, call } from 'redux-saga/effects';
import { incrementAsync, delay } from './sagas';

test('incrementAsync Saga test', assert => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync saga calls delay(1000)'
  );

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT' }),
    'incrementAsync saga dispatches an INCREMENT action'
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync saga completes'
  );

  assert.end();
});

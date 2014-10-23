'use strict';
/*
 * Utility functions
 */

/**
 * Forwards all notifications from the source observable to the given subject.
 *
 * @param {Rx.Observable} source the origin observable
 * @param {Rx.Subject} subject the destination subject
 * @return {Rx.Disposable} a disposable generated by a subscribe method
 */
function replicate(source, subject) {
  if (typeof source === 'undefined') {
    throw new Error('Cannot replicate() if source is undefined.');
  }
  return source.subscribe(
    function replicationOnNext(x) {
      subject.onNext(x);
    },
    function replicationOnError(err) {
      console.error(err);
    }
  );
}

module.exports = replicate;

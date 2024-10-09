/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/es6-promise/dist/es6-promise.js":
/*!**********************************************************!*\
  !*** ../../node_modules/es6-promise/dist/es6-promise.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof __webpack_require__.g !== 'undefined') {
    local = __webpack_require__.g;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map


/***/ }),

/***/ "../../node_modules/nodelist-foreach-polyfill/index.js":
/*!*************************************************************!*\
  !*** ../../node_modules/nodelist-foreach-polyfill/index.js ***!
  \*************************************************************/
/***/ (() => {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./js/modules/calculating.js":
/*!***********************************!*\
  !*** ./js/modules/calculating.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    // Calc

    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio // пол рост вес возраст коэф. атив.

    if (localStorage.getItem('sex')) { // проверяес, если в хранилище есть запись, то старим ее. Если нет, то ставим стандартное значение и записываем его в хранилище
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375)
    }

    function calcTotal() { // подсчет
        if (!sex || !height || !weight || !age || !ratio) { // проверка на то что все поля заполнены 
            result.textContent = '____';
            return; // return нужен чтоб досрочно прервать нашу ф-ию
        }

        if (sex === 'female') { // формула в зависимости от пола
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio) // Math.round - округление до ближайшего целого
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
        }


    }

    calcTotal();

    function initLocalSettings (selector, activeClass) { // эта ф-ия срабатывает 1 раз при загрузке страницы. Она сверяет данные с localStorage и ставит классы акивности (ну то есть делает кнопки зелеными), в соответствии с данными на localStorage. Так же эта ф-ия работает сразу для 2ух блоков. Для пола и активности
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => { // получается так. Перебираем элементы и удаляем всем классы активности. Потом, если мы находим элемент, совпадающий с localStorage, то присваиваем ему класс активности
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active'); // для пола. #gender div. Div нужен, потому что обращаемся ко всем блокам этого селектора
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active'); // для активности


    function getStaticInformation(selector, activeClass) { // чтоб зеленым выделялся
        // const elements = document.querySelectorAll(`${parentSelector} div`) // получаем все дивы внктри родителя (такая запись для того чтоб можно было ф-ию вызвать 2 рпзп для разных классов. То есть для блока с выбором рола и блока с выбором активности)
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => { // получается мы накидываем событие родителя с нашими дивами (Делегирование событий)
                if (e.target.getAttribute('data-ratio')) { // если атрибут присутствует у объекта события
                    ratio = +e.target.getAttribute('data-ratio') // то сюда записываем ту активность которая стояла в этом атрибуте
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else { // ну а если нет, то значит мы кликаем на кнопну с выбором пола (в html - у нас дата атрибуты стоят на дневной активности, а id на выборе пола)
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id')); // записываем эти данные в localstorage, чтоб при перезагрузке страницы они сохранялись
                }
    
    
                elements.forEach(elem => { // убираем у всех элементов активный класс
                    elem.classList.remove(activeClass)
                });
                
                // console.log(e.target) // напоминание что такое e.target - <div data-ratio="'1.55" id="medium" class="calculating__choose-item calculating__choose-item_active">Умеренная активность</div>
                
                e.target.classList.add(activeClass) // ну а тут добавляем активный класс на элемент на котрый мы кликнули
    
                calcTotal();
            });
        })

    }

    getStaticInformation('#gender div', 'calculating__choose-item_active'); // вызов ф-ии для блока с полом
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active'); //  вызов ф-ии для блока с дневной активностью

    function getDynamicInformation(selector) { // обработка значений (рост, вес, возраст)
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            
        if(input.value.match(/\D/g)) { // если есть не число, то обводим красным
            input.style.border = '1px solid red';
        } else {
            input.style.border = 'none';
        }

            switch(input.getAttribute('id')) {
                case 'height': // если вводим данные в блок роста
                    height = +input.value // то записываем в рост то что написали в блок (input - наш блок, value - то что записано в блоке)
                    break;
                case 'weight':
                    weight = +input.value
                    break;
                case 'age':
                    age = +input.value
                    break;
            }
            calcTotal();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');

}

// module.exports = calc;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards () {
// используем классы для карточек

class MenuCard {
    constructor(src, alt, title, descr, prise, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.prise = prise;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector); // то куда мы пушим наш элемент
        this.transfer = 27;
        this.cangeToUAH();
    }

    cangeToUAH() {
        this.prise = this.prise * this.transfer;
    }

    render() {
        const element = document.createElement('div');

        if (this.classes.length === 0) { // Проверка если забыли написать дефолтный класс
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className)); // перебираем массив rest оператора чтоб могли добавдять классы в dom елементы просто написав их в MenuCard
        }

        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
            </div>
        `;
        this.parent.append(element); // в конец родителя ставим наш элемент
    }
}

// const div = new MenuCard();
// div.render();

// getResource('http://localhost:3000/menu') // это тоже правильно. Только без библиотеки axios
//     .then(data => {
//         data.forEach(({img, altimg, title, descr, price}) => { // перебираем все карточки и отрисовываем их. А так же используем деструктуризацию объекта
//             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//         })
//     });

axios.get('http://localhost:3000/menu') // используем axios
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => { // data.data потому что мы обращаемся к объекту который мы получили. То есть обращаемся к свойству объекта data который мы получили из библиотеки
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });

// getResource('http://localhost:3000/menu') // еще вариант как можно сделать
//     .then(data => createCard(data));

// function createCard(data) {
//     data.forEach(({img, altimg, title, descr, price}) => {
//         const element = document.createElement('div');
//         element.classList.add('menu__item');
//         element.innerHTML = `
//         <img src=${img} alt=${altimg}>
//         <h3 class="menu__item-subtitle">${title}</h3>
//         <div class="menu__item-descr">${descr}</div>
//         <div class="menu__item-divider"></div>
//         <div class="menu__item-price">
//             <div class="menu__item-cost">Цена:</div>
//             <div class="menu__item-total"><span>${price}</span> грн/день</div>
//         </div>
//         `;

//         document.querySelector('.menu .container').append(element);
//     });
// }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalWindow */ "./js/modules/modalWindow.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
 // импортируем те ф-ии из модальных окон


function forms(formSelector ,modalTimerId) {
    // Forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    }

    forms.forEach (item => {
        bindPostData(item);
    });

    // async - говорит о том что в ф-ии будет какой-то асинхронный код
    // await - дожидается результата и тоько потом позволяет коду идти дальше
    // async и await всегда действуют в паре. Нельзя записать что-то одно

    // postData в сервисах

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {  // событие срабатывающее на все что отправляет данные
            e.preventDefault(); // отменяем стандартное поведение браузера. Эта команда должна быть первая в ajax запросах

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage) // ставит спинер (загрузка типа анимация) в конец элемента statusMessage

            // заменили на fetch (а это старый формат) const request = new XMLHttpRequest();
            // тут тоже request.open('POST', 'server.php');


            // XMLHttpRequest – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы.


            // заменили на fetch (а это старый формат) request.setRequestHeader('Content-type', 'application/json'); // это прописываем если работаем с json форматом. Зависит от бек-енда
            // request.setRequestHeader('Content-type', 'multipart/form-data'); // не прописываем потому что используем XMLHttpRequest + formData. Заголовок формируется автоматически
            // formData - объект позволяющий быстро сформировать данные введеные с определенной формы. ВАЖНО когда мы используем XMLHttpRequest и formData - заголовок прописывать не нужно
            const formData = new FormData(form); // важно чтоб в html у всего что может отправлять данные на сервер, напрмер input был атрибут name

            //это прописываем если работаем с json форматом - трансформация formdata в json формат
            // const object = {};
            // formData.forEach (function (value, key) { // переписываем объект FormDatra в обычный объект
            //     object[key] = value;
            // }); старый код
            
            // const obj = { a: 23, b: 50} пример
            // console.log(Object.entries(obj)); // метод делающий из объекта массив с массивами [ [ 'a', 23 ], [ 'b', 50 ] ]

            const json = JSON.stringify(Object.fromEntries(formData.entries())); // То есть 1 действие - превращаем formData в массив массивов. 2 действие - преыращаем массив массивов в обычный объект fromEntries. 3 действие - превращаем все это добро в json

            // fetch('server.php', { // при помощи fetch отправляем данные. ВАЖНО. Особенность fetch - промис который запускается при помощи fetch не перейдет в состояние "Отклонено" или "rejected" из-за ответа http который считается ошибкой (404, 500 и т.д.). Он все равно выполнится нормально, единственное что поменяется это status которое станет false. А будет ошибка связанная с http, если не будет сети
            //     method: "POST",
            //     // body: formData, если данные обычные. Не JSON
            //     body: JSON.stringify(object), // переделываем formData в JSON
            //     headers: {
            //         'Content-type': 'application/json'
            //     }
            // }) старый код. Переписали в ф-ию postData

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
            .then(data => { // data - те данные которые мы получаем из промиса, то есть те данные которые нам прислал сервер
                    console.log(data); // ответ, то что получили от запроса
                    showThanksModal(message.success);
                    statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset(); // очищает форму
            })
            
            // так было без fetch (можно удалить)
            // request.addEventListener('load', () => { // возникает при завершении запроса
            //     if (request.status === 200) {
            //         console.log(request.response); // ответ, то что получили от запроса
            //         showThanksModal(message.success);
            //         form.reset(); // очищает форму
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });
        });
    }

    // красивое оповещение пользователя

    function showThanksModal(message) {
        const permModalDialog = document.querySelector('.modal__dialog');

        permModalDialog.classList.add('hide'); // получается мы скрываем изначальный modal__dialog и добавляем такой же, но с другой версткой
        (0,_modalWindow__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);

        const thanksModal = document.createElement('div'); // обертка
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>  <!-- Напрминание: data-атрибуты это штукенция позволяющая хранить доп информацию чтоб работать с элементом в js --!>
            <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            permModalDialog.classList.add('show');
            permModalDialog.classList.remove('hide');
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 4000)
    }

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(result => console.log(result));

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modalWindow.js":
/*!***********************************!*\
  !*** ./js/modules/modalWindow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSecector, modalTimerId) {
    const modal = document.querySelector(modalSecector); // получаем элемент с которым работаеи ф-ия 
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId) { // если есть modalTimerId, тогда останавливанм таймер
        clearInterval(modalTimerId);
    }
}    

function closeModal(modalSecector) {
    const modal = document.querySelector(modalSecector);
    // modal.classList.add('hide');
    // modal.classList.remove('show');

    modal.classList.toggle('hide');
    document.body.style.overflow = '';
}

function modalWindow(triggerSelector, modalSecector, modalTimerId) { // делаем аргументы для того чтоб модуль стал блоее универсальным
     //modal-window

    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSecector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSecector, modalTimerId)); // ф-ия openModal не должна сразу вызываться. По этому перед ее вызовом мы прописываем ф-ию
    });

    modal.addEventListener('click', (e) => { // окно закроется при клике на крестик
        if (e.target === modal || e.target.getAttribute('data-close') == '') { // если есть дата атрибут data-close на элементе и мы на него кликаем, то закрываем окно (этот атрибут есть на крестике). Это сделали ля того чтоб событие работало на динамически созданных элементах
            closeModal(modalSecector);
        }
    });

    document.addEventListener('keydown', (e) => { // окно закроется при клике на esc
        if (e.code == "Escape" && modal.classList.contains('show')){
            closeModal(modalSecector);
        }
    });

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) { // -1 ставить надо из-за бага. На некоторых мониторах может не открыться модальное окно
            openModal(modalSecector, modalTimerId); // window.scrollY - высотра прокрутки скрола, document.documentElement.clientHeight - высота нашего экрана, document.documentElement.scrollHeight - высота всего скрола на странице. Таким образом когда сумма высоты нашего экрана и высоты прокрута скрола совпадает с всей длинной скрола - это значит что мы докрутили до конца страницы
            window.removeEventListener('scroll', showModalByScroll) // это для того чтоб окно не вызывалось пр каждом прокруте до конца
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);
 // делаем отдельные экспорты ф-ий


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, filed}) {
    // slider
    // простой вариант

    // const slides = document.querySelectorAll('.offer__slide'),
    //       prev = document.querySelector('.offer__slider-prev'), // конопки вперед и
    //       next = document.querySelector('.offer__slider-next'), // назад
    //       total = document.querySelector('#total'), // сколько слайдов всего
    //       current = document.querySelector('#current'); // на каком мы слайде сейчас
    // let slideIndex = 1;

    // showSlides(slideIndex); // для начала нужно записать начальное значене

    // // ставим 0 в начале. Тут сколько слайдов всего
    // if (slides.length < 10) { // не записываем в ф-ию потому что нам нужно просчитать кол-во слайдов один раз
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) { // если дошли до крайнего слайда, то перемещаемся на первый
    //         slideIndex = 1;
    //     }

    //     if (n < 1) { // наоборот
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block'; // показываем нулевой слайд

    //     // ставим 0 в начале. Тут на каком мы слайде сейчас
    //     if (slides.length < 10) { // а это в ф-ии потому что нам нужно просчитывать текущий слайд при каждом нажатии на кнопку прокрутки
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) { // отвечает за переключение слайдов
    //     showSlides(slideIndex += n)
    // }

    // prev.addEventListener('click', () => { // переключение назад
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => { // переключение вперед
    //     plusSlides(1);
    // });

    // тот же слайдер, но более сложный вариант

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container), // для того чтоб можно было обратиться и сделать position relative (это весь блок слайда)
          prev = document.querySelector(prevArrow), // конопки назад и
          next = document.querySelector(nextArrow), // вперед
          total = document.querySelector(totalCounter), // сколько слайдов всего
          current = document.querySelector(currentCounter), // на каком мы слайде сейчас
          slidesWrapper = document.querySelector(wrapper), // общая обертка
          slidesField = document.querySelector(filed), // обертка которая для прокрутки
          width = window.getComputedStyle(slidesWrapper).width; // примененные стили от css. получаем ширину

    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%'; // устонавливаем ширтну блока. Умножаем кол-во слайдов на 100%. В нашем случае он будет занимать 400%
    slidesField.style.display = "flex";
	slidesField.style.transition = "0.5s all";

    slidesWrapper.style.overflow = 'hidden'; // скрываем элементы которые не попадают в область видимости

    slides.forEach(slide => { // делаем все слайды одной ширины
        slide.style.width = width;
    });

    slider.style.position = 'relative';
    const indicators = document.createElement('ol'), // большая обертка для наших точек (список)
          dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) { // делаем точки для каждого слайда
        const dot = document.createElement('li'); // делаем list item
        dot.setAttribute('data-slide-to', i + 1); // делаем атрибуты точкам нумеруя начиная с 1
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1; // делаем точку не прозрачной
        }
        indicators.append(dot);
        dots.push(dot); // помещаем точку в массив
    }

    function deleteNotDigits (str) {
        return +str.replace(/\D/g, '');
    }

    function styleDots (dot, index) { // делаем у текущего слайда не прозрачную точку. (-1 потому что на странице у нас нумерация начинается с 1, а в js с 0)
        dot.forEach(dot => dot.style.opacity = '.5');
        dot[index - 1].style.opacity = 1;
    }

    function Zero(slides, cur, index) { // ставим 0 в начале если число конкретного слайда меньше 10
        if (slides.length < 10) {
            cur.textContent = `0${index}`;
        } else {
            cur.textContent = index;
        }
    }

    function Offset (wrapper, offset) { // перемещаем элемент по оси x. Минус используется потому что если элемент двигается влево то мы используем отрицательное значение, если вправо, то положительное. При нажатии на кнопки элементы прокручиваются справа на лево
        wrapper.style.transform = `translateX(-${offset}px)`;
    }

    if (slides.length < 10) { // ставим 0 в начале числа если оно менише 10 в общем количестве слайдов
        total.textContent = `0${slides.length}`; 
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) { // slice() убирает px из ширины блока (заменено на регулярное выражение). Это для того чтоб мы работали с числом а не строкой. -1 как я понял нужен потому что у нас и так всегда 1 слайд отрисовывается, остается 3 прокручивать. А без минуса прокрутит 4 раза
            offset = 0; // проверка на последний слайд. То есть если offset равен ширине когда в блоке последний слайд, мы offset присваиваем 0 - иначе говоря перемещаемся на первай слайд
        } else {
            offset += deleteNotDigits(width); // иначе при каждом нажатии на кнопку прибавляем offset ширину слайда
        }

        Offset(slidesField, offset);

        if(slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        Zero(slides, current, slideIndex);

        styleDots(dots, slideIndex);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) { // Ну а тут наоборот. Если offset = 0, и мы нажимаем на кнопку, то offset становится равным той ширине при которой у нас отрисовывается последний слайд. То есть мы перемещаемся на последний слайд
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else { // иначе отнимаем каждый раз ширину одного слайда
            offset -= deleteNotDigits(width);
        }

        Offset(slidesField, offset);
    
        if(slideIndex == 1) { 
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        Zero(slides, current, slideIndex);

        styleDots(dots, slideIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            Offset(slidesField, offset);

            Zero(slides, current, slideIndex);

            styleDots(dots, slideIndex);
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    // tabs

    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) { // i = 0 это на случай если фунуция будет вызываться без аргумента
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => { // повторяю для ясности. Мы вешаем обработчик на родителя, а проверяем уже сам элемент. Таким образом мы работаем сразу со всеми элементами в родителе (делегирование)
        const target = event.target; // event.target -свойство объекта event - это элемент с которым мы взаимодействуем

        if(target && target.classList.contains(tabsSelector.slice(1))) { // по сути это гарантия что мы клкааем именно на элемент. слайс нужен чтоб убрать точку
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
     //Timer

     function getTimeRemaining(endtime) {
         let days, hours, minutes, seconds;
         const t = Date.parse(endtime) - Date.parse(new Date()); // получили разницу между deadline и сегодняшней датой в милисекундах
         if (t <= 0) {
             const tblock = document.querySelectorAll('.timer__block');    
             tblock.forEach(i => { // тут я сам сделал чтоб цыфры были красными если таймер будет 0
                 i.style.color = 'red';
             })
 
             days = 0;
             hours = 0;
             minutes = 0;
             seconds = 0;
         } else {
             days = Math.floor(t / (1000 * 60 * 60 * 24)); // получили кол-во дней из милисекунд, Math.floor округление до ближайшего целого
             hours = Math.floor((t / (1000 * 60 * 60) % 24)); // получили часы, %24 нужен чтоб не было больше 24 часов
             minutes = Math.floor((t / (1000 * 60) % 60));
             seconds = Math.floor((t / 1000) % 60);
         }
             
         return {
             'total': t,
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
         };
     }
 
     function getZero(num) {
         if (num >= 0 && num < 10) {
             return `0${num}`;
         } else {
             return num;
         }
     }
     
     function setClock(selector, endtime) {
         const timer = document.querySelector(selector),
               days = timer.querySelector('#days'),
               hours = timer.querySelector('#hours'),
               minutes = timer.querySelector('#minutes'),
               seconds = timer.querySelector('#seconds'),
               timeInterval = setInterval(updateClock, 1000); // делаем так чтоб ф-ия обновлялась ежесекундно
         
         updateClock(); // вызываем раньше чтоб не было миганий
 
         function updateClock() {
             const t = getTimeRemaining(endtime);
 
             days.innerHTML = getZero(t.days);
             hours.innerHTML = getZero(t.hours);
             minutes.innerHTML = getZero(t.minutes);
             seconds.innerHTML = getZero(t.seconds);
 
             if (t.total <= 0) {
                 clearInterval(timeInterval);
             }
         }
     }
     setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => { // ф-ия настраиыает наш запрос, посылает его на сервер и получает ответ и трансформирует его в json
    const res = await fetch(url, { // если этого не сделать, то пока не придет результат в переменной res будет ничего и из-за этого будет ошиька. Нам необходимо дождаться результата запроса и по этому мы ставим await
        method: "POST",
        body: data,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return await res.json(); // мы не знаем сколько времени нам понадобится на перевод в обычный объект. По этому тоже ставим await
};

const getResource = async (url) => { // ф-ия настраиыает наш запрос, посылает его на сервер и получает ответ и трансформирует его в json
    const res = await fetch(url);

    if(!res.ok){ // проверка на ошибки. Делаем потому что fetch не возвращает catch в случае ошибки
        throw new Error(`Could not fetch ${url}, status ${res.status}`); // throw - это те ошибки которые пишутся нам в консоль. Error() - объект ошибок
    }

    return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodelist-foreach-polyfill */ "../../node_modules/nodelist-foreach-polyfill/index.js");
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalWindow */ "./js/modules/modalWindow.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calculating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculating */ "./js/modules/calculating.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");

// Полифил — это фрагмент кода, который позволяет использовать современную функциональность в более старых браузерах, которые не поддерживают ее по умолчанию
(__webpack_require__(/*! es6-promise */ "../../node_modules/es6-promise/dist/es6-promise.js").polyfill)(); // добавляем полифил (их все надо устанавливать)
 // по сути мы импортируем из node_modules
// импорты должны стоять до обработчика









window.addEventListener('DOMContentLoaded', () => {
      const modalTimerId = setTimeout(() => (0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_2__.openModal)('.modal', modalTimerId), 50000); // переменная которая содержит id таймера
//    const tabs = require('./modules/tabs'),
//          modal = require('./modules/modalWindow'),
//          timer = require('./modules/timer'),
//          cards = require('./modules/cards'),
//          calc = require('./modules/calculating'),
//          forms = require('./modules/forms'),
//          slider = require('./modules/slider');
         
   (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   (0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '.modal', modalTimerId); // подставляем те аргументы которые используем
   (0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__["default"])('.timer', '2025-06-05');
   (0,_modules_cards__WEBPACK_IMPORTED_MODULE_4__["default"])();
   (0,_modules_calculating__WEBPACK_IMPORTED_MODULE_5__["default"])();
   (0,_modules_forms__WEBPACK_IMPORTED_MODULE_6__["default"])('form', modalTimerId);
   (0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__["default"])({
      container: '.offer__slider',
      nextArrow: '.offer__slider-next',
      slide: '.offer__slide',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      filed: '.offer__slider-inner'
   });

   // каждый модуль должен быть не зависим от других модулей

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
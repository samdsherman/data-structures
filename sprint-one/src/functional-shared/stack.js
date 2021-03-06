var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    counter: 0,
    storage: {}
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.counter++] = value;
  },

  pop: function () {
    if (this.counter > 0) {
      return this.storage[--this.counter];
    }
  },

  size: function () {
    return this.counter;
  }
};



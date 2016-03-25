"use strict";

const assert = require("chai").assert;

const _ = require("..");

describe("bind", function() {
  it("should force this to be a context object", function() {
    function returnThis() {
      return this;
    }

    const foo = { name: "foo" };
    const bar = { name: "bar" };

    const returnFoo = _.bind(returnThis, foo);
    const returnBar = _.bind(returnThis, bar);

    assert.equal(returnFoo(), foo);
    assert.equal(returnBar(), bar);
  });


});


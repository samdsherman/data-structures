describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "contains", and "deleteChild", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.deleteChild).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly delete children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[1].addChild(9);
    expect(tree.contains(6)).to.equal(true);
    expect(tree.contains(9)).to.equal(true);
    tree.deleteChild(6);
    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(9)).to.equal(true);
  });

  it('should remove from parent', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[1].addChild(9);
    expect(tree.contains(9)).to.equal(true);
    tree.children[1].removeFromParent();
    expect(tree.contains(9)).to.equal(false);
  });

  it('should traverse the tree', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[1].addChild(9);
    var result = [];
    tree.traverse(function(value) {
      result.push(value);
    });
    expect(result.indexOf(5) !== -1).to.equal(true);
    expect(result.indexOf(6) !== -1).to.equal(true);
    expect(result.indexOf(7) !== -1).to.equal(true);
    expect(result.indexOf(8) !== -1).to.equal(true);
    expect(result.indexOf(9) !== -1).to.equal(true);
  });

});

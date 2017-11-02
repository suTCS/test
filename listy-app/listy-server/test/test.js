const assert = require('assert');

describe('elements', () => {
  it('Adds three sample elements and returns them', () =>{
    let elements = require('../elements');
    elements.addElement("test3");
    elements.addElement("test1");
    elements.addElement("test2");
    assert.deepEqual(["test3", "test1", "test2"],
      elements.getElements().elements);
  })
  it('Should return a sorted array when given a truthy parameter', () =>{
    delete require.cache[require.resolve('../elements')];
    let elements = require('../elements');
    elements.addElement("test3");
    elements.addElement("test1");
    elements.addElement("test2");
    assert.deepEqual(["test1", "test2", "test3"],
      elements.getElements(true).elements);
  })
  it('should return the same element it is passed when adding', () =>{
    delete require.cache[require.resolve('../elements')];
    let elements = require('../elements');
    assert.equal('test', elements.addElement('test'));
  })
});
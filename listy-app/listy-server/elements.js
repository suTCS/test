let elements = [];

const addElement = function(newElem){
  elements.push(newElem);
  return newElem;
}

const getElements = function(sorted){
  if(sorted === "true" || sorted === true){
    return {'elements': elements.slice(0).sort()};
  }
  return {'elements': elements};
}

module.exports = {
  addElement: addElement,
  getElements: getElements
};
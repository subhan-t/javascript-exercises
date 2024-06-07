const removeFromArray = function (arrayToRemoveItems, ...itemsToRemove) {
  itemsToRemove.forEach((itemToRemove) => {
    let idx = arrayToRemoveItems.indexOf(itemToRemove);
    while (idx !== -1) {
      arrayToRemoveItems.splice(idx, 1);
      idx = arrayToRemoveItems.indexOf(itemToRemove, idx);
    }
  });
  return arrayToRemoveItems;
};

// Do not edit below this line
module.exports = removeFromArray;

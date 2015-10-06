// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary.
//
// In this kata you will create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).
//
// The list must be sorted by the value and be sorted largest to smallest.

function sortDict(dict){
  Object.keys(dict).
}

// numbers as keys
sortDict({1:3,2:2,3:1})// [[1,3],[2,2],[3,1]]
sortDict({1:2,2:4,3:6})// [[3,6],[2,4],[1,2]]

// strings as keys
sortDict({'A':2,'K':4,'Z':6})// [['Z',6],['K',4],['A',2]]

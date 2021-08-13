let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// FirstName    isInstructor    favoriteNumbers

// Notes:
// Objects have O(1) time for insertion, removal, and access. Search
// is O(n). Keys, values, entries are all O(n). hasOwnProperty: O(1)
// Some of the advantages here have to do with the fact hat objects are
// unordered. It doesn't really matter "where" a key is its definition,
// for how'd you would use that key out in the wild.

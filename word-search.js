//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  constructor(grid) {
    this.grid = grid || [];
  }

  search(directionX, directionY, x, y, rest) {
    if (x < 0 || y < 0) return false;

    if (this.grid[y]?.[x] === rest[0]) {
      if (rest.length === 1) return [y, x];

      return this.search(
        directionX,
        directionY,
        x + directionX,
        y + directionY,
        rest.slice(1)
      );
    }

    return false;
  }

  searchRight(x, y, rest) {
    return this.search(1, 0, x, y, rest);
  }

  searchLeft(x, y, rest) {
    return this.search(-1, 0, x, y, rest);
  }

  searchUp(x, y, rest) {
    return this.search(0, -1, x, y, rest);
  }

  searchDown(x, y, rest) {
    return this.search(0, 1, x, y, rest);
  }

  searchNE(x, y, rest) {
    return this.search(1, -1, x, y, rest);
  }

  searchSE(x, y, rest) {
    return this.search(1, 1, x, y, rest);
  }

  searchSW(x, y, rest) {
    return this.search(-1, 1, x, y, rest);
  }

  searchNW(x, y, rest) {
    return this.search(-1, -1, x, y, rest);
  }

  searchFrom(x, y, word) {
    const result =
      this.searchRight(x, y, word) ||
      this.searchLeft(x, y, word) ||
      this.searchUp(x, y, word) ||
      this.searchDown(x, y, word) ||
      this.searchNE(x, y, word) ||
      this.searchSE(x, y, word) ||
      this.searchSW(x, y, word) ||
      this.searchNW(x, y, word);

    return result
      ? { start: [y + 1, x + 1], end: [result[0] + 1, result[1] + 1] }
      : undefined;
  }

  startSearch = (word) => {
    for (let y = 0; y < this.grid.length; y += 1) {
      for (let x = 0; x < this.grid[y].length; x += 1) {
        const result = this.searchFrom(x, y, word);
        if (result) return result;
      }
    }

    return undefined;
  };

  find(words) {
    const results = {};

    words.forEach((word) => {
      results[word] = this.startSearch(word);
    });

    return results;
  }
}

export default WordSearch;

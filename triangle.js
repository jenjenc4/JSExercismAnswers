//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Triangle {
  constructor(...sides) {
    const [x, y, z] = [...sides].sort((a, b) => a - b);
    this.uniqSidesLength =
      x + y < z || sides.every(x => x === 0) ? -1 : new Set(sides).size;
  }

  isEquilateral() {
    return this.uniqSidesLength === 1;
  }

  isIsosceles() {
    return [1, 2].includes(this.uniqSidesLength);
  }

  isScalene() {
    return this.uniqSidesLength === 3;
  }
}
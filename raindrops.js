//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function convert(number) {
  const divisibleByThree = isDivisibleByThree(number);
  const divisibleByFive = isDivisibleByFive(number);
  const divisibleBySeven = isDivisibleBySeven(number);
  if(!divisibleByThree && !divisibleByFive && !divisibleBySeven) {
    return `${number}`;
  }
  let output = '';
  if(divisibleByThree) {
    output += 'Pling';
  }
  if(divisibleByFive) {
    output += 'Plang';
  }
  if(divisibleBySeven) {
    output += 'Plong';
  }
  return output;
}

const isDivisibleByThree = (number) => isDivisibleBy(number, 3);
const isDivisibleByFive = (number) => isDivisibleBy(number, 5);
const isDivisibleBySeven = (number) => isDivisibleBy(number, 7);

const isDivisibleBy = (number, factor) => number % factor == 0;
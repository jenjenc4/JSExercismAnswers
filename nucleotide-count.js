//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//to turn a string to an array if u have an empty string set as a function


export class NucleotideCounts {
  static parse(dna) {
    var countA = (dna.match(/A/g) || []).length;
    var countC = (dna.match(/C/g) || []).length;
    var countG = (dna.match(/G/g) || []).length;
    var countT = (dna.match(/T/g) || []).length;

    if (dna.length === countA + countC + countG + countT) {
      return countA + ' ' + countC + ' ' + countG + ' ' + countT;
    } else {
      throw new Error('Invalid nucleotide in strand');
    }
  }
}
    

//String.split

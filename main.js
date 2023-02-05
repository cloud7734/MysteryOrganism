// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// pAequorFactory object accepts specimen number (number) and dna (array)
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    // mutate method selects a random dna element and replaces it with 
    // another valid dna base ('A', 'T', 'C', or 'G')
    mutate() {
      const mutateNum = Math.ceil(Math.random() * 16) - 1;
      let mutatedBase = '';
      switch (this.dna[mutateNum]) {
        case 'A':
          do {
            mutatedBase = returnRandBase();
          } while (mutatedBase === 'A');
          break;
        case 'T':
          do {
            mutatedBase = returnRandBase();
          } while (mutatedBase === 'T');
          break;
        case 'C':
          do {
            mutatedBase = returnRandBase();
          } while (mutatedBase === 'C');
          break;
        case 'G':
          do {
            mutatedBase = returnRandBase();
          } while (mutatedBase === 'G');
          break;
      }
      this.dna[mutateNum] = mutatedBase;
    },
    // compareDNA method accepts another pAequor object and compares dna
    // sequence with this pAequor dna sequence
    // logs percent of dna in common
    compareDNA(pAequor) {
      let numSame = 0;
      for (let j = 0; j < this.dna.length - 1; j++) {
        if (this.dna[j] === pAequor.dna[j]) {
          numSame++;
        };
      };
      let percentSame = ((numSame / this.dna.length) * 100).toFixed(0);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentSame}% DNA in common`);
    },
    // willLikelySurvive method checks dna sequence for 'C' and 'G' 
    // base instances and calculates the percentage of occurances
    // returns true if percentage is greater than 60%
    willLikelySurvive() {
      let numCG = 0;
      for (let k = 0; k < this.dna.length - 1; k++) {
        if (this.dna[k] === 'C' || this.dna[k] === 'G') {
          numCG++;
        }
      }
      let percentSurvival = (numCG / this.dna.length) * 100;
      console.log(percentSurvival);
      return percentSurvival >= 60;
    }
  }
};

// create 30 different pAequor objects and store them in an array
// Note: Assuming there's a better way to do this but didn't find it yet
const labArray = [];
  for (let x = 1; x < 31; x++) {
    labArray.push(pAequorFactory(x, mockUpStrand()));
  };
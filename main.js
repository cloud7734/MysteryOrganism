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
const labArray = {
  org1 : pAequorFactory(1, mockUpStrand()),
  org2 : pAequorFactory(2, mockUpStrand()),
  org3 : pAequorFactory(3, mockUpStrand()),
  org4 : pAequorFactory(4, mockUpStrand()),
  org5 : pAequorFactory(5, mockUpStrand()),
  org6 : pAequorFactory(6, mockUpStrand()),
  org7 : pAequorFactory(7, mockUpStrand()),
  org8 : pAequorFactory(8, mockUpStrand()),
  org9 : pAequorFactory(9, mockUpStrand()),
  org10 : pAequorFactory(10, mockUpStrand()),
  org11 : pAequorFactory(11, mockUpStrand()),
  org12 : pAequorFactory(12, mockUpStrand()),
  org13 : pAequorFactory(13, mockUpStrand()),
  org14 : pAequorFactory(14, mockUpStrand()),
  org15 : pAequorFactory(15, mockUpStrand()),
  org16 : pAequorFactory(16, mockUpStrand()),
  org17 : pAequorFactory(17, mockUpStrand()),
  org18 : pAequorFactory(18, mockUpStrand()),
  org19 : pAequorFactory(19, mockUpStrand()),
  org20 : pAequorFactory(20, mockUpStrand()),
  org21 : pAequorFactory(21, mockUpStrand()),
  org22 : pAequorFactory(22, mockUpStrand()),
  org23 : pAequorFactory(23, mockUpStrand()),
  org24 : pAequorFactory(24, mockUpStrand()),
  org25 : pAequorFactory(25, mockUpStrand()),
  org26 : pAequorFactory(26, mockUpStrand()),
  org27 : pAequorFactory(27, mockUpStrand()),
  org28 : pAequorFactory(28, mockUpStrand()),
  org29 : pAequorFactory(29, mockUpStrand()),
  org30 : pAequorFactory(30, mockUpStrand())
};
console.log(labArray);
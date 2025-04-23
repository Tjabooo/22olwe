var player = 0;

const playerElements = {
  player1: {
    ones: document.getElementById('player1-ones'),
    twos: document.getElementById('player1-twos'),
    threes: document.getElementById('player1-threes'),
    fours: document.getElementById('player1-fours'),
    fives: document.getElementById('player1-fives'),
    sixes: document.getElementById('player1-sixes'),
    sum: document.getElementById('player1-total'),
    bonus: document.getElementById('player1-bonus'),
    pair: document.getElementById('player1-pair'),
    twoPairs: document.getElementById('player1-two-pairs'),
    threeOfAKind: document.getElementById('player1-three-of-a-kind'),
    fourOfAKind: document.getElementById('player1-four-of-a-kind'),
    fullHouse: document.getElementById('player1-full-house'),
    smallStraight: document.getElementById('player1-small-straight'),
    largeStraight: document.getElementById('player1-large-straight'),
    chance: document.getElementById('player1-chance'),
    yahtzee: document.getElementById('player1-yahtzee'),
    total: document.getElementById('player1-total'),
  },
  player2: {
    ones: document.getElementById('player2-ones'),
    twos: document.getElementById('player2-twos'),
    threes: document.getElementById('player2-threes'),
    fours: document.getElementById('player2-fours'),
    fives: document.getElementById('player2-fives'),
    sixes: document.getElementById('player2-sixes'),
    sum: document.getElementById('player2-total'),
    bonus: document.getElementById('player2-bonus'),
    pair: document.getElementById('player2-pair'),
    twoPairs: document.getElementById('player2-two-pairs'),
    threeOfAKind: document.getElementById('player2-three-of-a-kind'),
    fourOfAKind: document.getElementById('player2-four-of-a-kind'),
    fullHouse: document.getElementById('player2-full-house'),
    smallStraight: document.getElementById('player2-small-straight'),
    largeStraight: document.getElementById('player2-large-straight'),
    chance: document.getElementById('player2-chance'),
    yahtzee: document.getElementById('player2-yahtzee'),
    total: document.getElementById('player2-total'),
  },
};

const getCurrentPlayerElements = (currentPlayer) => {
  player = currentPlayer === 1 ? playerElements.player1 : playerElements.player2;
};

function calculateOnes(dice) {
  let sum = dice.filter(d => d === 1).length;
  player.ones.innerHTML = sum > 0 ? sum : '';
}

function calculateTwos(dice) {
  let sum = dice.filter(d => d === 2).length * 2;
  player.twos.innerHTML = sum > 0 ? sum : '';
}

function calculateThrees(dice) {
  let sum = dice.filter(d => d === 3).length * 3;
  player.threes.innerHTML = sum > 0 ? sum : '';
}

function calculateFours(dice) {
  let sum = dice.filter(d => d === 4).length * 4;
  player.fours.innerHTML = sum > 0 ? sum : '';
}

function calculateFives(dice) {
  let sum = dice.filter(d => d === 5).length * 5;
  player.fives.innerHTML = sum > 0 ? sum : '';
}

function calculateSixes(dice) {
  let sum = dice.filter(d => d === 6).length * 6;
  player.sixes.innerHTML = sum > 0 ? sum : '';
}

function calculateBonus(dice) {
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] >= 1 && dice[i] <= 6) {
      sum += dice[i];
    }
  }
  player.bonus.innerHTML = sum >= 63 ? 50 : '';
}

function calculatePair(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 2) {
      player.pair.innerHTML = i * 2;
      return;
    }
  }
  player.pair.innerHTML = '';
}

function calculateTwoPairs(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  let pairs = 0;
  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 2) {
      pairs++;
    }
  }
  player.twoPairs.innerHTML = pairs === 2 ? 4 * 2 : '';
}

function calculateThreeOfAKind(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 3) {
      player.threeOfAKind.innerHTML = i * 3;
      return;
    }
  }
  player.threeOfAKind.innerHTML = '';
  return;
}

function calculateFourOfAKind(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 4) {
      player.fourOfAKind.innerHTML = i * 4;
      return;
    }
  }
  player.fourOfAKind.innerHTML = '';
}

function calculateFullHouse(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  let pair = false;
  let three = false;
  for (let i = 1; i <= 6; i++) {
    if (counts[i] === 2) {
      pair = true;
    } else if (counts[i] === 3) {
      three = true;
    }
  }
  let sum = 0;
  dice.forEach(value =>
    sum += value
  );
  player.fullHouse.innerHTML = pair && three ? sum : '';
  return;
}

function calculateSmallStraight(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  let straight = true;
  for (let i = 1; i <= 4; i++) {
    if (counts[i] === 0) {
      straight = false;
    }
  }
  player.smallStraight.innerHTML = straight ? 15 : '';
  return
}

function calculateLargeStraight(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  let straight = true;
  for (let i = 2; i <= 6; i++) {
    if (counts[i] === 0) {
      straight = false;
    }
  }
  player.largeStraight.innerHTML = straight ? 20 : '';
  return;
}

function calculateChance(dice) {
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    sum += dice[i];
  }
  player.chance.innerHTML = sum;
  return;
}

function calculateYahtzee(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  for (let i = 1; i <= 6; i++) {
    if (counts[i] === 5) {
      player.yahtzee.innerHTML = 50;
      return;
    }
  }
  player.yahtzee.innerHTML = '';
  return
}

function calculateTotal() {
  // code
}

export function runCalculations(dice, currentPlayer) {
  getCurrentPlayerElements(currentPlayer)
  calculateOnes(dice)
  calculateTwos(dice)
  calculateThrees(dice)
  calculateFours(dice)
  calculateFives(dice)
  calculateSixes(dice)
  calculateBonus(dice)
  calculatePair(dice)
  calculateTwoPairs(dice)
  calculateThreeOfAKind(dice)
  calculateFourOfAKind(dice)
  calculateFullHouse(dice)
  calculateSmallStraight(dice)
  calculateLargeStraight(dice)
  calculateChance(dice)
  calculateYahtzee(dice)
  calculateTotal()
}

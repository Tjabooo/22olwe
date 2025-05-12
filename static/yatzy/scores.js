var player = 0;

const playerElements = {
  player1: {
    ones: document.getElementById('player1-ones'),
    twos: document.getElementById('player1-twos'),
    threes: document.getElementById('player1-threes'),
    fours: document.getElementById('player1-fours'),
    fives: document.getElementById('player1-fives'),
    sixes: document.getElementById('player1-sixes'),
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

function setScoreIfNotSaved(element, value) {
  if (!element.classList.contains("saved")) {
    element.innerHTML = value > 0 ? value : '';
  }
  return;
}

const getCurrentPlayerElements = (currentPlayer) => {
  player = currentPlayer === 1 ? playerElements.player1 : playerElements.player2;
};

function calculateOnes(dice) {
  let sum = dice.filter(d => d === 1).length;
  setScoreIfNotSaved(player.ones, sum);
}

function calculateTwos(dice) {
  let sum = dice.filter(d => d === 2).length * 2;
  setScoreIfNotSaved(player.twos, sum);
}

function calculateThrees(dice) {
  let sum = dice.filter(d => d === 3).length * 3;
  setScoreIfNotSaved(player.threes, sum);
}

function calculateFours(dice) {
  let sum = dice.filter(d => d === 4).length * 4;
  setScoreIfNotSaved(player.fours, sum);
}

function calculateFives(dice) {
  let sum = dice.filter(d => d === 5).length * 5;
  setScoreIfNotSaved(player.fives, sum);
}

function calculateSixes(dice) {
  let sum = dice.filter(d => d === 6).length * 6;
  setScoreIfNotSaved(player.sixes, sum);
}

export function calculateBonus() {
  const upperSection = [player.ones, player.twos, player.threes, player.fours, player.fives, player.sixes];
  let allSaved = upperSection.every(cell => cell.classList.contains('saved'));
  if (!allSaved) return;
  let totalScore = 0;
  upperSection.forEach(cell => {
    const value = parseInt(cell.textContent);
    totalScore += value;
  });
  player.bonus.textContent = totalScore >= 63 ? 50 : 0;
  player.bonus.classList.add('saved');
}

function calculatePair(dice) {
  const counts = new Array(7).fill(0);
  dice.forEach(d => counts[d]++);
  for (let i = 6; i >= 1; i--) {
    if (counts[i] >= 2) {
      setScoreIfNotSaved(player.pair, i * 2);
      return;
    }
  }
  setScoreIfNotSaved(player.pair, '');
}

function calculateTwoPairs(dice) {
  const counts = new Array(7).fill(0);
  dice.forEach(d => counts[d]++);
  const pairs = [];
  for (let i = 6; i >= 1; i--) {
    if (counts[i] >= 2) {
      pairs.push(i);
      if (pairs.length === 2) {
        setScoreIfNotSaved(player.twoPairs, pairs[0] * 2 + pairs[1] * 2);
        return;
      }
    }
  }
  setScoreIfNotSaved(player.twoPairs, '');
}

function calculateThreeOfAKind(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 3) {
      setScoreIfNotSaved(player.threeOfAKind, i * 3);
      return;
    }
  }
  setScoreIfNotSaved(player.threeOfAKind, '');
  return;
}

function calculateFourOfAKind(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 4) {
      setScoreIfNotSaved(player.fourOfAKind, i * 4);
      return;
    }
  }
  setScoreIfNotSaved(player.fourOfAKind, '');
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
  setScoreIfNotSaved(player.fullHouse, pair && three ? sum : '');
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
  setScoreIfNotSaved(player.smallStraight, straight ? 15 : '');
  return;
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
  setScoreIfNotSaved(player.largeStraight, straight ? 20 : '');
  return;
}

function calculateChance(dice) {
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    sum += dice[i];
  }
  setScoreIfNotSaved(player.chance, sum);
  return;
}

function calculateYahtzee(dice) {
  let counts = new Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]]++;
  }
  for (let i = 1; i <= 6; i++) {
    if (counts[i] === 5) {
      setScoreIfNotSaved(player.yahtzee, 50);
      return;
    }
  }
  setScoreIfNotSaved(player.yahtzee, '');
  return;
}

export function calculateTotal(currentPlayer) {
  let totalScore = 0;
  document.querySelectorAll(`.score-cell.player-${currentPlayer}`).forEach(cell => {
    if (cell.classList.contains('saved')) {
      const value = parseInt(cell.textContent);
      totalScore += value;
    }
  });
  setScoreIfNotSaved(player.total, totalScore);
}

export function runCalculations(dice, currentPlayer) {
  getCurrentPlayerElements(currentPlayer)
  calculateOnes(dice)
  calculateTwos(dice)
  calculateThrees(dice)
  calculateFours(dice)
  calculateFives(dice)
  calculateSixes(dice)
  calculatePair(dice)
  calculateTwoPairs(dice)
  calculateThreeOfAKind(dice)
  calculateFourOfAKind(dice)
  calculateFullHouse(dice)
  calculateSmallStraight(dice)
  calculateLargeStraight(dice)
  calculateChance(dice)
  calculateYahtzee(dice)
}

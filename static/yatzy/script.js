import {
  runCalculations,
  calculateBonus,
  calculateTotal
} from './scores.js';

document.addEventListener("DOMContentLoaded", () => {
    const diceImages = [
        "https://22olwe.ssis.nu/static/yatzy/assets/dice1.png",
        "https://22olwe.ssis.nu/static/yatzy/assets/dice2.png",
        "https://22olwe.ssis.nu/static/yatzy/assets/dice3.png",
        "https://22olwe.ssis.nu/static/yatzy/assets/dice4.png",
        "https://22olwe.ssis.nu/static/yatzy/assets/dice5.png",
        "https://22olwe.ssis.nu/static/yatzy/assets/dice6.png"
    ];

    const rollButton = document.querySelector(".roll-button");
    const rollsRemainingDisplay = document.querySelector(".rolls-remaining");
    const diceElements = document.querySelectorAll(".dice");
    diceElements.forEach((die, index) => {
        die.dataset.index = index;
    });
    const playerSlots = {
        1: document.querySelectorAll(".player-1 .slot"),
        2: document.querySelectorAll(".player-2 .slot")
    };
    const playerScores = {
      1: {},
      2: {}
    };
    function attachScoreListeners() {
      const scoreCells = document.querySelectorAll(`.score-cell.player-${currentPlayer}`);
      scoreCells.forEach(cell => {
        if (!cell.classList.contains("saved") && !cell.dataset.listenerAttached) {
          cell.addEventListener("click", saveScore, { once: true });
          cell.dataset.listenerAttached = "true";
        }
      });
    }

    let rollsRemaining = 3;
    let hasRolled = false;
    let currentPlayer = 1;
    let currentDiceValues = [1, 1, 1, 1, 1];
    let lockedDice = [false, false, false, false, false];

    function updateRollsRemaining() {
        rollsRemainingDisplay.textContent = `Kast kvar: ${rollsRemaining}`;
    }

    function rollDice() {
      currentDiceValues = currentDiceValues.map((value, index) => {
          if (!lockedDice[index]) {
            return Math.floor(Math.random() * 6) + 1;
          }
          return value;
      });

      currentDiceValues.forEach((value, index) => {
          diceElements[index].src = diceImages[value - 1];
      });

      hasRolled = true;
      runCalculations(currentDiceValues, currentPlayer);
    }

    function resetForNextPlayer() {
      Object.values(playerSlots).forEach(slotsArray => {
        slotsArray.forEach(slot => {
          slot.innerHTML = '';
          slot.style.border = "2px solid black";
        });
      });

      document.querySelectorAll('.score-cell').forEach(cell => {
        if (!cell.classList.contains('saved')) {
          cell.textContent = '';
          delete cell.dataset.listenerAttached;
        }
      });

      const activePlayerInfo = document.querySelector(`.player-info.player-${currentPlayer}`);
      activePlayerInfo.style.color = "#FFD700";
      activePlayerInfo.style.textShadow = "0 0 8px #FFD700";
      activePlayerInfo.style.fontWeight = "bold";

      const inactivePlayerInfo = document.querySelector(`.player-info.player-${currentPlayer % 2 + 1}`);
      inactivePlayerInfo.style.color = "white";
      inactivePlayerInfo.style.textShadow = "none";
      inactivePlayerInfo.style.fontWeight = "normal";

      rollsRemaining = 3;
      updateRollsRemaining();
      hasRolled = false;
      currentDiceValues = [1, 1, 1, 1, 1];
      lockedDice = [false, false, false, false, false];

      diceElements.forEach((die, index) => {
        die.src = diceImages[0];
        die.classList.remove("locked");
        die.style.opacity = "1";
      });
    }

    function saveScore(event) {
      const target = event.target;
      const category = target.dataset.category;

      if (!target.classList.contains(`player-${currentPlayer}`) || target.classList.contains("saved")) {
        return;
      }

      const score = target.textContent.trim();
      if (score === "" && rollsRemaining < 3) {
        const confirmZero = confirm("Är du säker på att du vill spara 0 poäng?");
        if (!confirmZero) return;

        target.textContent = "0";
      }

      target.classList.add("saved");
      target.style.backgroundColor = "#ccc";
      target.removeEventListener("click", saveScore);

      ensureAllScoresFilled();
      calculateBonus();
      switchPlayer();
    }

    function switchPlayer() {
      currentPlayer = currentPlayer % 2 + 1;
      resetForNextPlayer();
    }

    function saveDie(index) {
      const slots = playerSlots[currentPlayer];
      const die = diceElements[index];

      for (let slot of slots) {
        if (slot.childElementCount === 0) {
          const clonedDie = die.cloneNode(true);
          clonedDie.classList.remove("locked");
          clonedDie.dataset.index = index;
          clonedDie.style.width = "100%";
          clonedDie.style.height = "100%";
          slot.style.border = "2px solid white";
          slot.appendChild(clonedDie);
          break;
        }
      }

      die.style.opacity = "0";
      lockedDice[index] = true;
      die.classList.add("locked");
    }

    function unsaveDie(index) {
      const slots = playerSlots[currentPlayer];
      const die = diceElements[index];

      for (let slot of slots) {
        if (
          slot.childElementCount > 0 &&
          slot.firstChild.dataset.index === String(index)
        ) {
          slot.removeChild(slot.firstChild);
          slot.style.border = "1px dashed white";
          break;
        }
      }

      lockedDice[index] = false;
      die.style.opacity = "1";
      die.classList.remove("locked");
    }

    diceElements.forEach((die, index) => {
        die.addEventListener("click", () => {
            if (rollsRemaining < 3) {
                if (!lockedDice[index]) {
                    saveDie(index);
                } else {
                    unsaveDie(index);
                }
            }
        });
    });

    rollButton.addEventListener("click", () => {
        if (rollsRemaining > 0) {
            rollDice();
            rollsRemaining--;
            updateRollsRemaining();

            if (rollsRemaining < 3) {
              attachScoreListeners();
            }
        }
    });

    function ensureAllScoresFilled() {
      const scoreCellsCurrent = document.querySelectorAll(`.score-cell.player-${currentPlayer}`);
      const allSavedCurrent = Array.from(scoreCellsCurrent).every(cell => cell.classList.contains('saved'));
      if (allSavedCurrent) {
        calculateTotal(currentPlayer);
      }
      const scoreCellsPlayer1 = document.querySelectorAll(`.score-cell.player-1`);
      const allSaved1 = Array.from(scoreCellsPlayer1).every(cell => cell.classList.contains('saved'));
      const scoreCellsPlayer2 = document.querySelectorAll(`.score-cell.player-2`);
      const allSaved2 = Array.from(scoreCellsPlayer2).every(cell => cell.classList.contains('saved'));
      if (allSaved1 && allSaved2) {
        calculateTotal(1);
        calculateTotal(2);
      }
    }

    updateRollsRemaining();
});

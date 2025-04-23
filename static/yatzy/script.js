import { runCalculations } from './scores.js';

document.addEventListener("DOMContentLoaded", () => {
    const diceImages = [
        "http://192.168.49.145:8000/static/yatzy/assets/dice1.png",
        "http://192.168.49.145:8000/static/yatzy/assets/dice2.png",
        "http://192.168.49.145:8000/static/yatzy/assets/dice3.png",
        "http://192.168.49.145:8000/static/yatzy/assets/dice4.png",
        "http://192.168.49.145:8000/static/yatzy/assets/dice5.png",
        "http://192.168.49.145:8000/static/yatzy/assets/dice6.png"
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
      const scoreCells = document.querySelectorAll(`.score-cell.player-${currentPlayer}:not(.saved)`);
      scoreCells.forEach(cell => {
        const newCell = cell.cloneNode(true);
        cell.replaceWith(newCell);
        newCell.addEventListener("click", saveScore, { once: true });
      });
    }

    let rollsRemaining = 3;
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

      runCalculations(currentDiceValues, currentPlayer);
    }

    function resetForNextPlayer() {
        rollsRemaining = 3;
        updateRollsRemaining();
        currentDiceValues = [1, 1, 1, 1, 1];
        lockedDice = [false, false, false, false, false];

        diceElements.forEach((die, index) => {
            die.src = diceImages[0];
            die.classList.remove("locked");
            die.style.opacity = "1";
        });

        // const slots = playerSlots[currentPlayer];
        // slots.forEach(slot => {
        //     while (slot.firstChild) {
        //         slot.removeChild(slot.firstChild);
        //     }
        //   slot.style.border = "1px solid black";
        // });
    }

    function saveScore(event) {
      console.log("Saving score");
      const target = event.target;
      const category = target.dataset.category;

      if (!target.classList.contains(`player-${currentPlayer}`) || target.classList.contains("saved")) {
        return;
      }

      const score = target.textContent.trim();
      if (score === "") {
        return;
      }

      target.classList.add("saved");
      target.style.backgroundColor = "#ccc";

      switchPlayer();
    }

    function switchPlayer() {
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      resetForNextPlayer();
      alert(`Nu är det Spelare ${currentPlayer} tur!`);
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
              console.log("Attached score listeners");
              attachScoreListeners();
            }
        }
    });

    updateRollsRemaining();
});

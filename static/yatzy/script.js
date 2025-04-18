document.addEventListener("DOMContentLoaded", () => {
    const diceImages = [
        "http://192.168.1.210:8000/static/media/dice1.png",
        "http://192.168.1.210:8000/static/media/dice2.png",
        "http://192.168.1.210:8000/static/media/dice3.png",
        "http://192.168.1.210:8000/static/media/dice4.png",
        "http://192.168.1.210:8000/static/media/dice5.png",
        "http://192.168.1.210:8000/static/media/dice6.png"
    ];

    const rollButton = document.querySelector(".roll-button");
    const rollsRemainingDisplay = document.querySelector(".rolls-remaining");
    const diceElements = document.querySelectorAll(".dice");
    const playerSlots = {
        1: document.querySelectorAll(".player-1 .slot"),
        2: document.querySelectorAll(".player-2 .slot")
    };

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

        const slots = playerSlots[currentPlayer];
        slots.forEach(slot => {
            while (slot.firstChild) {
                slot.removeChild(slot.firstChild);
            }
        });
    }

    function saveScore() {
      // code

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

    diceElements.forEach((die, index) => {
        die.addEventListener("click", () => {
            if (rollsRemaining < 3 && !lockedDice[index]) {
                saveDie(index);
            }
        });
    });

    rollButton.addEventListener("click", () => {
        if (rollsRemaining > 0) {
            rollDice();
            rollsRemaining--;
            updateRollsRemaining();

            if (rollsRemaining === 0) {
                setTimeout(switchPlayer, 500);
            }
        }
    });

    updateRollsRemaining();
});

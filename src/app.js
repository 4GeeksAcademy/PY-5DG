function getRandomCard() {
  const suits = ["♥", "♦", "♣", "♠"];
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Generate random indices for suit and rank
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomRankIndex = Math.floor(Math.random() * ranks.length);

  // Get the suit and rank based on random indices
  const suit = suits[randomSuitIndex];
  const rank = ranks[randomRankIndex];

  return { rank, suit };
}

function displayRandomCard() {
  const { rank, suit } = getRandomCard();

  document.getElementById("number").textContent = rank;
  document.getElementById("top-symbol").textContent = suit;
  document.getElementById("bottom-symbol").textContent = suit;

  // Change the color of the suit
  const isRed = suit === "♥" || suit === "♦";
  document.getElementById("top-symbol").style.color = isRed ? "red" : "black";
  document.getElementById("bottom-symbol").style.color = isRed
    ? "red"
    : "black";
}

document
  .getElementById("generate-btn")
  .addEventListener("click", displayRandomCard);

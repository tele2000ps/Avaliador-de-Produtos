const checkboxes = document.querySelectorAll("input[type='checkbox']");
const scoreElements = document.querySelectorAll("td[id*='-score']");
const totalScoreElement = document.getElementById("total-score");
const avaliacaoElement = document.getElementById("avaliacao");

const scores = [2, 2, 5, 2, 5, 2, 5, 2, 2, 2, 3]; // Pontuações dos itens

function calculateScore() {
  let totalScore = 0;

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      totalScore += scores[index];
      scoreElements[index].textContent = scores[index];
    } else {
      scoreElements[index].textContent = 0;
    }
  });

  totalScoreElement.textContent = totalScore;

  // Lógica do "PRODUTO CAMPEÃO":
  if (totalScore >= 25) {
    avaliacaoElement.textContent = "PRODUTO CAMPEÃO 🏆";
  } else if (totalScore > 20) { // Lógica do "PRODUTO RAZOÁVEL":
    avaliacaoElement.textContent = "PRODUTO RAZOÁVEL ⚠️";
  } else { // Caso não seja nem "CAMPEÃO" nem "RAZOÁVEL":
    avaliacaoElement.textContent = "PRODUTO RUIM ❌";
  }
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", calculateScore);
});

// Calcular a pontuação inicial ao carregar a página
calculateScore();
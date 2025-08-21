// scripts.js
const perguntasPai = { 'areaAtuacao': true, 'escolaridade': true, 'contatoTecnologia': true };
const perguntasFilho = { 'habilidadesAnaliticas': true, 'trabalhoEquipe': true, 'temperamento': true };
const perguntasNeto = { 'faixaSalarial': true, 'preferenciaTrabalho': true, 'motivacao': true };

const state = {
  currentStep: 1,
  totalSteps: 3,
  responses: { pai: {}, filho: {}, neto: {} }
};

// Checa se tudo foi carregado
document.addEventListener('DOMContentLoaded', () => {
  loadStep(state.currentStep);
  // Marcar selected
  document.querySelectorAll('.option-card input[type="radio"]').forEach(inp => {
    inp.addEventListener('change', function () {
      // Tira selected anterior
      document.querySelectorAll(`input[name="${inp.name}"]`).forEach(el => {
        el.closest('.option-card').classList.remove('selected');
      });
      this.closest('.option-card').classList.add('selected');
    });
  });
});

function updateProgress(step) {
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.width = `${Math.round((step / state.totalSteps) * 100)}%`;
  }
  // Destaca label ativa
  let labels = document.querySelectorAll('.progress-labels span');
  labels.forEach((el, idx) => el.classList.toggle('active', idx === step - 1));
}

function loadStep(n) {
  document.querySelectorAll('.form-step').forEach(f => f.classList.remove('active'));
  const curr = document.querySelector(`.form-step[data-step="${n}"]`);
  if (curr) curr.classList.add('active');
  updateProgress(n);
}

function proximaEtapa(curr) {
  if (validateStep(curr)) {
    coletarRespostas(curr);
    state.currentStep = curr + 1;
    loadStep(state.currentStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function etapaAnterior(curr) {
  state.currentStep = curr - 1;
  loadStep(state.currentStep);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function coletarRespostas(step) {
  const stepEl = document.querySelector(`.form-step[data-step="${step}"]`);
  if (!stepEl) return;
  let radios = stepEl.querySelectorAll('input[type="radio"]:checked');
  radios.forEach(input => {
    let cat = perguntasPai[input.name] ? 'pai' : perguntasFilho[input.name] ? 'filho' : 'neto';
    state.responses[cat][input.name] = input.value;
  });
}

function validateStep(n) {
  let stepEl = document.querySelector(`.form-step[data-step="${n}"]`);
  let required = stepEl.querySelectorAll('input[type="radio"][required]');
  let allNames = Array.from(required).map(r => r.name);
  let tudoOk = true;
  let dados = {};
  allNames.forEach(name => {
    let checked = stepEl.querySelector(`input[type="radio"][name="${name}"]:checked`);
    if (!checked) tudoOk = false;
  });
  if (!tudoOk) alert('Responda todas as perguntas antes de continuar.');
  return tudoOk;
}

// Recomendações
function calcularRecomendacao(responses) {
  // Pontua cada regra de mapeamento e escolhe a de maior score
  let melhor = null, maior = -1;
  for (const map of mapeamentoCarreiras) {
    let score = 0;
    // Pai
    for (let key in responses.pai)
      if (map[key] && map[key].toLowerCase() === (responses.pai[key] + '').toLowerCase()) score += 5;
    // Filho
    for (let key in responses.filho)
      if (map[key] && map[key].toLowerCase() === (responses.filho[key] + '').toLowerCase()) score += 3;
    // Neto
    for (let key in responses.neto)
      if (map[key] && map[key].toLowerCase() === (responses.neto[key] + '').toLowerCase()) score += 2;
    if (score > maior) { maior = score; melhor = map; }
  }
  if (maior > 0) return melhor.recomendacao;
  // Default se nada bater
  return {
    areaPai: 'TI - Área Genérica',
    areaFilho: 'Explorar as Possibilidades',
    profissao: 'Profissional de TI em Formação'
  };
}

function calculateResult() {
  // Coleta respostas da última antes de calcular
  if (!validateStep(state.currentStep)) return;
  coletarRespostas(state.currentStep);
  const rec = calcularRecomendacao(state.responses);
  showResult(rec);
}

function showResult(rec) {
  document.getElementById('quiz-form').style.display = "none";
  const resultContainer = document.getElementById('result-container');
  const resultContent = document.getElementById('result-content');
  resultContent.innerHTML = `<div class='result-box'>
    <h3>Ramo sugerido:</h3><p>${rec.areaPai}</p>
    <h3>Área recomendada:</h3><p>${rec.areaFilho}</p>
    <h3>Profissão possível:</h3><p>${rec.profissao}</p>
    </div>`;
  resultContainer.classList.remove('hidden');
}

function reiniciarQuiz() {
    // Limpa respostas e reseta
  state.currentStep = 1;
  state.responses = { pai: {}, filho: {}, neto: {} };
  document.getElementById('quiz-form').reset();
  document.getElementById('quiz-form').style.display = "";
  loadStep(1);
  document.getElementById('result-container').classList.add('hidden');
  // LIMPA opções visuais .selected
  document.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
  
}

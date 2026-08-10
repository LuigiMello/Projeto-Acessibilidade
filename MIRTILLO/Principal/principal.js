// FAQ
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');

        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
            answer.style.maxHeight = '0';
            arrow.textContent = '▼';
            question.style.color = '#333'; // Cor do texto da pergunta quando fechada
        } else {
            answer.classList.add('show');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            arrow.textContent = '−';
            question.style.color = '#2b1df7'; // Cor do texto da pergunta quando aberta
        }
    });
});

// Animação do botão "Cadastre-se agora"
const gradientButton = document.querySelector('.gradient-button');

gradientButton.addEventListener('mouseover', () => {
  gradientButton.style.transform = 'scale(1.05)'; // Aumenta o tamanho levemente
  gradientButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Adiciona sombra
  gradientButton.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease'; // Transição suave
});

gradientButton.addEventListener('mouseout', () => {
  gradientButton.style.transform = 'scale(1)'; // Retorna ao tamanho original
  gradientButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Reduz a sombra
  gradientButton.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease'; // Transição suave
});

// Adiciona evento de clique para o link "Faça Login"
const loginLink = document.querySelector('.mirtillo-footer a');
loginLink.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    // Aqui você pode adicionar o código para lidar com o clique no link, como redirecionar para outra página ou abrir uma modal
    console.log('Clique no link "Faça Login"!'); // Exemplo de ação
});

function showTabContent(tabId) {
    // Remove a classe 'active' de todas as abas
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick="showTabContent('${tabId}')"]`).classList.add('active');
    
    // Lógica para exibir conteúdo de cada aba se necessário
}

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.accordion-icon');

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.textContent = "+";
    } else {
        document.querySelectorAll('.accordion-content').forEach(acc => acc.style.maxHeight = null);
        document.querySelectorAll('.accordion-icon').forEach(icon => icon.textContent = "+");
        
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = "−";
    }
}

// Adicione um evento de "mouseenter" e "mouseleave" à logo
const logo = document.querySelector('.logo');
const logoText = document.querySelector('.logo-text');

logo.addEventListener('mouseenter', () => {
    logo.style.transition = "transform 0.5s ease"; // Adiciona a transição para a logo
    logo.style.transform = "rotate(360deg)";  // Roda a logo em 360 graus
    logoText.style.color = "white"; // Mostra a palavra "Mirtillo"
    logoText.style.width = "auto";
    logoText.style.left = "75px"; // Faz o texto slide para a direita
    logoText.style.transition = "left 0.5s ease-in-out"; 
});

logo.addEventListener('mouseleave', () => {
    logo.style.transform = "rotate(0deg)"; // Retorna a logo para a posição normal
    logoText.style.color = "transparent"; // Oculta a palavra "Mirtillo"
    logoText.style.left = "0"; // Volta a posição inicial
    logoText.style.width = "0"; 
});

const lightningIcon = document.querySelector('.lightning-container');

lightningIcon.addEventListener('mouseenter', () => {
    lightningIcon.classList.add('lightning-active');
});

lightningIcon.addEventListener('mouseleave', () => {
    lightningIcon.classList.remove('lightning-active');
});

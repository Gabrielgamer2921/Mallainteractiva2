const canvas = document.getElementById('mallaCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

// Dibuja una malla de círculos
function drawMesh() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const spacing = 50;
    for (let y = spacing/2; y < canvas.height; y += spacing) {
        for (let x = spacing/2; x < canvas.width; x += spacing) {
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = "#ff66a3";
            ctx.fill();
        }
    }
}

drawMesh();

// Detecta el mouse y muestra un mensaje
canvas.addEventListener('mousemove', (e) => {
    const message = document.querySelector('p');
    message.textContent = "Te amo ❤️";
});

let items = [];

const formulario = document.getElementById("formulario");
const input = document.getElementById("input-texto");
const lista = document.getElementById("lista");

const mostrarLista = () => {
    lista.innerHTML = items.map((item, index) => `
        <div class="tarjeta">
            ${item}
            <button class="btn-borrar" data-index="${index}">×</button>
        </div>
    `).join("");

    // Agregar event listener a cada botón borrar
    document.querySelectorAll(".btn-borrar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            items.splice(index, 1);
            mostrarLista();
        });
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (texto === "") return;

    items.push(texto);
    input.value = "";
    mostrarLista();
});

mostrarLista();
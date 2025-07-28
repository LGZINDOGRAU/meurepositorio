document.addEventListener('DOMContentLoaded', () => {
    // Array de objetos com os dados dos alunos
    // *** IMPORTANTE: Edite esta lista com os nomes e notas reais dos seus alunos ***
    const alunos = [
        { nome: "Ana Silva", nota: 9.8 },
        { nome: "Bruno Costa", nota: 9.5 },
        { nome: "Carla Souza", nota: 9.2 },
        { nome: "Daniel Pereira", nota: 9.0 },
        { nome: "Elisa Santos", nota: 8.9 },
        // Adicione mais alunos aqui seguindo o mesmo formato
        { nome: "Felipe Rodrigues", nota: 8.7 },
        { nome: "Gabriela Oliveira", nota: 8.5 },
        { nome: "Henrique Martins", nota: 8.3 }
    ];

    // Ordena os alunos pela nota, da maior para a menor
    alunos.sort((a, b) => b.nota - a.nota);

    const listaAlunosUL = document.getElementById('lista-alunos');

    // Limpa a lista existente (se houver)
    listaAlunosUL.innerHTML = '';

    // Adiciona cada aluno à lista na página
    alunos.forEach(aluno => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="nome">${aluno.nome}</span>
            <span class="nota">${aluno.nota.toFixed(1)}</span>
        `; // .toFixed(1) para mostrar uma casa decimal na nota
        listaAlunosUL.appendChild(listItem);
    });
});

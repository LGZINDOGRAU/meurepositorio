document.addEventListener('DOMContentLoaded', () => {
    // Array de objetos com os dados dos alunos
    // *** IMPORTANTE: Edite esta lista com os nomes e notas reais dos seus alunos ***
    const alunos = [
        { nome: "Kauey", nota: 9.8 },
        { nome: "Luis", nota: 9.5 },
        { nome: "Gustavo", nota: 9.2 },
        { nome: "Ana Júlia", nota: 9.0 },
        { nome: "Lara", nota: 8.9 },
        // Adicione mais alunos aqui seguindo o mesmo formato
        { nome: "Marlon", nota: 8.7 },
        { nome: "Ana clara", nota: 8.5 },
        { nome: "Isabelly", nota: 8.3 }
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

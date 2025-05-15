
function sortearNumero() {
const numero = Math.floor(Math.random() * 100) + 1; // número de 1 a 100
document.getElementById('numero-sorteado').textContent = numero;
}


const participantes = {
1: "Fabiana (sogra)",
2: "Ana Pula (mãe)",
3: "Keila (tia)",
5: "Rachel (Ribeirão - sogra)",
6: "Elza (madrinha)",
7: "Fernanda (sogra)",
8: "Tania (trabalha mãe)",
9: "Vó Ana",
10: "Leticia (sogra)",
11: "Jessica (mãe)",
12: "Marcia (madrinha Kawe)",
13: "Talita (vizinha sogra)",
14: "Ryam (irmão Kawe)",
16: "Ramira (Ribeirão sogra)",
17: "Talita Calef (cliente mãe)",
18: "Daiane (Marcos)",
19: "Nayara (mãe)",
20: "Ana Paula (madrinha Kawe)",
22: "Alessandra (madrinha Kawe)",
24: "Vitoria (tia)",
25: "Jennifer (tia)",
26: "Marcia (madrinha Kawe)",
27: "Hortencia (madrinha Gabi)",
28: "Vó (Kawe)",
29: "Tais (mãe)",
30: "Tia Cida (sogra)",
31: "Ryam (irmão Kawe)",
33: "Vó Marli",
34: "Jucelia (madrasta)",
36: "Maria Helena (sogra)",
38: "Marli (sogra)",
40: "Darciela (sogra)",
41: "Jane (mãe)",
42: "Mae Jessica (mãe)",
46: "Willian (Vó Ana)",
47: "Maria Jose (Ribeirão sogra)",
48: "Erica (sogra)",
51: "Tia Maria (sogra)",
53: "Marcio (sogro)",
54: "Cisko (sogra)",
55: "Adson (padrinho Kawe)",
58: "Alessandra (Ribeirão - sogra)",
59: "Caio",
67: "Natania (sogra)",
77: "Roberta (Ribeirão - sogra)",
89: "Krizia (sogra vendeu)",
90: "Nayara",
91: "João Bosco (padrinho)",
95: "Jucelia (madrasta)",
98: "Vilma (tia)",
99: "Daciely (amiga mãe)",
100: "Fabiana (sogra)"
};

function sortearNumero() {
const numero = Math.floor(Math.random() * 100) + 1; // número de 1 a 100
const nome = participantes[numero];
const resultado = nome ? `${numero} - ${nome}` : `${numero}`;
document.getElementById('numero-sorteado').textContent = resultado;
}



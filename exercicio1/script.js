const sacolao = []

const mercado = [
    item01 = {
        nome: "Uva",
        preco: 8,
        disponibilidade: true
    },
    
    item02 = {
        nome: "abacate",
        preco: 3,
        disponibilidade: false
    },
    
    item03 = {
        nome: "repolho",
        preco: 2,
        disponibilidade: false
    }
]

mercado.forEach((item) =>{
    if(item.disponibilidade){
        sacolao.push(item)
    }
    
});

// sacolao.push(item01, item02, item03)

console.log(sacolao)
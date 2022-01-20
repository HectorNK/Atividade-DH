/*var nomeEmpresa = "Cine DH"

console.log(nomeEmpresa)

const catalogo = require("./databases/catalogo.json")



let adicionarFilme = (codigo,titulo,duracao,atores,anoDeLancamento,emCartaz ) => {
    var novoFilme= {
    codigo: codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    anoDeLancamento: anoDeLancamento,
    emCartaz:emCartaz,
    }
    catalogo.push(novoFilme)
}

/*adicionarFilme(12, "o incrivel", 2, ["cace, turue,mamae"], 2021, true)
console.log('depois de add filme')
console.log(catalogo)*/

//     const buscarFilme = (buscarCodigo) => {
//        let filmeExiste = false
//         catalogo.forEach((filme, index) =>{
//             if(filme.codigo == buscarCodigo){
//                  filmeExiste = true
//                 console.log("Filme: " + filme.titulo)
//                 console.log("Está em cartaz? " + filme.emCartaz)
//                 console.log("Ano de lançamento: " + filme.anoDeLancamento)
//             }

//         })

//     }
//     buscarFilme()

//     let listarTodosFilmes = () => {
//         for(i = 0; i< catalogo.length; i++){
//            console.log("codigo: " + catalogo[i].codigo)          
//            console. log("Filme: " + catalogo[i].titulo)
//            console.log("Ano de lançamento: " + catalogo[i].anoDeLancamento)
//            console.log("Esta em cartaz? " + catalogo[i].emCartaz)
//            console.log("________________________")
//         }

//     }


// const listarTodosFilmesEmCartaz = () => {
//    catalogo.forEach((filme, index)=>{

//       if (filme.emCartaz) {
//         console.log("===========================");

//         console.log("Filme: " + filme.titulo);
//         console.log("Está em cartaz?: " + filme.emCartaz);
//         console.log("Ano de Lançamento: " + filme.anoDeLancamento);

//         console.log("===========================");
//       }
//     })
// }
// listarTodosFilmesEmCartaz()

/*let ar = [18, 10, 15,32, 50]

let arNovo = ar.filter((valor) => valor >=18)
console.log(arNovo)*/

let people = [{
    nome: 'bernado',
    idade: 34

},
{
    nome: 'lucas',
    idade: 15
},
{
    nome: 'pedro',
    idade: 20

}]
let areMapeado = people.map((valor) => valor.idade + 2)
console.log(areMapeado)

module.exports = {
    curso: {
        nomeCurso: 'Lógica de programação',
        notaAprovacao: 6,
        faltasMaximas: 5,
        listaAlunos: [],
    
        adcionarEstudante: function (estudante) {
            this.listaAlunos.push(estudante);
        },

      
        resultado: function (aluno){

            let media = aluno.calcularMedia();
            let resultado;

        
            if (aluno.quantidadeFaltas < this.faltasMaximas && media >= this.notaAprovacao) {
                resultado = console.log(aluno.nome + " foi aprovado" );

 
            } else if(aluno.quantidadeFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1)){   
                resultado = console.log(aluno.nome + " atingiu a quantidade maxima de faltas porém foi aprovado pela média maior que 10% da nota de aprovação" );

     
            } else {
                resultado = console.log( aluno.nome + " foi reprovado" );
                
            }
            return resultado;
        },


        listaResultado: function(){
            let resultadoFinal= [];
            for (let i = 0; i < this.listaAlunos.length; i++) {
               resultadoFinal.push(this.resultado(this.listaAlunos[i]));
            }
            return resultadoFinal;

      
        }
    }
}
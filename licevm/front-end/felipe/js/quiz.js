quiz = "(Cesgranrio) Com o final da 2a Guerra Mundial, os países vitoriosos procuraram criar vários mecanismos internacionais que buscassem o desenvolvimento do planeta de forma mais harmônica. É dessa época a criação do seguinte organismo:\na) ONU- para a constituição de um exército internacional para pôr fim às guerras.\nb) OTAN - para a desmilitarização dos países ocidentais e a diminuição das zonas de conflito.\nc) GATT - para a implantação de uma tarifa única sobre os produtos e serviços internacionais.\nd) UNESCO - para a melhoria da qualidade alimentar das populações miseráveis do Terceiro Mundo.\ne) FMI - para ajudar financeiramente aos países membros, quando em dificuldades."

str_to_quiz = function(str) {
    lines = str.split("\n");
    var i = 0;
    for(i = 0; i < lines.length; i++) {
        console.log(lines[i].trim().slice(0, 2));
    }
}

str_to_quiz(quiz)

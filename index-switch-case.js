
// switch (valor) {
//     case 1:
//         semana ='é segunda';
//         break;
//     case 2:
//         semana ='é terça-feira';
//         break;
//     case 3:
//         semana ='é quarta-feira';
//         break;
//     case 4:
//         semana ='é quinta-feira';
//         break;
//     case 5:
//         semana ='é sexta-feira';
//         break;
//     case 6:
//         semana = 'é sabado';
//         break;
//     case 7:
//         semana = 'é domingo';
//         break;
//     default:
//         semana = 'nao escolheu nenhuma opcao';
// }
// console.log(semana)



// let nota = 'a';

// switch (nota) {
//     case 'A':
//         console.log('otimo');
//         break;
//     case 'B':
//         console.log('bom');
//         break;
//     case 'C' :
//         console.log('regular');
//         break;
//     case 'D' :
//         console.log('ruim');
//         break;
//     case 'F' :
//         console.log('reprovado');
//         break;
// }

// switch (nota) {
//     case 'a':
//         console.log('otimo');
//         break;
//     case 'b':
//         console.log('bom');
//         break;
//     case 'c' :
//         console.log('regular');
//         break;
//     case 'd' :
//         console.log('ruim');
//         break;
//     case 'f' :
//         console.log('reprovado');
//         break;
// }




// let numero = 0;
// let numero2 = 0;
// let operador = '/';
// let operacao;

// switch (operador) {
//     case '+':
//         operacao = numero + numero2;
//         console.log(operacao);
//         break;
//     case '*':
//         operacao = numero * numero2;
//         console.log(operacao);
//         break;
//     case '/' :
//         operacao =  numero / numero2;
//         console.log(operacao);
//         break;
//     case '-' :
//         operacao =  numero - numero2;
//         console.log(operacao);
//         break;
//     default:
//         console.log('nao definido')
// }




// let numMes = '';
// let mes;
// switch (numMes) {
//     case '1':
//         mes = 'janei';
//         break;
//     case '2':
//         mes = 'fevere';
//         break;
//     case '3' :
//         mes = 'mar';        
//         break;
//     case '4' :
//         mes = 'abril';
//         break;
//     case '5':
//         mes = 'maio';
//         break;
//     case '6':
//         mes = 'junho';;
//         break;
//     case '7' :
//         mes = 'julho';;
//         break;
//     case '8' :
//         mes = 'agosto';
//         break;
//     case '9':
//         mes = 'setem';;
//         break;
//     case '10':
//         mes = 'outu';
//         break;
//     case '11' :
//         mes = 'novem';
//         break;
//     case '12' :
//         mes = 'dezem';
//         break;
// }

// console.log(mes)


// let faixa = '10';
// let faix;

// switch (faixa) {
//     case 'L':
//         faix = 'LIVRE';
//         break;
//     case '10':
//         faix = '+10';
//         break;
//     case '12':
//         faix = '+12';
//         break;
//     case '14':
//         faix = '+14';
//         break;
//     case '16':
//         faix = '+16';
//         break;
//     case '18':
//         faix = '+18';
//         break;
//     default:
//         console.log('faixa n definida')
// }
// console.log(`a faixa etaria é ${faix}`)




// let opcao = '1';
// let menu;

// switch (opcao) {
//     case '0':
//         menu = 'marmita';
//         break;
//     case '1':
//         menu = 'marmita1';
//         break;
//     case '2':
//         menu = 'marmita2';
//         break;
//     default:
//         menu = 'vc n escolheu um prato'
// }

// console.log(menu)




let mes = prompt('mes q nasceu:')
let dia = prompt('dia q vc nasceu:')
let pname;
let sname;

if(mes == null && dia == null) {
    alert('erro, nao foi digitado nada')
}
else if(mes == null || dia == null) {
    alert('erro um dos campos vazio')
}
else if(Number(mes) > 12 && Number(dia) > 31) {
    alert('erro maior mes ou dia maior q 12 meses ou 31 dias')
}
else if(Number(mes) > 12 || Number(dia) > 31) {
    alert('erro maior mes ou dia maior q 12 meses ou 31 dias')
}
else if (mes != '' && dia != '') {
    switch (mes) {
        case '1':
            pname = 'CAPIROTO';
            break;
        case '2':
            pname = 'LENDÁRIOS';
            break;
        case '3':
            pname = 'SOLDADOS';
            break;
        case '4':
            pname = 'FAROESTE';
            break;
        case '5':
            pname = 'FODÕES';
            break;
        case '6':
            pname = 'MONSTROS';
            break;
        case '7':
            pname = 'FANFARRÕES';
            break;
        case '8':
            pname = 'BADERNEIROS';
            break;
        case '9':
            pname = 'PERTUBADOS';
            break;
        case '10':
            pname = 'ALIENS';
            break;
        case '11':
            pname = 'REVOLTADOS';
            break;
        case '12':
            pname = 'GIGANTES';
            break;
        default:
            pname
    }
    switch (dia) {
        case '1':
            sname = 'DO ESPAÇO';
            break;
        case '2':
            sname = ' DO INFERNO';
            break;
        case '3':
            sname = 'DA GALÁXIA';
            break;
        case '4':
            sname = 'DA FAZENDA';
            break;
        case '5':
            sname = 'DO DIABO';
            break;
        case '6':
            sname = 'DO JAPÃO';
            break;
        case '7':
            sname = 'DAS TREVOSAS';
            break;
        case '8':
            sname = 'DO FUNDÃO';
            break;
        case '9':
            sname = 'DOS ILLUMINATES';
            break;
        case '10':
            sname = 'DE COPACABANA';
            break;
        case '11':
            sname = 'DAS TREVAS';
            break;
        case '12':
            sname = 'CABOCLO';
            break;
        case '13':
            sname = 'DA MURALHA';
            break;
        case '14':
            sname = 'VOADORES';
            break;
        case '15':
            sname = 'DO TEMPO';
            break;
        case '16':
            sname = 'DA ESPERANÇA E A ULTIMA QUE MORRE';
            break;
        case '17':
            sname = 'DA MORTE';
            break;
        case '18':
            sname = 'ABENÇOADOS';
            break;
        case '19':
            sname = 'INFERNAIS';
            break;
        case '20':
            sname = 'MALOQUEIROS';
            break;
        case '21':
            sname = 'DOS 7 PECADOS CAPITAIS';
            break;
        case '22':
            sname = 'MUMIFICADOS';
            break;
        case '23':
            sname = 'AMIGOS DO CHIMBINHA';
            break;
        case '24':
            sname = 'POSERS';
            break;
        case '25':
            sname = 'DO MOSH PIT';
            break;
        case '26':
            sname = 'VALENTÕES';
            break;
        case '27':
            sname = 'DA ILHA DO DEMÔNIO';
            break;
        case '28':
            sname = 'DO SEGUNDO SOL';
            break;
        case '29':
            sname = 'REBELDES SEM CAUSA';
            break;
        case '30':
            sname = 'GROTESCOS';
            break;
        case '31':
            sname = 'DO CEMITÉRIO MALDITO';
            break;
        default:

            alert(` esse  dia ${dia} nao existe`)
    }
    alert(`seu nome é ${pname} ${sname}`)
}
else {
    alert('erro voce nao escolheu o seu mes e dia')
}

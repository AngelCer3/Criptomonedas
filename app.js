function calcular (){
    let opciones = $('#opciones').val();
    let valor1 = Number($('#valorInversion').val());
    let bitcoin = 388311;
    let etherum = 26916;
    let dogecoin = 1;
    let xrp = 0;
    let mensaje = '';
    let inversion = 0;

    switch(opciones){
        case 'b':
            inversion = valor1 *1/bitcoin;
            mensaje = 'Puedes comprar\n'+inversion+'\nbitcoin con\n'+valor1;
            break;
        case 'e':
            inversion = valor1 * 1 /etherum;
            mensaje = 'Puedes comprar\n'+inversion+'\netherum con\n'+valor1;
            break;
        case 'd':
            inversion = valor1 * 1 /(dogecoin+.24);
            mensaje = 'Puedes comprar\n'+inversion+'\ndogecoin con\n'+valor1;
            break;
        case 'x':
            inversion = valor1 * 1 /(xrp+0.47450);
            mensaje = 'Puedes comprar\n'+inversion+'\nxrp con\n'+valor1;
            break;
        default:
            alert('No existe esta criptomoneda');
            break;
    }
    swal(mensaje);
}
$(document).ready(function(){
    $('#btnCalcular').click(function(){
        calcular();
    });
});
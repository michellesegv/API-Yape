const screen7 = (update) => {
  // let ultDigitos = state.tarjeta.slice(state.yapeCard.length-5);
  const divClave = $("<div id='divCodigo' class='container marginTop widthcar'></div>");
  const rowIcons = $("<div class='row'><div class='col-xs-6 pull-right'><img class='question' src='assets/img/icons/question.png'></div></div>");
  const rowIngresa = $("<div class='row'></div>");
  const rowClave = $("<div class='row'></div>");
  const rowRegistra = $("<div class='row'></div>");
  const ingresa = $("<div class= 'col-xs-12 text-center inicio' style='width:100%'><img src='assets/img/icons/bcp-logo.png'><h3>Ingresa la clave de tu tarjeta</h3><h5>Tarjeta</h5></div>");
  const inputClave = $("<div id='container-password-card' class='col-xs-10 text-center input-group inputCel'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/lock.png'></span><input id='claveTarjeta' type='password' class='form-control' maxlength='4' aria-describedby='basic-addon1'></div>");
  const btnRegistrar = $("<div class='col-xs-12 text-center btn-continuar'><button id='btn-reg' type='button' class='btn btn-lg' disabled='disabled'>REGISTRAR</button></div>");

  divClave.append(rowIcons);
  divClave.append(rowIngresa);
  divClave.append(rowClave);
  divClave.append(rowRegistra);
  rowIngresa.append(ingresa);
  rowClave.append(inputClave);
  rowRegistra.append(btnRegistrar);

  inputClave.on('keyup', (e) =>{

    // && /^[0-9]$/.test($('#claveTarjeta').val())

    if($('#claveTarjeta').val().length == 4 ){
      $('#container-password-card').removeClass('red-bottom');
      $('#btn-reg').prop('disabled', false);
      $('#btn-reg').css('background-color', '#1FAD9F');
      $('#btn-reg').css('color', 'white');

    }else{
      $('#container-password-card').addClass('red-bottom');
      $('#btn-reg').prop('disabled', true);
    }
  })

  btnRegistrar.on('click',() => {
    console.log($('#claveTarjeta').val());
    nuevoTarjeta(state.yapePhone, state.yapeCard, state.yapeMonth, state.yapeYear, $('#claveTarjeta').val() );
    console.log(state.yapePhone, state.yapeCard, state.yapeMonth, state.yapeYear, $('#claveTarjeta').val());
    state.screen = "screen8";
    console.log(state.screen);
    update();
  });


  return divClave;
}

var nuevoTarjeta = (phon, cardNumbe, month, year, pass) =>{
  console.log(phon, cardNumbe, month, year, pass);
  $.post('api/registerCard', {phone: phon, cardNumber: cardNumbe, cardMonth: month, cardYear: year, cardPassword: pass}, function(val){
    console.log(val);
    console.log(val.data.cardPassword);
    state.pass = val.data.cardPassword;
  });
}

const screen4 = (update) => {
  const divUsuario = $("<div id='divUsuario' class='container marginTop widthcar'></div>");
  const rowUsuario = $("<div class='row'></div>");
  const rowDatos = $("<div class='row'></div>");
  const rowBtn = $("<div class='row'></div>");
  const usuario = $("<div class= 'col-xs-12 text-center inicio' style='width:100%'><img src='assets/img/icons/lockone.png'><h3>Crea tu usuario Yape</h3><h5>Ingresa un nombre, email y clave de usuario.</h5></div>");
  const inputNombre = $("<div id='container-name' class='col-xs-10 text-center input-group inputCod input-data'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/user.png'></span><input id='nombre' type='text' class='form-control' placeholder='Nombre' aria-describedby='basic-addon1'></div>");
  const inputCorreo = $("<div id='container-email' class='col-xs-10 text-center input-group inputCod input-data'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/message-gray.png'></span><input id='email' type='email' class='form-control' placeholder='correo@ejemplo.com' aria-describedby='basic-addon1'></div>");
  const inputClave = $("<div id='container-password' class='col-xs-10 text-center input-group inputCod input-data'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/lock.png'></span><input id='password' type='password' class='form-control' placeholder='Ingresa Clave de 6 dígitos' maxlength='6' aria-describedby='basic-addon1'></div>");
  const pAlerta = $("<div class='col-xs-12 text-center msje'><h5>Cuida esta clave como oro, es tu acceso a Yape</h5></div>")
  const crearCuenta = $("<div class='col-xs-12 text-center btn-continuar'><button id='btn-cuenta' type='button' class='btn btn-lg' disabled='disabled'>CREAR CUENTA</button></div>");

  divUsuario.append(rowUsuario);
  divUsuario.append(rowDatos);
  divUsuario.append(rowBtn);
  rowUsuario.append(usuario);
  rowDatos.append(inputNombre);
  rowDatos.append(inputCorreo);
  rowDatos.append(inputClave);
  rowDatos.append(pAlerta);
  rowBtn.append(crearCuenta);


  inputNombre.on('keyup', (e) =>{
    if($('#nombre').val().length >= 2 && /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test($('#nombre').val())){
      $('#container-name').removeClass('red-bottom');
      if(/^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/.test($('#email').val())){
        /*
        $('#container-email').removeClass('red-bottom');
*/
        if($('#password').val().length == 6){
          /*
          $('#container-password').removeClass('red-bottom');
*/
          $('#btn-cuenta').prop('disabled', false);
          $('#btn-cuenta').css('background-color', '#1FAD9F');
          $('#btn-cuenta').css('color', 'white');
          /*		$('#btn-cuenta').on('click',() => {
						state.screen = "screen5";
						console.log(state.screen);
						update();
					});*/
        } else{
          $('#btn-cuenta').prop('disabled', true);
        }
      }else{
        $('#btn-cuenta').prop('disabled', true);
      }
    }else{
      $('#container-name').addClass('red-bottom');
      $('#btn-cuenta').prop('disabled', true);
    }
  })

  inputCorreo.on('keyup', (e) =>{
    if($('#nombre').val().length >= 2 && /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test($('#nombre').val())){
      if(/^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/.test($('#email').val())){
        $('#container-email').removeClass('red-bottom');
        if($('#password').val().length == 6){
          $('#btn-cuenta').prop('disabled', false);
          $('#btn-cuenta').css('background-color', '#1FAD9F');
          $('#btn-cuenta').css('color', 'white');
          /*$('#btn-cuenta').on('click',() => {
						state.screen = "screen5";
						console.log(state.screen);
						update();
					});*/
        } else{
          $('#btn-cuenta').prop('disabled', true);
        }
      }else{
        $('#container-email').addClass('red-bottom');
        $('#btn-cuenta').prop('disabled', true);
      }
    }else{
      $('#btn-cuenta').prop('disabled', true);
    }
  })

  inputClave.on('keyup', (e) =>{
    if($('#nombre').val().length >= 2 && /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test($('#nombre').val())){
      if(/^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/.test($('#email').val())){
        if($('#password').val().length == 6){
          $('#container-password').removeClass('red-bottom');
          $('#btn-cuenta').prop('disabled', false);
          $('#btn-cuenta').css('background-color', '#1FAD9F');
          $('#btn-cuenta').css('color', 'white');
          /*$('#btn-cuenta').on('click',() => {
						nuevoUsuario(state.yapePhone, $('#nombre').val(),$('#email').val(), $('#password').val());
						state.screen = "screen5";
						console.log(state.screen);
						update();
					});*/
        } else{
          $('#container-password').addClass('red-bottom');
          $('#btn-cuenta').prop('disabled', true);
        }
      }else{
        $('#btn-cuenta').prop('disabled', true);
      }
    }else{
      $('#btn-cuenta').prop('disabled', true);
    }

  })

  crearCuenta.on('click',() => {
    nuevoUsuario(state.yapePhone, $('#nombre').val(),$('#email').val(), $('#password').val());
    state.screen = "screen5";
    console.log(state.screen);
    update();
  });

  return divUsuario;
}


var nuevoUsuario = (pho, nam, ema, pass) =>{
  $.post('/api/createUser', {phone: pho, name: nam, email: ema, password: pass}, function(val){
    console.log(val);
    console.log(val.data.name);
    console.log(val.data.email);
    console.log(val.data.password);		
    state.yapeName = val.data.name;
    state.yapeEmail = val.data.email;
    state.yapePassword = val.data.password;
  });
}

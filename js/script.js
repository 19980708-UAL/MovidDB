// Add active class to the current button (highlight it)
let header = document.getElementById("navlistMovie");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* Inicializa  Modal registar  */
const regist = document.getElementById("registar");
regist.addEventListener("click", regForm);

/* Inicializa  Modal login  */
const entra = document.getElementById("entrar");
entra.addEventListener("click", loginForm);

/*  Desenha a model Registar  */
function regForm() {
  swal(
    {
      title: "Registo de novo utrilizador",

      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Registar",
      cancelButtonText: "Cancelar",
      closeOnConfirm: true,
      html:
        '<form id="regForm">' +
        '<span class="navbar-brand" href="#">' +
        '<img src="./images/logo.png" width="30" height="30" alt="logo" />' +
        "Filmes BD" +
        "</span><br><br>" +
        '<div class="form-group">' +
        '<input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="Primeiro Nome">' +
        "</div>" +
        '<div class="form-group"> ' +
        ' <input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Ultimo Nome">' +
        "</div>" +
        '<div class="form-group">' +
        '<input type="email" name="email" id="email" class="form-control input-sm" placeholder="Correio Eletrónico">' +
        "</div>" +
        '<div class="form-group"> ' +
        '<input type="password" name="password" id="password" class="form-control input-sm" placeholder="Senha"> ' +
        "</div>" +
        '<div class="form-group">' +
        '<input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-sm" placeholder="Confirme a Senha">' +
        "</div>" +
        "</form>",
    },
    function (isConfirm) {
      // do whatever you want with the form data
      console.log(this.swalForm); // { name: 'user name', nickname: 'what the user sends' }
    }
  );
}

/*  Desenha a model Login  */
function loginForm() {
  swal({
    title: "Entrar",

    showCancelButton: true,
    confirmButtonColor: "#218838",
    confirmButtonText: "Entrar",
    cancelButtonText: "Cancelar",
    closeOnConfirm: true,
    html:
      ' <form id="loginForm">' +
      '<span class="navbar-brand" href="#">' +
      '<img src="./images/logo.png" width="30" height="30" alt="logo" />' +
      "Filmes BD" +
      "</span><br><br>" +
      '<div class="form-group">' +
      '<input type="email" name="email" id="email" class="required form-control input-sm" placeholder="Correio Eletrónico">' +
      "</div>" +
      '<div class="form-group"> ' +
      '<input type="password" name="password" id="password" class="required form-control input-sm" placeholder="Senha"> ' +
      "</div></form>",
    preConfirm: () => {
      let username = Swal.getPopup().querySelector("#email").value;
      let password = Swal.getPopup().querySelector("#password").value;
      if (username === "" || password === "") {
        Swal.showValidationMessage('Username/Password empty');
      }
      return { username: username, password: password };
    },
  });
}

/* Filtra o tipo de filmes */
function movieType(movieType) {
  //console.log("Tipo de filme :" + movieType);
  buildTable(myMoviesAction, movieType);
  document.getElementById("cartaz").style.display = "block";
  document.getElementById("cast").style.display = "none";
}

/*  Gerar o cartaz de cada filme FrontOffice */
buildTable(myMoviesAction, "all");

function buildTable(data, type) {
  let table = document.getElementById("myMoviesAction");
  //console.log(table)
  let row = "";
  if (type === "all") {
    for (let i = 0; i < data.length; i++) {
      //console.log(data[i].titulo);
      row +=
        '<div class="col-xl-3 col-md-6 mb-4" >' +
        '<div class="card border-0 shadow">' +
        '<img src="./images/Cartaz/' +
        data[i].image +
        '" class="card-img-top" alt="..." onclick="movieModal(myMoviesAction[' +
        i +
        '])"/>' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title mb-0" onclick="movieModal(myMoviesAction[' +
        i +
        '])">' +
        data[i].titulo +
        "</h5>" +
        '<div class="card-text text-black-50" onclick="movieModal(myMoviesAction[' +
        i +
        '])">' +
        data[i].type +
        "</div>" +
        '<i class="fa fa-star' +
        data[i].favorite +
        '" aria-hidden="true" onclick="isFavorite(this);"></i>' +
        "</div>" +
        "</div>" +
        "</div>";
    }
    table.innerHTML = row;
  } else {
    for (let i = 0; i < data.length; i++) {
      if (type === "favorite") {
        if (data[i].favorite === " checked") {
          row +=
            '<div class="col-xl-3 col-md-6 mb-4" >' +
            '<div class="card border-0 shadow">' +
            '<img src="./images/Cartaz/' +
            data[i].image +
            '" class="card-img-top" alt="..." onclick="movieModal(myMoviesAction[' +
            i +
            '])"/>' +
            '<div class="card-body text-center">' +
            '<h5 class="card-title mb-0" onclick="movieModal(myMoviesAction[' +
            i +
            '])">' +
            data[i].titulo +
            "</h5>" +
            '<div class="card-text text-black-50" onclick="movieModal(myMoviesAction[' +
            i +
            '])">' +
            data[i].type +
            "</div>" +
            '<i class="fa fa-star' +
            data[i].favorite +
            '" aria-hidden="true" onclick="isFavorite(this);"></i>' +
            "</div>" +
            "</div>" +
            "</div>";
        }
      } else {
        if (data[i].type === type) {
          row +=
            '<div class="col-xl-3 col-md-6 mb-4" >' +
            '<div class="card border-0 shadow">' +
            '<img src="./images/Cartaz/' +
            data[i].image +
            '" class="card-img-top" alt="..." onclick="movieModal(myMoviesAction[' +
            i +
            '])"/>' +
            '<div class="card-body text-center">' +
            '<h5 class="card-title mb-0" onclick="movieModal(myMoviesAction[' +
            i +
            '])">' +
            data[i].titulo +
            "</h5>" +
            '<div class="card-text text-black-50" onclick="movieModal(myMoviesAction[' +
            i +
            '])">' +
            data[i].type +
            "</div>" +
            '<i class="fa fa-star' +
            data[i].favorite +
            '" aria-hidden="true" onclick="isFavorite(this);"></i>' +
            "</div>" +
            "</div>" +
            "</div>";
        }
      }
    }
    table.innerHTML = row;
  }
}

/* Filtra o tipo de cast */
function movieCast(castType) {
  document.getElementById("cast").style.display = "block";
  document.getElementById("cartaz").style.display = "none";
  //console.log("Tipo de filme :" + castType);
  buildTableCast(myMoviesCast, castType);
}

/*  Gerar o cartaz de elencos */
buildTableCast(myMoviesCast, "all");

function buildTableCast(data, cast_type) {
  let table = document.getElementById("myMoviesCast");
  let row = "";
  if (cast_type === "all") {
    for (let i = 0; i < data.length; i++) {
      row +=
        '<div class="col-xl-3 col-md-6 mb-4" data-toggle="modal" >' +
        '<div class="card border-0 shadow">' +
        '<img src="./images/Staff/' +
        data[i].image +
        '" class="card-img-top" alt="..." onclick="castModal(myMoviesCast[' +
        i +
        '])"/>' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title mb-0">' +
        data[i].nome +
        "</h5>" +
        '<div class="card-text text-black-50">' +
        data[i].type +
        "</div>" +
        '<i class="fa fa-star' +
        data[i].favorite +
        '" aria-hidden="true" onclick="isFavorite(this);"></i>' +
        "</div>" +
        "</div>" +
        "</div>";
    }
    table.innerHTML = row;
  } else {
    for (let i = 0; i < data.length; i++) {
      if (cast_type === "favorite") {
        if (data[i].favorite === " checked") {
          row +=
            '<div class="col-xl-3 col-md-6 mb-4" data-toggle="modal" data-target="#modalFilme">' +
            '<div class="card border-0 shadow">' +
            '<img src="./images/Staff/' +
            data[i].image +
            '" class="card-img-top" alt="..." />' +
            '<div class="card-body text-center">' +
            '<h5 class="card-title mb-0">' +
            data[i].nome +
            "</h5>" +
            '<div class="card-text text-black-50">' +
            data[i].type +
            "</div>" +
            '<i class="fa fa-star' +
            data[i].favorite +
            '" aria-hidden="true" onclick="isFavorite(this);">></i>' +
            "</div>" +
            "</div>" +
            "</div>";
        }
      } else {
        if (data[i].type === cast_type) {
          row +=
            '<div class="col-xl-3 col-md-6 mb-4" data-toggle="modal" data-target="#modalFilme">' +
            '<div class="card border-0 shadow">' +
            '<img src="./images/Staff/' +
            data[i].image +
            '" class="card-img-top" alt="..." />' +
            '<div class="card-body text-center">' +
            '<h5 class="card-title mb-0">' +
            data[i].nome +
            "</h5>" +
            '<div class="card-text text-black-50">' +
            data[i].type +
            "</div>" +
            '<i class="fa fa-star' +
            data[i].favorite +
            '" aria-hidden="true" onclick="isFavorite(this);">></i>' +
            "</div>" +
            "</div>" +
            "</div>";
        }
      }
    }
    table.innerHTML = row;
  }
}

/*  Modal Detalhes Filmes  */

function movieModal(vMovie) {
  swal({
    title: vMovie.titulo,

    showCancelButton: true,
    confirmButtonColor: "#218838",
    confirmButtonText: "Entrar",
    showConfirmButton:false,
    cancelButtonText: "fechar",
    closeOnConfirm: true,
    html:
      "<h2>" +
      vMovie.nome +
      "</h2>" +
      '<div class="card shadow border-0">' +
      '<img class="card-img-top" src="./images/Cartaz/' +
      vMovie.image +
      '" alt="' +
      vMovie.nome +
      '" />' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      vMovie.ano +
      "</h5>" +
      '<p class="card-text">' +
      vMovie.descricao +
      "</p>",
    function(isConfirm) {
      // do whatever you want with the form data
      console.log(this.swalForm); // { name: 'user name', nickname: 'what the user sends' }
    },
  });
}

/*  Modal Detalhes Cast  */

function castModal(vCast) {
  swal({
    title: vCast.nome,

    showCancelButton: true,
    confirmButtonColor: "#218838",
    confirmButtonText: "Entrar",
    showConfirmButton:false,
    cancelButtonText: "fechar",
    closeOnConfirm: true,
    html:
      '<div class="card shadow border-0">' +
      '<div>'+
      '<img src="./images/Staff/' +
      vCast.image +
      '"  class="img-thumbnail" alt="' +
      vCast.image +
      '" />' +
      '</div>'+
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      vCast.type +
      "</h5>",
    function(isConfirm) {
      // do whatever you want with the form data
      console.log(this.swalForm); // { name: 'user name', nickname: 'what the user sends' }
    },
  });
}

// muda os favoritos

function isFavorite(star) {
  if (star.className === "fa fa-star-o") star.className = "fa fa-star checked";
  else star.className = "fa fa-star-o";
}

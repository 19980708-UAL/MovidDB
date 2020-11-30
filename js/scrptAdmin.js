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

/*  Desenha a modal Editar/Criar Filme  */

function movieForm(vMovie) {
  swal(
    {
      title: "Criar Filme",

      showCancelButton: true,
      confirmButtonColor: "#218838",
      confirmButtonText: "Gravar",
      cancelButtonText: "Cancelar",
      closeOnConfirm: true,
      html:
        ' <form id="movieForm">' +
        '<span class="navbar-brand" href="#">' +
        '<img src="./images/logo.png" width="30" height="30" alt="logo" />' +
        "Filmes BD" +
        "</span><br><br>" +
        '<div class="form-group">' +
        '<img src="./images/Cartaz/' +
        vMovie.image +
        '"  class="img-thumbnail" alt="Cartaz" />' +
        "</div>" +
        '<div class="form-group">' +
        '<div class="input-group">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="btnInserir">Inserir</span>' +
        "</div>" +
        '<div class="custom-file">' +
        '<input type="file" class="custom-file-input" id="imageMovie"  aria-describedby="btnInserir">' +
        '<label class="custom-file-label" for="imageMovie">Escolha uma imagem</label>' +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="form-group">' +
        '<input type="text" name="titulo" id="titulo" class="form-control input-sm" placeholder="Titulo" value="' +
        vMovie.titulo +
        '">' +
        "</div>" +
        '<div class="form-group"> ' +
        '<input type="text" name="nome" id="nome" class="form-control input-sm" placeholder="Nome" value="' +
        vMovie.nome +
        '"> ' +
        "</div>" +
        '<div class="form-group"> ' +
        '<textarea class="form-control" id="descricao" rows="3" placeholder="Descrição">' +
        vMovie.descricao +
        "</textarea>" +
        "</div>" +
        '<div class="form-group"> ' +
        '<input type="number" name="ano" id="ano" class="form-control input-sm" placeholder="Ano" value="' +
        vMovie.ano +
        '"> ' +
        "</div>" +
        '<div class="form-group"> ' +
        '<input type="text" name="realiza" id="realiza" class="form-control input-sm" placeholder="Realizador" value="' +
        vMovie.realizador +
        '"> ' +
        "</div>" +
        '<div class="form-group"> ' +
        '<input type="text" name="elenco" id="elenco" class="form-control input-sm" placeholder="Elenco"> Tenho de por div e ser preenchida pelo javascript' +
        "</div>" +
        "</form>",
      preConfirm: () => {
        /*           const email = document.getElementById('email').value
          const password = document.getElementById('password').value
          let aut = 0;
          for (let i = 0; i < registerUsers.length; i++) {
            if (registerUsers[i].email === email) {
              aut = aut + 1;
            }
          }
          if (aut === 0){
            alert('User ou password incorrectos!');
          } */
      },
    },
    function (isConfirm) {
      // do whatever you want with the form data
      console.log(this.swalForm); // { name: 'user name', nickname: 'what the user sends' }
    }
  ).then((vMovie) => {
    document.getElementById("titulo").value = vMovie;
  });
}

/*  Gerar o cartaz de cada utilizador  BackOffice */
/*  Mostra apenas utilizadores  */
function usersType() {
  document.getElementById("cast").style.display = "none";
  document.getElementById("cartaz").style.display = "none";
  document.getElementById("users").style.display = "block";
}
editUserTable(registerUsers);

function editUserTable(data) {
  let table = document.getElementById("myUserEdit");
  for (let i = 0; i < data.length; i++) {
    var row =
      '<div class="col-xl-3 col-md-6 mb-4" data-toggle="modal" onclick="userEdit(registerUsers[' +
      i +
      '])" id="editUser" >' +
      '<div class="card border-0 shadow text-center">' +
      '<img id="fotoUser" src="./images/user/userPhoto.jpg" class="rounded-circle z-depth-2" alt="..." height="60" width="60"/>' +
      '<div class="card-body text-center">' +
      '<h5 class="card-title mb-0">' +
      data[i].firstName +
      " " +
      data[i].lastNAme +
      '&nbsp;<i class="fa fa-pencil" aria-hidden="true"></i>' +
      "</h5>" +
      '<div  class="card-text text-black-50">' +
      data[i].email +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    table.innerHTML += row;
  }
}

/*  Desenha a modal Editar Utilizadores  */

function userEdit(vUser) {
  swal(
    {
      title: "Editar Utilizador",

      showCancelButton: true,
      confirmButtonColor: "#218838",
      confirmButtonText: "Gravar",
      cancelButtonText: "Cancelar",
      closeOnConfirm: true,
      html:
        ' <form id="movieForm">' +
        '<span class="navbar-brand" href="#">' +
        '<img src="./images/logo.png" width="30" height="30" alt="logo" />' +
        "Filmes BD" +
        "</span><br><br>" +
        '<div class="form-group">' +
        '<img src="./images/user/userPhoto.jpg"  class="img-thumbnail" alt="Foto Utilizador" />' +
        "</div>" +
        '<div class="form-group">' +
        '<div class="input-group">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="btnInserir">Inserir</span>' +
        "</div>" +
        '<div class="custom-file">' +
        '<input type="file" class="custom-file-input" id="imageMovie"  aria-describedby="btnInserir">' +
        '<label class="custom-file-label" for="imageMovie">Escolha uma imagem</label>' +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="form-group">' +
        '<input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="Primeiro Nome" value="' +
        vUser.firstName +
        '">' +
        "</div>" +
        '<div class="form-group"> ' +
        ' <input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Ultimo Nome" value="' +
        vUser.lastNAme +
        '">' +
        "</div>" +
        '<div class="form-group">' +
        '<input type="email" name="email" id="email" class="form-control input-sm" placeholder="Correio Eletrónico" value="' +
        vUser.email +
        '">' +
        "</div>" +
        '<div class="form-group"> ' +
        '<input type="password" name="password" id="password" class="form-control input-sm" placeholder="Senha"> ' +
        "</div>" +
        '<div class="form-group">' +
        '<input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-sm" placeholder="Confirme a Senha">' +
        "</div>" +
        "</form>",
      preConfirm: () => {
        /*           const email = document.getElementById('email').value
          const password = document.getElementById('password').value
          let aut = 0;
          for (let i = 0; i < registerUsers.length; i++) {
            if (registerUsers[i].email === email) {
              aut = aut + 1;
            }
          }
          if (aut === 0){
            alert('User ou password incorrectos!');
          } */
      },
    },
    function (isConfirm) {
      // do whatever you want with the form data
      console.log(this.swalForm); // { name: 'user name', nickname: 'what the user sends' }
    }
  );
}

function movieType(movieType) {
  //console.log("Tipo de filme :" + movieType);
  editmMovieTable(myMoviesAction, movieType);
  document.getElementById("cartaz").style.display = "block";
  document.getElementById("cast").style.display = "none";
  document.getElementById("users").style.display = "none";
}

/*  Gerar o cartaz de cada filme BackOffice */
editmMovieTable(myMoviesAction, "all");

function editmMovieTable(data, type) {
  let table = document.getElementById("myMoviesAction");
  //console.log(table)
  let row = "";
  if (type === "all") {
    for (let i = 0; i < data.length; i++) {
      //console.log(data[i].titulo);
      row +=
        '<div class="col-xl-3 col-md-6 mb-4" onclick="movieForm(myMoviesAction[' +
        i +
        '])">' +
        '<div class="card border-0 shadow">' +
        '<img src="./images/Cartaz/' +
        data[i].image +
        '" class="card-img-top" alt="..." />' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title mb-0">' +
        data[i].titulo +
        '&nbsp;<i class="fa fa-pencil" aria-hidden="true"></i>' +
        "</h5>" +
        '<div class="card-text text-black-50">' +
        data[i].type +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
    table.innerHTML = row;
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].type === type) {
        row +=
          '<div class="col-xl-3 col-md-6 mb-4" onclick="movieForm(myMoviesAction[' +
          i +
          '])">' +
          '<div class="card border-0 shadow">' +
          '<img src="./images/Cartaz/' +
          data[i].image +
          '" class="card-img-top" alt="..." />' +
          '<div class="card-body text-center">' +
          '<h5 class="card-title mb-0">' +
          data[i].titulo +
          '&nbsp;<i class="fa fa-pencil" aria-hidden="true"></i>' +
          "</h5>" +
          '<div class="card-text text-black-50">' +
          data[i].type +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      }
    }
    table.innerHTML = row;
  }
}

/* Filtra o tipo de cast */
function movieCast(castType) {
  document.getElementById("cast").style.display = "block";
  document.getElementById("cartaz").style.display = "none";
  document.getElementById("users").style.display = "none";
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
        '<div class="col-xl-3 col-md-6 mb-4" data-toggle="modal" data-target="#modalFilme" onclick="castEdit(myMoviesCast[' +
        i +
        '])">' +
        '<div class="card border-0 shadow">' +
        '<img src="./images/Staff/' +
        data[i].image +
        '" class="card-img-top" alt="..." />' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title mb-0">' +
        data[i].nome +
        '&nbsp;<i class="fa fa-pencil" aria-hidden="true"></i>' +
        "</h5>" +
        '<div class="card-text text-black-50">' +
        data[i].type +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
    table.innerHTML = row;
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].type === cast_type) {
        row +=
          '<div class="col-xl-3 col-md-6 mb-4" data-toggle="modal" data-target="#modalFilme" onclick="castEdit(myMoviesCast[' +
          i +
          '])">' +
          '<div class="card border-0 shadow">' +
          '<img src="./images/Staff/' +
          data[i].image +
          '" class="card-img-top" alt="..." />' +
          '<div class="card-body text-center">' +
          '<h5 class="card-title mb-0">' +
          data[i].nome +
          '&nbsp;<i class="fa fa-pencil" aria-hidden="true"></i>' +
          "</h5>" +
          '<div class="card-text text-black-50">' +
          data[i].type +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      }
    }
    table.innerHTML = row;
  }
}

function castEdit(vCast) {
  swal(
    {
      title: "Editar Elenco",

      showCancelButton: true,
      confirmButtonColor: "#218838",
      confirmButtonText: "Gravar",
      cancelButtonText: "Cancelar",
      closeOnConfirm: true,
      html:
        ' <form id="movieForm">' +
        '<span class="navbar-brand" href="#">' +
        '<img src="./images/logo.jpg" width="30" height="30" alt="logo" />' +
        "Filmes BD" +
        "</span><br><br>" +
        '<div class="form-group">' +
        '<img src="./images/Staff/' +
        vCast.image +
        '"  class="img-thumbnail" alt="Foto Utilizador" />' +
        "</div>" +
        '<div class="form-group">' +
        '<div class="input-group">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="btnInserir">Inserir</span>' +
        "</div>" +
        '<div class="custom-file">' +
        '<input type="file" class="custom-file-input" id="imageMovie"  aria-describedby="btnInserir">' +
        '<label class="custom-file-label" for="imageMovie">Escolha uma imagem</label>' +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="form-group">' +
        '<input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="Primeiro Nome" value="' +
        vCast.nome +
        '">' +
        "</div>" +
        '<div class="form-group"> ' +
        ' <input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Ultimo Nome" value="' +
        vCast.type +
        '">' +
        "</div>" +
        "</form>",
      preConfirm: () => {
        /*           const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            let aut = 0;
            for (let i = 0; i < registerUsers.length; i++) {
              if (registerUsers[i].email === email) {
                aut = aut + 1;
              }
            }
            if (aut === 0){
              alert('User ou password incorrectos!');
            } */
      },
    },
    function (isConfirm) {
      // do whatever you want with the form data
      console.log(this.swalForm); // { name: 'user name', nickname: 'what the user sends' }
    }
  );
}

/* Inicializa  Modal regista/edita Filme  */
/* const movie = document.getElementById("editFilme");
 movie.addEventListener("click", movieForm); */

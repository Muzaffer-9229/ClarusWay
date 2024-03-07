//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");
let userData = "";
fetch("https://api.github.com/users")
  .then((res) => {
    // console.log(res);
    if (!res.ok) {
      //* hatayi görmek/ göstermek icin
      throw new Error(`Something went wrong ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    userData = data;
    // console.log(userData);
    showUser(data);
  })
  .catch((err) => console.log(err));

const showUser = (data) => {
  //   console.log(data);
  const userSection = document.getElementById("users");
  //   userSection.innerHTML += ``;

  data.forEach((user) => {
    console.log(user);
    userSection.innerHTML += `
    <h1>${user.login}</h1>
    <img src="${user.avatar_url}" alt="" width="200px" />
    `;
  });
};
const displayError = (err) => {
  const userSection = document.getElementById("users");
  userSection.innerHTML = `
      <h2>${err}</h2>
      <img src="./img/404.png" alt="error" />
    `;
};

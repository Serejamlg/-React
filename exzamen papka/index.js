//Массив фильмов 
const arrayFilms = [
    {
        name: 'Мстители', 
        years: '2012',
        countre: 'США',
        genre: 'фантастика',
        rating: '7.9' 
    },
    {
        name: 'Тор любовь и гром', 
        years: '2022',
        countre: 'Австралия',
        genre: 'фантастика',
        rating: '6.4' 
    }
]
// нашел все элементы и отрисовал их в HTML
const nameFilm = document.querySelector(".name");
const yearsFilm = document.querySelector(".years");
const countreFilm = document.querySelector(".countre");
const genreFilm = document.querySelector(".genre");
const ratingFilm = document.querySelector(".rating");

const nameFilm1 = document.querySelector(".name1");
const yearsFilm1 = document.querySelector(".years1");
const countreFilm1= document.querySelector(".countre1");
const genreFilm1 = document.querySelector(".genre1");
const ratingFilm1 = document.querySelector(".rating1");

function render() {
    nameFilm.innerHTML = arrayFilms[0].name;
    yearsFilm.innerHTML = arrayFilms[0].years;
    countreFilm.innerHTML = arrayFilms[0].countre;
    genreFilm.innerHTML = arrayFilms[0].genre;
    ratingFilm.innerHTML = arrayFilms[0].rating;
    
    nameFilm1.innerHTML = arrayFilms[1].name;
    yearsFilm1.innerHTML = arrayFilms[1].years;
    countreFilm1.innerHTML = arrayFilms[1].countre;
    genreFilm1.innerHTML = arrayFilms[1].genre;
    ratingFilm1.innerHTML = arrayFilms[1].rating;
}
  render();

//найти все инпуты по добавлению
const inputName = document.querySelector(".inputName");
const yearsFilm1 = document.querySelector(".years1");
const countreFilm1= document.querySelector(".countre1");
const genreFilm1 = document.querySelector(".genre1");
const ratingFilm1 = document.querySelector(".rating1");


  //найти кнопку для добавления 
   const addButton = document.querySelector('.addFilms')
    addButton.addEventListener('click', () => {
        arrayFilms.push()
    })




    // import "./styles.css";
    // const arrayFilms = [
    //   {
    //     name: "Мстители",
    //     years: "2012",
    //     countre: "США",
    //     genre: "фантастика",
    //     rating: "7.9"
    //   },
    //   {
    //     name: "Тор любовь и гром",
    //     years: "2022",
    //     countre: "Австралия",
    //     genre: "фантастика",
    //     rating: "6.4"
    //   }
    // ];
    
    // const inputName = document.querySelector(".inputName");
    // const btn = document.querySelector("button");
    // const content = document.querySelector(".content");
    // btn.addEventListener("click", () => {
    //   content.innerHTML = inputName.value;
    
    //   console.log();
    // });
    


// const addButton = document.querySelector(".btn");

// const content = document.querySelector("#app");

// const arr = [{ film: "Avengers" }];

// addButton.addEventListener("click", () => {
//   arr.push({ film: "tor" });

//   render();
// });

// function render() {
//   content.innerHTML = "";
//   for (let i = 0; i < arr.length; i++) {
//     content.innerHTML += `<li>${arr[i].film}</li>`;
//   }
// }
// render();
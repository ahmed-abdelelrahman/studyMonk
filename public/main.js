document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

// const charactersList = document.getElementById("charactersList");
// const searchBar = document.getElementById("searchBar");
// let hpCharacters = [];

// searchBar.addEventListener("keyup", (e) => {
//   const searchString = e.target.value.toLowerCase();

//   const filteredCharacters = hpCharacters.filter((character) => {
//     return (
//       character.name.toLowerCase().includes(searchString) ||
//       character.house.toLowerCase().includes(searchString)
//     );
//   });
//   displayCharacters(filteredCharacters);
// });

// const loadCharacters = async () => {
//   try {
//     const res = await fetch("https://hp-api.herokuapp.com/api/characters");
//     hpCharacters = await res.json();
//     displayCharacters(hpCharacters);
//   } catch (err) {
//     console.error(err);
//   }
// };

// const displayCharacters = (characters) => {
//   const htmlString = characters
//     .map((character) => {
//       return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//     })
//     .join("");
//   charactersList.innerHTML = htmlString;
// };

// loadCharacters();

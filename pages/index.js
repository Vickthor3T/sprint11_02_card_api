import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
const places = [
  {
    name: "Cancun",
    link: "https://images.pexels.com/photos/30617940/pexels-photo-30617940/free-photo-of-atardecer-en-la-playa-de-la-serena-chile.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Cartagena",
    link: "https://images.pexels.com/photos/3816807/pexels-photo-3816807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "navidad",
    link: "https://images.pexels.com/photos/673865/pexels-photo-673865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Playa1",
    link: "https://images.pexels.com/photos/673865/pexels-photo-673865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Playa2",
    link: "https://images.pexels.com/photos/673865/pexels-photo-673865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Playa3",
    link: "https://images.pexels.com/photos/673865/pexels-photo-673865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

//selecciona

/*const cardContainer = document.querySelector(".card-container");
places.forEach((place) => {
  const card = new Card(place, "#card-template"); //PLANOS
  //console.log(card);
  cardContainer.appendChild(card.generateCard()); //YO INDEX LAS AGREGO
});*/
const popupImage = new Popup("#popupImage");

const section = new Section(
  places,
  (place) => {
    const card = new Card(place, "#card-template", () => {
      popupImage.open();
    });
    return card.generateCard();
  },
  ".card-container"
);

section.renderItems();

const section2 = new Section(
  places,
  (place) => {
    const card = new Card(place, "#card-template", () => {
      popupImage.open();
    });
    return card.generateCard();
  },
  ".card-container"
);

section2.renderItems();

/********************************************************** */

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const popupFormA = new Popup("#popupFormA");
const popupFormB = new Popup("#popupFormB");
const popupFormC = new Popup("#popupFormC");

button1.addEventListener("click", () => {
  popupFormA.open();
});

button2.addEventListener("click", () => {
  popupFormB.open();
});

button3.addEventListener("click", () => {
  popupFormC.open();
});

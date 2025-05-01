const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = link;
  cardTitle.textContent = name;

  deleteButton.addEventListener('click', () => {
    const cardElement = deleteButton.closest('.places__item');
    cardElement.remove();
  });

  return cardElement;
}

initialCards.forEach(card => {
  const cardElement = createCard(card.name, card.link);
  placesList.append(cardElement);
});
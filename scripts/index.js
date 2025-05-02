const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function deleteCard(cardElement) {
  cardElement.remove();
}

function createCard(name, link, onDeleteCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = link;
  cardImage.alt = `Фотография места: ${name}`;
  cardTitle.textContent = name;

  deleteButton.addEventListener('click', () => onDeleteCard(cardElement));

  return cardElement;
}

initialCards.forEach(card => {
  const cardElement = createCard(card.name, card.link, deleteCard);
  placesList.append(cardElement);
});
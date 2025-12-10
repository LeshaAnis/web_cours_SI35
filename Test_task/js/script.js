document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.room-card[data-room="available"]');

  cards.forEach(card => {
    let isPending = false;

    const button = card.querySelector('.room-card__button');


    button.addEventListener('click', () => {
      isPending = true;
      card.classList.add('room-card--pending');
    });


    card.addEventListener('mouseleave', () => {
      if (isPending) {
        card.classList.add('room-card--selected');
        isPending = false;
      }
    });


    card.addEventListener('click', (e) => {
      if (card.classList.contains('room-card--selected')) {
        card.classList.remove('room-card--selected');
      }
    });
  });
});
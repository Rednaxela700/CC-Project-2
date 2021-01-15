import elementFactory from '../utils/elementFactory';
import ModalDetails from './ModalComponents/ModalDetails';
import ModalForm from './ModalComponents/ModalForm';

function ModalWindow(
  game,
  humanPlayerGame,
  computerPlayerGame,
  callbackToCloseModal,
) {
  // CREATE MAIN ELEMENTS
  const modal = elementFactory('div', { className: 'modal' });
  const modalContainer = elementFactory('div', {
    className: 'modal__container',
  });
  const modalHeader = elementFactory(
    'h2',
    { className: 'mode-info__heading modal__heading' },
    'Game Over',
  );
  const modalText = elementFactory(
    'p',
    { className: 'modal__text' },
    `The force is strong in you young Padawan! During 2 minutes you have answered ${humanPlayerGame.questionsGuessed} / ${humanPlayerGame.questionsAnswered} questions. And Computer quessed ${computerPlayerGame.questionsGuessed} / ${computerPlayerGame.questionsAnswered}.`,
  );

  // DETAILS SECTION
  const detailsContainer = ModalDetails(
    game,
    humanPlayerGame,
    computerPlayerGame,
  );

  // FORM
  const playerForm = ModalForm(callbackToCloseModal);
  const formButton = elementFactory(
    'button',
    {
      className: 'player-form__button button button--red',
      type: 'submit',
      form: 'player-data',
    },
    'May the force be with you!',
  );

  // JOIN TOGETHER
  modal.appendChild(modalContainer);
  modalContainer.append(
    modalHeader,
    modalText,
    detailsContainer,
    playerForm,
    formButton,
  );
  return modal;
}

export default ModalWindow;

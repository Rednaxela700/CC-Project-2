import getRandomInt from '../utils/getRandomInt';
import { Player } from './Player';
import isAnswerCorrect from './isAnswerCorrect';

class ComputerPlayer extends Player {
  getAnswer(answers, correctAnswer, callback) {
    if (answers.length === 0 || !correctAnswer) {
      throw new Error('There is no answers or correctAnswer');
    }
    const randomAnswer = answers[getRandomInt(0, 3)];
    const isCorrect = isAnswerCorrect(randomAnswer, correctAnswer);
    if (isCorrect) this.questionsGuessed += 1;
    this.questionsAnswered += 1;
    this.detailedAnswers.push({ answer: randomAnswer, isCorrect });
    if (typeof callback === 'function') callback(randomAnswer);
  }
}

function createComputerPlayer() {
  return new ComputerPlayer();
}

export default createComputerPlayer;

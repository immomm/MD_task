import readlineSync from 'readline-sync';
import { getRandomInt } from '../utils.js'; // Предполагается, что есть утилита для генерации случайных чисел

const playProgressionGame = () => {
    console.log('What number is missing in the progression?');

    for (let i = 0; i < 3; i++) {
        const start = getRandomInt(1, 10);
        const step = getRandomInt(2, 5);
        const length = getRandomInt(5, 11);
        const hiddenIndex = getRandomInt(0, length);

        const progression = Array.from({ length }, (_, index) => start + index * step);
        const correctAnswer = progression[hiddenIndex];
        progression[hiddenIndex] = '..';

        const userAnswer = readlineSync.question(`Question: ${progression.join(' ')}\nYour answer: `);
        
        if (parseInt(userAnswer, 10) === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again!`);
            return;
        }
    }

    console.log('Congratulations!');
};

export default playProgressionGame;

import readlineSync from 'readline-sync';
import { getRandomInt } from '../utils.js'; // Предполагается, что есть утилита для генерации случайных чисел

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const lcm = (a, b) => (a * b) / gcd(a, b);

const playLcmGame = () => {
    console.log('Find the smallest common multiple of given numbers.');

    for (let i = 0; i < 3; i++) {
        const num1 = getRandomInt(1, 100);
        const num2 = getRandomInt(1, 100);
        const num3 = getRandomInt(1, 100);
        const correctAnswer = lcm(lcm(num1, num2), num3);

        const userAnswer = readlineSync.question(`Question: ${num1} ${num2} ${num3}\nYour answer: `);
        
        if (parseInt(userAnswer, 10) === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again!`);
            return;
        }
    }

    console.log('Congratulations!');
};

export default playLcmGame;


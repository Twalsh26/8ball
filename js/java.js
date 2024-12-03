var userQuestion = "";
console.log(userName ? `${userName} asks: ${userQuestion}` : `You ask: ${userQuestion}`);

// var randomNumber = Math.floor(Math.random() * 8);


// var eightBall = ""

// if (randomNumber === 0) {
//     eightBall = 'It is certain';
//   } else if (randomNumber === 1) {
//     eightBall = 'It is decidedly so';
//   } else if (randomNumber === 2) {
//     eightBall = 'Reply hazy try again';
//   } else if (randomNumber === 3) {
//     eightBall = 'Cannot predict now';
//   } else if (randomNumber === 4) {
//     eightBall = 'Do not count on it';
//   } else if (randomNumber === 5) {
//     eightBall = 'My sources say no';
//   } else if (randomNumber === 6) {
//     eightBall = 'Outlook not so good';
//   } else if (randomNumber === 7) {
//     eightBall = 'Signs point to yes';
//   }

//   console.log(`The Magic Eight Ball says: ${eightBall}`);

// making it interactive
  const askButton = document.getElementById('askButton');
const userQuestionInput = document.getElementById('userQuestion');
const eightBallOutput = document.getElementById('eightBallOutput');
const userNameInput = document.getElementById('userName')

const responses = [
    'It is certain',
    'Yuh huh',
    'Sorry, say again?',
    'Ask again in 5',
    'Do not count on it',
    'GODS NO',
    'Nuh uh',
    'Signs point to yes'
  ];

  askButton.addEventListener('click', () => {
    const userQuestion = userQuestionInput.value.trim();
 
    if (userQuestion) {
        // Generate a random response
        const randomNumber = Math.floor(Math.random() * responses.length);
        const eightBallResponse = responses[randomNumber];

        eightBallOutput.textContent = `${eightBallResponse}`;
    } else {
      // Handle empty question
      eightBallOutput.textContent = 'Please ask a question!';
    }
  });

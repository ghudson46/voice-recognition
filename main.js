const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = ["Don't talk to me loser", "Wouldn't you like to know!", "I'm doing about as well as an artificially intelligent friend, designed by an idiot, can do", "I don't have to listen to you", "hahaha you're such a jabroni!"];

const weather = ["It is hot as balls outside", "Why does it matter? You are a loser who has no friends and never leaves the house", "Look outside, lazy"];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log('voice is activated, you can speek');
};

recognition.onresult = (event) => {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;

  content.textContent = transcript;

  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

const readOutLoud = (message) => {
  const speech = new SpeechSynthesisUtterance();

  speech.text = 'I dont know what you said?'

  if (message.includes('how are you')) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  } 

  speech.pitch = 1;
  speech.volume = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}


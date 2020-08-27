const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

try{

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

  speech.text =  "I'm sorry. My programmer is not very smart and does not know how to teach me to respond to that. Blame Garrett for my inadequacy";

  if(message.includes('How are you' || 'Hey' || 'Whats up?' || 'Hello' || 'Hi' || 'Whats going on?')) {
    let finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  } else if (message.includes('How is the weather' || 'What is the weather outside?' || 'Weather' || 'What is the temperature outside?' || 'is it raining?')) {
    let finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  }


  speech.pitch = 1;
  speech.volume = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}



}catch(e){
  alert(e);
}
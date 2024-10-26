const voiceOptionHTML = document.querySelector("#voice-option");
const textMessageHTML = document.querySelector("#text-message");
const rateSliderHTML = document.querySelector("#rate");
const pitchSliderHTML = document.querySelector("#pitch");
const speakBtnHTML = document.querySelector("#speak");
const stopBtnHTML = document.querySelector("#stop");

const message = new SpeechSynthesisUtterance(textMessageHTML.value);
let voices = ["male", "female"];

function populateVoices(){
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        voiceOptionHTML.innerHTML += 
        `
            <option value="${voice.name}"> ${voice.name}</option>
        `
    });
     
}
populateVoices()
speakVoice()

function setVoices(){
    voices.forEach(voice => {
        if(voiceOptionHTML.value === voice.name){
            message.voice = voice;
        }
    });
}

function setRate(){
    message.rate = rateSliderHTML.value;
}

function setPitch(){
    message.pitch = pitchSliderHTML.value;
}

function setText(){
    message.text = textMessageHTML.value;
}

function stopVoice(){
    speechSynthesis.cancel();
}

function speakVoice(){
    speechSynthesis.speak(message);
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);

voiceOptionHTML.addEventListener("change", setVoices);

rateSliderHTML.addEventListener("change", setRate);

pitchSliderHTML.addEventListener("change", setPitch);

textMessageHTML.addEventListener("keyup", setText);

stopBtnHTML.addEventListener("click", stopVoice);

speakBtnHTML.addEventListener("click", speakVoice);
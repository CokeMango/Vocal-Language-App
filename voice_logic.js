function vocallogic() {
    translation.innerHTML = '';
    console.log('Clicked')
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'es-US';
    recognition.addEventListener('result', e=> {
        const transcript = Array.from(e.results)
        .map(result =>result[0])
        .map(result => result.transcript)

        
        translation.innerHTML = transcript;
        console.log(transcript);
        
    })


    
    if(speech == true){
        recognition.start();

    }


}







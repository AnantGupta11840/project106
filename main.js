Pridection_1=""
pridection_2=""
Webcam.set({
    width: 350,
    heigth:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHtml='<img id="captured_image" src="'+data_uri+'"/>';
    }
    );
}

console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fViCh55Fc/model.json',ModelLoaded);

function ModelLoaded()
{
    console.log('Model Loaded!');
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="the first Pridection is"+Pridection_1;
    speak_data_2="the second Pridection is"+Pridection_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
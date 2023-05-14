//Declarative Variables



var score = 0;
var round = 1;

gif = "<div class='loader'></div>";
     //word lists
     const english = [
          'hello',
          'I',
          "let's go",
          'what',
          'he',
          'was',
        
          
          ];
      
          const spanish = [
          'hola',
          'yo',
          'vamos',
          'qué',
          'el',
          'era',
        

      
          ];

          const greetings = [
            'Nice',
            'Great Job!',
            'Keep it up!',
            'Very Good',
            'Looking good',
            'Next ones Easy!',
            'Superb',
            '😃',
            'So good',
            'Brilliant',
            'Never Gets old',
            'Buttery',
            'Excellent',
            'WOW!'


          ]
//Shuffling Function


function shuffle(obj1, obj2) {
var index = obj1.length;
var rnd, tmp1, tmp2;

while (index) {
rnd = Math.floor(Math.random() * index);
index -= 1;
tmp1 = obj1[index];
tmp2 = obj2[index];
obj1[index] = obj1[rnd];
obj2[index] = obj2[rnd];
obj1[rnd] = tmp1;
obj2[rnd] = tmp2;
}
}

//Shuffle for greetings
function shuffle2(obj3) {
    var index = obj3.length;
    var rnd, tmp3;
    
    while (index) {
    rnd = Math.floor(Math.random() * index);
    index -= 1;
    tmp3 = obj3[index];
    obj3[index] = obj3[rnd];
    obj3[rnd] = tmp3;
    }
    }

// Used like so

shuffle(english, spanish);

shuffle2(greetings);

i = 0;
var num = 0;
var cash = 0;

//End Game Function
function nextPage() {
    window.location.href = "game_End.html"
}

//Random Compliments
function random_Compliments() {
if (cash > greetings.length) {
    cash = 0;
}

else { 
    cash = cash + 1;
}

};
//More Declarative Values

let sp = spanish[num];
let en = english[num];



//Setting the first English Word
document.getElementById('system_Text_Ports').innerText = en;    

//Declaring the users Input
var input = document.getElementById("translation");

//Verification System
function logic() {
    //Checking if game is over
    if (english.length > round) {
        
        console.log('Clicked')

        let sp = spanish[num];
       
        let userType = document.getElementById("translation").innerText;
        
        userType = userType.toLowerCase();
        
        console.log("This is what the user said: " + userType);
        //Clearing the input value box
        
        
        //document.getElementById('checkTxt').innerHTML = gif;
        
        
            
       
        
        
        //Correct
        if (userType === sp)  {
            random_Compliments();
            let random_Compliment = greetings[cash];

            document.getElementById('spanish_Helper_Text').innerHTML = random_Compliment;

            document.getElementById('system_Text').style.background = "#4285F4";
            //document.getElementById('translationOutputDiv').innerHTML = "Correct"
            //document.getElementById('spanish_Helper').innerHTML = "";
            console.log("This is word " + num);
            num = num + 1;

            const progressBar = document.getElementsByClassName('progress-bar')[0]
           
                const computedStyle = getComputedStyle(progressBar)
                const width = parseFloat(computedStyle.getPropertyValue
                ('--width')) || 0
            progressBar.style.setProperty('--width', width + (100 / spanish.length))

            
            
            let en = english[num];
            document.getElementById('system_Text_Ports').innerHTML = en;
            
            document.getElementById('translation').textContent = '';
            //console.log("This is usertype " + userType);
            console.log("Answer correct");
            
            //What round you are on
            round = round + 1;
            console.log("This is Round: " + round);
        }
        //Incorrect
        else {
            document.getElementById('system_Text').style.background = "red";

           
            //document.getElementById('translationOutputDiv').innerHTML = "Try Again"
            document.getElementById('spanish_Helper_Text').innerHTML = sp;
            //document.querySelector("form").style.padding = "240px 0px 0px 0px";
            //console.log("This is word " + num)z;
            //console.log("This is usertype " + userType);
            console.log("Incorrect");

            //Counts how many you got wrong
            score = score + 1;
            console.log("round: " + round);
            console.log("score: " + score);
        }
    
    
//Game over and redirect system
} else {
    console.log('GAME OVER');
    nextPage();
    var finalscore = english.length - score;

    finalscore = finalscore.toString = (finalscore + " / " + english.length);
    //Storing the final-score to the server and then transporting to the EndSpanish page.
    sessionStorage.setItem("score", finalscore);
    alert("The game is over " + "Your score was: " + (finalscore));
    
} 
}



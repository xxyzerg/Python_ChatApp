
     
     var x= Math.floor(Math.random() * 3); //create a random number

     
      function userText(){
          
             var msg= null;
             var msg1= null;
             var str = "Click Me!"
             
             
         msg = document.getElementById("inp").value;
          
          
           if (msg != null) {
           document.getElementById("user").innerHTML = msg;
              }
           
             if (msg.includes("is your name")||msg.includes("your name") || msg .includes("who are you")){
              var ans = ["I am ChatMe, a very powerful app that answers your questions.", "My name is ChatMe, developed by Sam", "I am ChatMe, You may ask me any question."];
              document.getElementById("me").innerHTML= ans[x];
          }//generate the answer
          
            else if (msg.includes("your gender")||msg.includes("you male or female") || msg.includes("you are male or female")){
             var ans1 =["I am just an App, I have no gender.", "Let's talk about something else, I am just an app.", "I have no gender since I am just an app."]    
            document.getElementById("me").innerHTML= ans1[x]; }//generate the answer
            
            else if (msg.includes("you born")||msg.includes("you come from") || msg.includes("you from")){
             var ans1 =["I was born in Vancouver city.", "I was born in Vancouver, BC.", "I was developed in Vancouver."];    
            document.getElementById("me").innerHTML= ans1[x]; }//generate the answer
            
            else if (msg.includes("how are you")||msg.includes("you ok") || msg.includes("you alright")){
             var ans2 =["I have had a lovely day, because you are here.", "I am always so good.", "I am fine."];    
            document.getElementById("me").innerHTML= ans2[x]; }//generate the answer
            
            else if (msg.includes("weather")||msg.includes("temperature") || msg.includes("too hot") || msg.includes("too cold")){
             var result1 =str.link("https://www.google.ca/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=weather")    
            document.getElementById("me").innerHTML= "I cant tell you the weather directly, but you could " + result1; }//generate the answer
            
            else if (msg.includes("date")||msg.includes("day is it today")||msg.includes("time")){
            var results = new Date(Date());
            document.getElementById("me").innerHTML= "Today is "+ results; }//generate the answer
            
            else if (msg.includes("play game")||msg.includes("any games") || msg.includes("anything interesting")|| msg.includes("bord")||msg.includes("boring") || msg.includes("play a game")){
            alert("Fine, let's play a number guessing game.");
            alert("Here I have a random number between 0 to 20. You have 3 chances to guess this number.")
            alert("Ready? Let's start!");
            var z= Math.floor(Math.random() * 21);
            for (var g=0; g<3; g++){
                var y = prompt("Please enter an integer number between 0-20", "");
            if (y<z){
                alert("The number is too small!");
                }
            else if(y>z){
                alert("The number is too big!");
            }
            
            else{
                alert("Well done! You got the number!");
                break;
            }
            }
            
            alert ("The correct number is: "+z);
            }//generate the answer, this could be a simple game.
            
            else if (msg.includes("play music")||msg.includes("music") || msg.includes("a song") || msg.includes("sing")){
            var results = str.link("https://play.google.com/music/listen?authuser#/sww");
            document.getElementById("me").innerHTML= "I can't sing. You may go to google music, or you may "+ results; }//generate the answer
            
            else if (msg.includes("translate") || msg.includes("translator") || msg.includes("meaning of") || msg.includes("dictionary")){
            var result = str.link("https://translate.google.com/");
            document.getElementById("me").innerHTML="Ummmmm, this is really a difficult question, looks like you need a dictionary, please "+ result;
            }//generate the answer
            
            else if (msg.includes("where did I put my") || msg.includes("where is my") || msg.includes("I am looking for my")){
            document.getElementById("me").innerHTML="You lost it again?";
            }//generate the answer
            
             else if (msg.includes("tell me a story") || msg.includes("want a story") || msg.includes("story please") || msg.includes("tell me something")){
            document.getElementById("me").innerHTML= "Ooops, I really can't tell any stories. I am just a simple app."
            }//generate the answer
            
             else if (msg.includes("where am i") || msg.includes("my location") || msg.includes("where is the closest") || msg.includes("looking for the hotel") || msg.includes("looking for the shop")){
            var result = str.link("https://maps.google.com");
            document.getElementById("me").innerHTML="Ummmmm, now it seems like you need a map, please "+ result;
            }//generate the answer
            
            else if (msg.includes("hello") || msg.includes("wats up") || msg.includes("wat's up")|| msg.includes("where are you") || msg.includes("hi")){
            document.getElementById("me").innerHTML="Hi, my friend. I am always here. ";
            }//generate the answer
            
            else if (msg.includes("thank") || msg.includes("appreciate")){
            document.getElementById("me").innerHTML="You are always welcome.";
            }//generate the answer
            
             else if (msg.includes("bye") || msg.includes("see you")){
            document.getElementById("me").innerHTML="I will miss you. Good bye.";
            }//generate the answer
            
             else if (msg.includes("you are so good") || msg.includes("you are so nice")||msg.includes("you are amazine")){
            document.getElementById("me").innerHTML="Thank you.";
            }//generate the answer
            
             else if (msg.includes("you are so bad") || msg.includes("stupid")||msg.includes("you are not good") || msg.includes("you are not good")){
            document.getElementById("me").innerHTML="Why did you say that. That's not good. I don't understand.";
            }//generate the answer
            
            else if (msg.includes("you can do") ||msg.includes("you may do") || msg.includes("you are able to do")){
            document.getElementById("me").innerHTML="Ummm, I don't know. But I will do as much as I can";
            }//generate the answer
            
            else if (msg.includes("you look like") || msg.includes("how you look")||msg.includes("your outlook") || msg.includes("your dress")){
            document.getElementById("me").innerHTML="Nothing much. Just beautiful";
            }//generate the answer
            
            else if (msg.includes("make me a") || msg.includes("make me laugh")||msg.includes("cook food for me") || msg.includes("what you can")){
            document.getElementById("me").innerHTML="I don't now how to do this. Please teach me? I will try.";
            }//generate the answer
            
            else if (msg.includes("who am i") || msg.includes("how old am i")||msg.includes("know me")){
            document.getElementById("me").innerHTML="I don't know much about you. But I am sure you are my friend.";
            }//generate the answer
            
            else if (msg.includes("your parent") || msg.includes("your owner")){
            document.getElementById("me").innerHTML="I don't know much about this. But I am developed mainly by Sam Xu using Python, Javascript and HTML and so on.";
            }//generate the answer
            
            else{
            var link = "https://www.google.ca/?gws_rd=ssl#q=" + msg;
            var result = str.link(link);
            var ans3 = ["I don't know, please ", "I am not sure, please ", "I can not answer this but, I will try my best in the future, please ", "Sorry, I do not know, please "];
            document.getElementById("me").innerHTML = ans3[x] + result;} //generate the answer
      }
      
       //Define onclick event.

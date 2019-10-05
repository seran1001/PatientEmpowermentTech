

var questions = [
    
{
    prompt: "Is there a correlation between diet and diabetes?\n(a) True\n(b) False",
    answer: "a"
},
{
    prompt : "Is there a correlation between diet and diabetes?\n (a)True \n (b)False",
    answer: "a"
},
{
    prompt : "Is there a correlation between diet and diabetes?\n (a)True \n (b)False",
    answer: "a"
},
{
    prompt : "Is there a correlation between diet and diabetes?\n (a)True \n (b)False",
    answer: "a"
},
{
    prompt : "Is there a correlation between diet and diabetes?\n (a)True \n (b)False",
    answer: "a"
},
{
    prompt : "Is there a correlation between diet and diabetes?\n (a)True \n (b)False",
    answer: "a"
}
]
var score = 0;
document.write(questions);

for (var i =0; i<questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer) {
        score++;
        alert("Correct!");

    }else {
        alert("wrong!");
    }
}

alert("You got " + score + "/"+questions.length);

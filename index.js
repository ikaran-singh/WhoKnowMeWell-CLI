var readlineSync=require("readline-sync");
var userName=readlineSync.question("Your name please: ");
console.log("-----------------------")
console.log("\nHey "+userName+". Let's see how much You Know Me!\n")

var highScore = ["Salman",4]

var score=0;
function quiz(ques, ans) {
  var currAns = readlineSync.question(ques," ");

  if(currAns===ans){
    score=score+1;
    console.log("Glad you know this! 😃✨")
  }
  else{
    console.log("Oops! You got this one wrong 😢")
  }
  console.log("-----------------------")
}


var questions = [{ques: "1. Who has had the biggest impact on my life?\n\tA. Father\n\tB. Mother\n\tC. APJ Abdul Kalam\n\tD. Elon Musk\nYour answer(choose one option):",ans: "B"},{ques: "2. What is my favorite drink?\n\tA. Coke\n\tB. Mojito\n\tC. Scotch\n\tD. Beer\nYour answer(choose one option):",ans: "A"},{ques: "3. How many kids do I want?\n\tA. 3\n\tB. 4\n\tC. 1\n\tD. 2\nYour answer(choose one option):",ans: "D"},{ques: "4. What is my favorite movie?\n\tA. ZNMD\n\tB. YJHD\n\tC. The Terminal\n\tD. Harry Potter\nYour answer(choose one option):",ans: "C"},{ques: "5. Do I have any addictions?\n\tA. NO!\n\tB. Yes Ofcourse, Phone\n\tC. Yes, RPG Games\n\tD. No, just sleep\nYour answer(choose one option):",ans: "D"}];

for(var i=0;i<questions.length;i++){
  var curr=questions[i];
  quiz(curr.ques,curr.ans);
}
console.log("You Scored: "+score,"/5")

console.log("-----------------------")

if(score>highScore[1]){
  console.log("Wohooo! 🎉 You made it to the High Scorers (which means you know me very well 😉).");
  console.log(`Previous High Scorer:-\nName:${highScore[0]}\nScore:${highScore[1]}`);
  console.log("-----------------------");
  highScore[0]=userName;
  highScore[1]=score;
}

console.log(`HighScore:-\nName: ${highScore[0]} \nScore:${highScore[1]}`);
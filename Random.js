const quotes = ["Every situation in life is temporary. So, when life is good, make sure you enjoy and receive it fully. And when life is not so good, remember that it will not last forever and better days are on the way.","Since you get more joy out of giving joy to others, you should put a good deal of thought into the happiness that you are able to give.","You are never too old to set another goal or to dream a new dream.","I won't predict anything historic. But nothing is impossible.","The best time to plant a tree was 20 years ago. The second best time is now.","Whatever you are, be a good one","People who wonder if the glass is half empty or full miss the point. The glass is refillable.","We are what we repeatedly do. Excellence, then, is not an act, but a habit.","Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.","You alone are enough. You have nothing to prove to anybody.","Keep your face always toward the sunshine—and shadows will fall behind you.","Extraordinary things are always hiding in places people never think to look.","Setting goals is the first step in turning the invisible into the visible.","You can have it all. Just not all at once.","Say something positive, and you’ll see something positive.","All you need is the plan, the road map, and the courage to press on to your destination.","Train your mind to see the good in every situation.","If you can stay positive in a negative situation, you win.","Stay positive. Better days are on their way.","Only in the darkness can you see the stars.","A goal is not always meant to be reached, it often serves simply as something to aim at."];

const bttn = document.getElementById("clickme");
const resetBtn = document.getElementById("reset");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random()*quotes.length);
  const randomQuote= quotes[randomIndex];
  document.querySelector(".t4").textContent = `: ${randomQuote}`;
}
function resetQoute(){
  document.querySelector(".t4").textContent="";
}
bttn.addEventListener("click",generateRandomQuote);
resetBtn.addEventListener("click",resetQoute);
var factList = [
  "Women hold 32.8% of entry-level positions in computer science-related jobs. Just 10.9% of those holding CEO or senior leadership roles are women.",/*0*/
  "The pandemic worsened many of the significant challenges that women face, with over 50% of women reporting difficulties due to pandemic workplace changes.",/*1*/
  "Representation of women in big tech fell by 2.1% in 2022.",/*2*/
  "In the mid-1980s, 37% of computer science majors were women; in 2012, 18%",
  "Women only earn about 12% of computer science degrees nationally.",
  "Facebook CEO Sheryl Sandberg, Youtube CEO Susan Wojcicki, and Yahoo! CEO Marissa Mayer were all listed as some of the most powerful Women in the Tech industry by Forbes Magazine in 2015.",
];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
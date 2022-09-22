var emoji1 = String.fromCodePoint(0x1F621)
var emoji2 = String.fromCodePoint(0x1F9DA)
var emoji3 = String.fromCodePoint(0x1F9D9)
var emoji4 = String.fromCodePoint(0x1F9DB)
var emoji5 = String.fromCodePoint(0x1F9DC)
var emoji6 = String.fromCodePoint(0x1F9DD)
var emoji7 = String.fromCodePoint(0x1F9DE)
var emoji8 = String.fromCodePoint(0x1F9DF)
var emoji9 = String.fromCodePoint(0x1F483)
var emoji10 = String.fromCodePoint(0x1F496)
const arrayEmoji = [emoji1, emoji2,emoji3, emoji4,emoji5, emoji6,emoji7, emoji8,emoji9, emoji10]

const btnEl = document.querySelector("loop")
const emojiContainer = document.createElement('ul')
arrayEmoji.forEach(myFunction)

function howMany(selectObject) {
     let numberSelected = 0;
     for (let i = 0; i < selectObject.options.length; i++) {
       if (selectObject.options[i].selected) {
         numberSelected++;
       }
     }
     return numberSelected;
   }
   
   const btn = document.getElementById('btn');
   
   btn.addEventListener('click', () => {
     const musicTypes = document.selectForm.musicTypes;
     console.log(`You have selected ${howMany(musicTypes)} option(s).`);
   });

   
function myFunction(item, index, arr) {
     arr[index] = item 
     console.log(arr[index])
   }
alert("Working! "+ arrayEmoji);
for (let index = 0; index < arrayEmoji.length; index++) {   
     const element = arrayEmoji[index];
     const emojiLi = document.createElement('li')
     emojiLi.classList.add('emoji')
     emojiLi.style.fontSize = "20px" 
     emojiLi.innerText = `${element}  this is subject!  `
     emojiContainer.appendChild(emojiLi)
     if(index %2 === 0){
          emojiLi.style.color = '#e9ccce';
          emojiLi.innerText = `${element}  this is number even! DING! DING! ! DING!`
     emojiContainer.appendChild(emojiLi)

     }
}
document.querySelector('p').appendChild(emojiContainer)




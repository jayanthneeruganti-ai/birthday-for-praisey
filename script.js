
const data=[
["Sun","orange","Just like the Sun, I'll always fill your life with warmth, comfort and light even on your darkest days."],
["Mercury","gray","I'll never stop finding reasons to make you smile."],
["Venus","#c9a46b","You'll always be the brightest thing in my life."],
["Earth","#2f7cff","You'll always feel like home to me."],
["Mars","#b83b22","Life with me will never be boring."],
["Jupiter","#d0a26e","I'll always stand beside you and protect your happiness."],
["Saturn","#d9c08a","I'll surround you with love, care and affection."],
["Uranus","#8fe7e7","I'll love every little thing that makes you unique."],
["Neptune","#315cff","I'll always listen to your dreams and feelings."],
["Pluto","#bda38b","No matter what happens, you'll always be special to me."]
];
let i=0;
const intro=document.getElementById("intro");
const journey=document.getElementById("journey");
const finalPage=document.getElementById("final");
document.getElementById("start").onclick=()=>{intro.classList.remove("active");journey.classList.add("active");show();}
function show(){
planetName.textContent=data[i][0];
planetMsg.textContent=data[i][2];
planetVisual.style.background=data[i][1];
}
next.onclick=()=>{
i++;
if(i<data.length) show();
else{journey.classList.remove("active");finalPage.classList.add("active");}
}
yes.onclick=()=>{
result.innerHTML="Thank you kothiiiii 🥺❤️<br>Best co-pilot in the universe 🚀✨";
}
no.onmouseover=()=>{
no.style.position="absolute";
no.style.left=Math.random()*80+"%";
no.style.top=Math.random()*80+"%";
}

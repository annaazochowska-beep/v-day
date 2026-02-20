const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// uciekające NIE
noBtn.addEventListener("mouseover", () => {
const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

noBtn.style.position = "absolute";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
});

// serca motyle róże
const emojis = ["❤️","🦋","🌹"];

function dropEmoji() {
const el = document.createElement("div");
el.className="emoji";
el.innerText = emojis[Math.floor(Math.random()*emojis.length)];
el.style.left = Math.random()*100 + "vw";
document.body.appendChild(el);

setTimeout(()=>el.remove(),5000);
}

setInterval(dropEmoji,300);

// klik TAK
yesBtn.addEventListener("click", ()=>{
document.body.innerHTML = `
<h1 style="color:#ff1493;text-align:center;margin-top:40vh;">
Wiedziałam Wojtek 😌💍<br><br>
Kocham Cię ❤️
</h1>
`;
});

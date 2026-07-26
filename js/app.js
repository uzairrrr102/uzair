/* ==========================================
   A Little Universe - app.js
   Version 1
========================================== */

// ---------- Redirect Button ----------
const startBtn = document.getElementById("start");

if (startBtn) {
    startBtn.addEventListener("click", () => {

        startBtn.innerHTML = "Opening... ✨";
        startBtn.disabled = true;

        document.body.style.transition = "opacity .8s";
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "letter.html";
        }, 800);

    });
}


// ---------- Create Twinkling Stars ----------

const starsContainer = document.querySelector(".stars");

for(let i=0;i<180;i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    star.style.animationDelay =
        Math.random()*5 + "s";

    star.style.animationDuration =
        2 + Math.random()*4 + "s";

    star.style.width =
        1 + Math.random()*3 + "px";

    star.style.height =
        star.style.width;

    starsContainer.appendChild(star);

}



// ---------- Falling Flowers ----------

const petals = document.querySelector(".petals");

function createPetal(){

    const flower = document.createElement("div");

    flower.className="petal";

    const emoji = [
        "🌸",
        "🌷",
        "🌼",
        "💮"
    ];

    flower.innerHTML =
        emoji[Math.floor(Math.random()*emoji.length)];

    flower.style.left =
        Math.random()*100 + "vw";

    flower.style.animationDuration =
        5 + Math.random()*5 + "s";

    flower.style.fontSize =
        18 + Math.random()*15 + "px";

    petals.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },10000);

}

setInterval(createPetal,700);




// ---------- Mouse Sparkles ----------

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>0.4)return;

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✨";

    sparkle.style.left=e.clientX+"px";
    sparkle.style.top=e.clientY+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },3000);

});



// ---------- Floating Background ----------

let angle=0;

function animateBackground(){

    angle += 0.003;

    document.body.style.backgroundPosition =
        Math.sin(angle)*50+"px "+
        Math.cos(angle)*50+"px";

    requestAnimationFrame(animateBackground);

}

animateBackground();



// ---------- Fade In ----------

window.onload=()=>{

    document.body.style.opacity="1";

}



// ---------- Keyboard Shortcut ----------

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        if(startBtn){

            startBtn.click();

        }

    }

});




// ---------- Console Message ----------

console.log(
`✨
Welcome Developer ❤️

Thanks for making something beautiful.

Have an amazing day.
`);
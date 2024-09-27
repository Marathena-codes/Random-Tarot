let tarot = ["10 of Pentacles: Dale a tu cuerpo alegria, Macarena.", 
    "Nine of Swords: Help, Im actually trapped in the matrix.",
    "The Hanged Man: (Calmly)There is a shark behind you.",
    "The Fool: Do you know the muffin man?", 
    "5 of Pentacles: If 2+2 is 5, can you pay for my legos?",
    "Three of Pentacles: All we need is money(and love, ofc).", 
    "The Hierophant: It's dangerous to go alone... Take this...",
    "Ace of Wands: Road work ahead? I sure hope it does."
    ];

let button = document.getElementById("button");
let luck = document.getElementById("ocult-paragraph");

function cards(){
    let call = Math.floor(Math.random() * tarot.length);
    return tarot[call];
};

function click(){
    luck.innerHTML = cards();
    button.innerHTML = "Thanks!";
    button.removeEventListener('click', click);
};
button.addEventListener('click', click);


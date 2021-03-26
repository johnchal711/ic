let userimput;
let generatorimput;

//  Wine Review Generator,The world's definitive database of wine reviews. 
//The search interface isn't super-convenient, but keep hitting the button and you should eventually 
//get to the particular wine that you're interested in. Your tastes may differ from the reviewer's.
//https://phrasegenerator.com/wine
let myquotea = 
[
[   'The 2004 Cabernet Sauvignon from Gonzales Winery ',
    'Montecello Winery',
    'Skunk Meadows Vineyards ',
    'Champs de Martine',
    'The 1993 Pinot Grigio',
    
],
[   ' fuses indigestible musk flavors with',
    ' incorporates uninhibited vinyl undertones and',
    ' mixes libido-boosting velvet essences and',
    ' intertwines grimy vodka elements and',
    ' from Fiat Bros Winery coalesces brazen cactus midtones with',
   

],
[
    ' a krispy pheremone aroma.',
    ' a fervent almond perfume in their 1999 Bordeaux.',
    ' a rough rasberry flavor in their 1998 Pinot Noir.',
    ' a torrid Kandy Korn flavor in their 2006 Zinfandel.',
    ' a watery oatmeal aftertaste.',
    ' a embittered macademia nut essence.',
    ' a ambitious lavender bouquet',
    ' a mildewed strawberry perfume.',

],
];




//  Generator 2, Catchy Headline Generator,Generates random clickbait titles for your blog or magazine articles. 
//Just add hastily-written filler underneath.
let myquoteab = [
  [
    '12',
    '6',
    '5',
    '20',
    '15'],
  [
    ' Surprising Secrets That Make CEOs Smarter.',
    ' Jaw-Dropping Facts That Will Make Your Therapist Stronger.',
    ' Awesome Tree Climbing Secrets From Arnold Schwarzenegger.',
    ' Ski Jumping Secrets From Warren Buffet.',
    ' Shocking Things Psychiatrists Are Hiding From You.',
],
];

//button control

function getmenu(button) {
		menuimput=button.value
	if (menuimput == 'New') {
           location.reload();
        } else if (menuimput == 'Exit') {
          window.top.close();
        
        }

         };


function getValue(button) {
    userimput = button.value;
};

function getQuote(button) {
    generatorimput = button.value;
    document.getElementById('quote').innerHTML = "";
     for (var i = 0; i < userimput; i++) {
        if (generatorimput == 1) {
            Maker(myquotea);
        } else if (generatorimput == 2) {
            Maker(myquoteab);
        }   
    };


// Quote generator Process

function Maker(arr) {
    quoteTwo = "";
    quoteTwo = arr[0][Math.floor(Math.random()*arr[0].length)];
    quoteTwo += arr[1][Math.floor(Math.random()*arr[1].length)];

    if(arr.length == 3) {
        quoteTwo += arr[2][Math.floor(Math.random()*arr[2].length)];
    }
    printInside(quoteTwo);
};


function printInside(text) {
    let newParagraph = document.createElement('p');
    newParagraph.className = "new-paragraph";
    newParagraph.innerText = text;
    document.getElementById('quote').appendChild(newParagraph);
       
};




};
       











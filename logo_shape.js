
var colorPalette = [
    {
        'r': '#071A52',
        'c': '#086972',
        't': '#17B978',
        'b': '#A7FF83',
    },
    {
        'r': '#A9EEE6',
        'c': '#FEFAEC',
        't': '#F9A1BC',
        'b': '#625772',
    },
    {
        'r': '#155263',
        'c': '#FF6F3C',
        't': '#FF9A3C',
        'b': '#FFC93C',
    },
    {
        'r': '#07689F',
        'c': '#A2D5F2',
        't': '#FAFAFA',
        'b': '#FF7E67',
    },
    {
        'r': '#F67280',
        'c': '#C06C84',
        't': '#6C5B7B',
        'b': '#355C7D',
    },
    {
        'r': '#222831',
        'c': '#393E46',
        't': '#00ADB5',
        'b': '#EEEEEE',
    },
    {
        'r': '#F3F1F5',
        'c': '#F0D9FF',
        't': '#BFA2DB',
        'b': '#7F7C82',
    },
    {
        'r': '#420516',
        'c': '#7D1935',
        't': '#B42B51',
        'b': '#E63E6D',
    }
];

// var rotationB = 0;
var rotationF = 0;
var rotationF1 = 0;
var rotationF2 = 0;
var rotationF3 = 0;
var rotationF4 = 0;


// assigning color to shapes 
var rect = document.querySelector(".rectangle");
var circ = document.querySelector(".circle");
var text = document.querySelector(".intext");

var rect1 = document.querySelector(".rectangle1");
var circ1 = document.querySelector(".circle1");
var text1 = document.querySelector(".intext1");

var rect2 = document.querySelector(".rectangle2");
var circ2 = document.querySelector(".circle2");
var text2 = document.querySelector(".intext2");

var rect3 = document.querySelector(".rectangle3");
var circ3 = document.querySelector(".circle3");
var text3 = document.querySelector(".intext3");

var rect4 = document.querySelector(".rectangle4");
var circ4 = document.querySelector(".circle4");
var text4 = document.querySelector(".intext4");

// onclick
function generateLogo() {
    var i = Math.floor(Math.random() * 8);
    rect.style.fill = colorPalette[i].r;
    circ.style.fill = colorPalette[i].c;
    text.style.fill = colorPalette[i].b;

    var i1 = Math.floor(Math.random() * 8);
    rect1.style.fill = colorPalette[i1].r;
    circ1.style.fill = colorPalette[i1].c;
    text1.style.fill = colorPalette[i1].b;

    var i2 = Math.floor(Math.random() * 8);
    rect2.style.fill = colorPalette[i2].r;
    circ2.style.fill = colorPalette[i2].c;
    text2.style.fill = colorPalette[i2].b;

    var i3 = Math.floor(Math.random() * 8);
    rect3.style.fill = colorPalette[i3].r;
    circ3.style.fill = colorPalette[i3].c;
    text3.style.fill = colorPalette[i3].b;

    var i4 = Math.floor(Math.random() * 8);
    rect4.style.fill = colorPalette[i4].r;
    circ4.style.fill = colorPalette[i4].c;
    text4.style.fill = colorPalette[i4].b;

    // rotation for shape placed at back 
    var generateBDegree = Math.floor(Math.random() * 46);
    rotationF += generateBDegree;

    var generateBDegree1 = Math.floor(Math.random() * 46);
    rotationF1 += generateBDegree1;
    
    var generateBDegree2 = Math.floor(Math.random() * 46);
    rotationF2 += generateBDegree2;
    
    var generateBDegree3 = Math.floor(Math.random() * 46);
    rotationF3 += generateBDegree3;

    var generateBDegree4 = Math.floor(Math.random() * 46);
    rotationF4 += generateBDegree4;

    rect.style.transformOrigin = "50 50";
    rect.style.transform = 'rotate(' + generateBDegree + 'deg)';

    rect1.style.transformOrigin = "50 50";
    rect1.style.transform = 'rotate(' + generateBDegree1 + 'deg)';

    rect2.style.transformOrigin = "50 50";
    rect2.style.transform = 'rotate(' + generateBDegree2 + 'deg)';

    rect3.style.transformOrigin = "50 50";
    rect3.style.transform = 'rotate(' + generateBDegree3 + 'deg)';

    rect4.style.transformOrigin = "50 50";
    rect4.style.transform = 'rotate(' + generateBDegree4 + 'deg)';

    // generating random value for border radius
    var borderRad = Math.floor(Math.random() * 21);

    // setting border radius for x and y axis
    if (generateBDegree % 2 != 0 && generateBDegree1 % 2 != 0 && generateBDegree2 % 2 != 0 && generateBDegree3 % 2 != 0 && generateBDegree4 % 2 != 0 ) {
        borderRad = 0;
    }
    
    rect.style.rx = borderRad;
    rect.style.ry = borderRad;

    rect1.style.rx = borderRad;
    rect1.style.ry = borderRad;

    rect2.style.rx = borderRad;
    rect2.style.ry = borderRad;

    rect3.style.rx = borderRad;
    rect3.style.ry = borderRad;

    rect4.style.rx = borderRad;
    rect4.style.ry = borderRad;
    
}

function resetLogo() {

    //removing colors from rectangle
    rect.style.fill = "transparent";
    rect1.style.fill = "transparent";
    rect2.style.fill = "transparent";
    rect3.style.fill = "transparent";
    rect4.style.fill = "transparent";

    //removing colors from circle
    circ.style.fill = "transparent";
    circ1.style.fill = "transparent";
    circ2.style.fill = "transparent";
    circ3.style.fill = "transparent";
    circ4.style.fill = "transparent";

    //removing style from text
    text.style.fill = "black";
    text1.style.fill = "black";
    text2.style.fill = "black";
    text3.style.fill = "black";
    text4.style.fill = "black";

    //removing border radius from rectangle
    rect.style.rx = "";
    rect.style.ry = "";
    rect1.style.rx = "";
    rect1.style.ry = "";
    rect2.style.rx = "";
    rect2.style.ry = "";
    rect3.style.rx = "";
    rect3.style.ry = "";
    rect4.style.rx = "";
    rect4.style.ry = "";

    //removing angle of rotation from rectangle
    rect.style.transform = "";
    rect1.style.transform = "";
    rect2.style.transform = "";
    rect3.style.transform = "";
    rect4.style.transform = "";
}

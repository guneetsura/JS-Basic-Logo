var colorPalette = [{
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

//rotations reset
const rotations = [];
for (let i = 0; i < 5; ++i) {
    rotations[i] = 0;
}

const generateBDegrees = [];
const rects = [];
const circs = [];
const texts = [];

// assigning color to shapes 
for (let i = 0; i < 5; ++i) {
    rects[i] = document.querySelector(".rectangle" + i);
    circs[i] = document.querySelector(".circle" + i);
    texts[i] = document.querySelector(".intext" + i);
}


// onclick
function generateLogo() {

    var j;
    for (let i = 0; i < rects.length; ++i) {
        j = Math.floor(Math.random() * 8);
        rects[i].style.fill = colorPalette[j].r;
        circs[i].style.fill = colorPalette[j].c;
        texts[i].style.fill = colorPalette[j].b;
    }

    // rotation for shape placed at back 
    for (let i = 0; i < rects.length; ++i) {
        generateBDegrees[i] = Math.floor(Math.random() * 46);
        rotations[i] += generateBDegrees[i];
    }

    for (let i = 0; i < rects.length; ++i) {
        rects[i].style.transformOrigin = "50 50";
        rects[i].style.transform = 'rotate(' + generateBDegrees[i] + 'deg)';
    }

    // generating random value for border radius
    var borderRad = Math.floor(Math.random() * 21);
    // setting border radius for x and y axis
    if (generateBDegrees[0] % 2 != 0 && generateBDegrees[1] % 2 != 0 && generateBDegrees[2] % 2 != 0 && generateBDegrees[3] % 2 != 0 && generateBDegrees[4] % 2 != 0) {
        borderRad = 0;
    }

    for (let i = 0; i < rects.length; ++i) {
        rects[i].style.rx = borderRad;
        rects[i].style.ry = borderRad;
    }

}

function resetLogo() {

    //removing colors from rectangle and circle
    for (let i = 0; i < rects.length; ++i) {
        rects[i].style.fill = "transparent";
        circs[i].style.fill = "transparent";
    }

    //removing style from text
    for (let i = 0; i < rects.length; ++i) {
        texts[i].style.fill = "black";
    }


    //removing border radius from rectangle
    for (let i = 0; i < rects.length; ++i) {
        rects[i].style.rx = "";
        rects[i].style.ry = "";
    }

    //removing angle of rotation from rectangle
    for (let i = 0; i < rects.length; ++i) {
        rects[i].style.transform = "";
    }
}
var ho = document.getElementById('home');
ho.addEventListener("click", home);

var wo = document.getElementById('world');
wo.addEventListener("click", world);

var po = document.getElementById('politics');
po.addEventListener("click", politics);

var ma = document.getElementById('magazine');
ma.addEventListener("click", magazine);

var te = document.getElementById('technology');
te.addEventListener("click", technology);

var sc = document.getElementById('science');
sc.addEventListener("click", science);

var he = document.getElementById('health');
he.addEventListener("click", health);

var sp = document.getElementById('sports');
sp.addEventListener("click", sports);

var ar = document.getElementById('arts');
ar.addEventListener("click", arts);

var fa = document.getElementById('fashion');
fa.addEventListener("click", fashion);

var fo = document.getElementById('food');
fo.addEventListener("click", food);

var tr = document.getElementById('travel');
tr.addEventListener("click", travel);

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

async function home(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

async function world(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

async function politics(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

function magazine(){
    return new Promise(async (resolve, reject) => {
            var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
            var jsoni1 = await i1.json();
            var iter = jsoni1.results;
            resolve(iter);
        })
    }    
magazine()
.then(function(data){
    data.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
})
.catch(function(err){
    console.log(err);
})    


async function technology(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

async function science(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

async function health(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

async function sports(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

async function arts(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

async function fashion(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

async function food(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/food.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

async function travel(){
    var i1 = await fetch('https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=CnfVYwqGRGcpPhY6Ei7iuDhaXTX5f5SQ');
    var jsoni1 = await i1.json();
    var iter = jsoni1.results;
    iter.forEach( function(val){
        createCard(val.abstract, val.byline, val.created_date, val.item_type, val.section, val.title, val.short_url, val.multimedia[4].url);
    })
}

function createCard(ab, by, cr, it, se, ti, sh, mu){
    var app = document.getElementById('body');

    var r1 = document.createElement('div');
    r1.classList.add('row','mt-3');

    var c1 = document.createElement('div');
    c1.classList.add('col');

    var crd = document.createElement('div');
    crd.classList.add('card');

    var crdbody = document.createElement('div');
    crdbody.classList.add('card-body');

    var r2 = document.createElement('div');
    r2.classList.add('row');

    var c2 = document.createElement('div');
    c2.classList.add('col-sm-6','col-12');

    var titl = document.createElement('h5');
    titl.innerHTML = ti;

    var dat = document.createElement('h6');
    var d = new Date(`${cr}`)
    dat.innerHTML = months[d.getMonth()]+" "+d.getDate();

    var abs = document.createElement('p');
    abs.innerHTML = ab;
    
    var anc = document.createElement("A");
    anc.setAttribute("href", sh);
    anc.innerHTML = 'Continue Reading';

    var c3 = document.createElement('div');
    c3.classList.add('col-sm-6','col-12','text-right');

    var img = document.createElement('img');
    img.setAttribute("src", mu);
    img.setAttribute("alt", 'image.jpg');
    img.width = '200';

    c3.appendChild(img);
    c2.append(titl, dat, abs, anc);
    r2.append(c2, c3);
    crdbody.appendChild(r2);
    crd.appendChild(crdbody);
    c1.appendChild(crd);
    r1.appendChild(c1);

    app.appendChild(r1);
}

home();
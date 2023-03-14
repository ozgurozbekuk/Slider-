var models = [ {
    name : "Orient Mako ",
    image : "img/orientmako.jpg",
    link : "https://www.chrono24.com.tr/orient/orient-sk-revival-ra-aa0b02r19b--id26054830.htm"
},

{
    name : "Seiko 5",
    image : "img/seiko 5.jpg",
    link : "https://www.chrono24.com.tr/seiko/seiko-5-sports--skeleton--id26565887.htm"
},

{
    name : "Casio G-shock",
    image : "img/casiogshock.jpg",
    link : "https://www.chrono24.com.tr/casio/g-shock--id26675312.htm"
},

{
    name : "Omega Seamaster",
    image : "img/omegaseamaster.jpeg",
    link : "https://www.rotapsaat.com/tr/omega-seamaster-diver-300-m-co-axial-41-mm-21230412003001"

},

{
    name : "Rolex Submariner",
    image : "img/rolexsubmariner.jpg",
    link : "https://www.authenticwatches.com/rolex-mens-watch.html?gclid=Cj0KCQiAgOefBhDgARIsAMhqXA7SE-u47uFsve8dxGLSPeRxDnNexUyho_Aoq8i3EbDq0sOLUKD-CY8aAgeWEALw_wcB"
}
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    duration : '3000',
    random : true,
};

init(settings);


document.querySelector('.fa-arrow-circle-left').addEventListener('click',function() {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.fa-solid').forEach(function(item) {
    item.addEventListener('mouseenter',function() {
        clearInterval(interval);
    })
});
document.querySelectorAll('.fa-solid').forEach(function(item) {
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})



function init(settings) {
    var prev;
    interval = setInterval(function() {

        if(settings.random){
            do{
                index = Math.floor(Math.random()*slaytCount);
            }while(index == prev);
            prev = index;
            
        }else {
        }
        console.log(index)
        showSlide(index);

        
    }, settings.duration);



}


document.querySelector('.fa-arrow-circle-right').addEventListener('click',function() {
    
    index++;
    showSlide(index);
    console.log(index);

});

function showSlide(i) {
    index = i;
    if (i<0) {
        index = slaytCount-1;
    }
    if (i>=slaytCount) {
        index = 0;
    }


   document.querySelector('.card-title').textContent = models[index].name

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link)

}







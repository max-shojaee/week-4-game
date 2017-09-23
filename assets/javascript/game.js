var sum=0;
var wins=0;
var losses=0;

//a random number from 19 t0 120
var random = Math.floor((Math.random()* 100) + 19);

//assign random value to crystals from 1-12
var red = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);


$(document).ready(function(){

    refresh();
    $('#red').click(function(){
        sum += red;
        processCrystal();
    })
    $('#blue').click(function(){
        sum += blue;
        processCrystal();
    })
    $('#yellow').click(function(){
        sum += yellow;
        processCrystal();
    })
    $('#green').click(function(){
        sum += green;
        processCrystal();
    })
});


function processCrystal(){
    if (sum === random) {
        wins++;
        reset();
    }
    else if(sum > random){
        losses++;
        reset();
    }
    refresh();
}


function reset(){
    sum = 0;
    random = Math.floor((Math.random()* 100) + 19);
    red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1); 
}


function refresh()
{
    $("#random").html(random);
    $("#score").html(sum);
    $("#wins").html("Wins: "+wins);
    $("#losses").html("Losses: "+losses);
}
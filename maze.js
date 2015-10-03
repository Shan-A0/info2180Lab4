"use strict";
var lose = false;  //when wall is hit
var startcount = 0;
window.onload = function() 
{
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() 
{
    lose = true;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].addClassName("youlose");
    }
    overEnd();
}

function startClick() 
{
    startcount = 0;
    lose = false;
    $('status').update("Move your mouse over the 'S' to begin.");
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].removeClassName("youlose");
    }
}

function overEnd() 
{
    if(lose) 
    {
        $('status').update("You lose!");
    } 
    else 
    {
        $('status').update("You win!");
    }
}

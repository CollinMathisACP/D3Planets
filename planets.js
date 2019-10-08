/* Question 1 */
var names = ["One", "Two", "Three"];
d3.select("#A1").append("div").text(names);
/* Question 2 */      
d3.select("#A2").selectAll("div").data(names).enter().append("div").attr("class","q2")
    .text(function(d) { return d });
//Question 3
var q3Promise = d3.json("planets.json");

q3Promise.then(
    function(planet)
    {
        printImages(planet)
        printList(planet)
        console.log("planet:",planet);
    },
    function(err)
    {
        console.log("fail:",err);
    }
)

//Question 4

var printImages = function(planet)
{
    d3.select("#B3").selectAll("div")
        .data(planet)
        .enter()
        .append("img")
        .attr("src",function(planet) { return planet.img });
}
//Question 5
var printList = function(planet)
{
    d3.select("#B4").selectAll("div")
        .data(planet)
        .enter()
        .append("ol")
        .selectAll("li")
        .append("li")
    
        .attr("src",function(planet) { return planet.img });
}

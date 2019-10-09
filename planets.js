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
        printTable(planet)
        printTable2(planet)
        printTable3(planet)
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
    var nameList = d3.select("#B4").append("ol").selectAll("li").data(planet).enter()
    .append("li").text(function(planet) { return planet.name })
}

//Question 6
var printTable = function(planet)
{
    d3.select("#C1").append("table").selectAll("tr").data(planet).enter()
    .append("tr").attr("class", function(d) { return d.name });
}

//Question 7
var printTable2 = function(planet)
{
    d3.select("#C2").append("table").selectAll("tr").data(planet)
        .enter()
        .append("tr")
        .text(function(d) { return d.name });
}
//Question 8
var printTable3 = function(planet)
{
     var table = d3.select("#C3").append("table").selectAll("tr").data(planet)
        .enter()
        .append("tr")
        .text(function(d) { return d.name });
    table.append("td").append("img").attr("src", function(d) { return d.img })
    table.append("td").text(function(d) { return d.distance })
    table.append("td").text(function(d) { return d.radius })
    table.append("td").text(function(d) { return d.density })
    table.append("td").text(function(d) { return d.moon })
}

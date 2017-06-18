// http://visjs.org/docs/timeline/
var container = document.getElementById('visualization');

// http://visjs.org/examples/timeline/items/itemOrdering.html
var options = {clickToUse: true};
// stack para não empilhar

/*
 * assim que se edita (para referência)
$("document").ready(function() {
    $("#dot").click(function() {
        item = items.get(1);
        item.type = "point";
        item.content = "";
        item.style = "background-color: red;"
        items.update(item);
    });
});
*/

var timeline = new vis.Timeline(container, dataset, options);

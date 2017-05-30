var container = document.getElementById('visualization');

var items = new vis.DataSet([
    {id: 1,
     content: 'Segunda Guerra Mundial',
     start: '1939-01-01',
     end: '1945-12-30'},
    {id: 2,
     content: 'Avanços do Eixo',
     start: '1940-01-01'},
    {id: 3,
     content: 'A guerra se torna global',
     start: '1941-01-01'},
    {id: 4,
     content: 'Paralisação dos avanços do Eixo',
     start: '1942-01-01'},
    {id: 5,
     content: 'Aliados ganham impulso',
     start: '1943-01-01'},
    {id: 6, content: 'Aproximação dos Aliados',
     start: '1944-01-01'},
    {id: 7,
     content: 'Colapso do Eixo e vitória dos Aliados',
     start: '1945-01-01'}
]);

var options = {};

var timeline = new vis.Timeline(container, items, options);

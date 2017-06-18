/*
$("full").each(function() {
    inside = $(this).html();
    console.log(inside);
    $(this).empty();
});
*/

$("quiz").each(function() {
    str = $(this).text();
    lines = str.split(/\r?\n/g);
    i = 0;
    question = "";
    options = []
    for(i = 0; i < lines.length; i++) {
        line = lines[i].trim()
        if(line) {
            if("abcde".indexOf(line[0].toLowerCase() != -1) && line[1] == ')') {
                options.push({"text": line.substring(2).trim(), "letter": line[0]})
            } else {
                question = question + line;
            }
        }
    }

    thisQuiz = $(this);
    thisQuiz.text("");
    quiz_div = $('<div class="panel panel-default"></div>').appendTo(thisQuiz);
    header_div = $('<div class="panel-heading question"></div>').appendTo(quiz_div);
    $('<div>' + question + '</div>').appendTo(header_div);
    options_div = $('<div class="panel-body"></div>').appendTo(quiz_div);
    options.forEach(function(option) {
        $('<div class="radio"><label><input type="radio" name="r1" id="1" value="' + option.letter + '">' + option.text + '</label></div>').appendTo(options_div);
    });

    $('<div class="feedback"></div>').appendTo(options_div);

});

$(document).ready(function() {
    $('body').on('change', 'input[name=r1]:radio', function() {
        quiz = $(this).parents("quiz");
        val = $(this).attr("value");
        if(val != val.toLowerCase()) {
            $(quiz).find(".feedback").html('<p class="bg-success">Correto!</p>');
        } else {
            $(quiz).find(".feedback").html('<p class="bg-danger">Incorreto...</p>');
        }
    });
});

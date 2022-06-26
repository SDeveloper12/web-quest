
$(function() {
    var $newItemForm = $('#show-modal');
    var $textInput = $('input:text');
    var $result = $('#result');
    var $new = $('.modal');
    var $ball = 0;
function check()
{
    var inp1 = document.getElementsByName('q1');
    for (var i = 0; i < 3; i++) {
        if (inp1[i].value == "2" && inp1[i].checked)
        { $ball++;}
    }
    var inp2 = document.getElementsByName('q2');
    for (var i = 0; i < inp2.length; i++) {
        if (inp1[i].value == "1" && inp1[i].checked)
        { $ball++;}
    }
    var inp3 = document.getElementsByName('q3');
    for (var i = 0; i < inp3.length; i++) {
        if (inp1[i].value == "2" && inp1[i].checked)
        { $ball++;}
    }
    var inp4 = document.getElementsByName('q4');
    for (var i = 0; i < inp4.length; i++) {
        if (inp1[i].value == "1" && inp1[i].checked)
        { $ball++;}
    }
    var inp5 = document.getElementsByName('q5');
    for (var i = 0; i < inp5.length; i++) {
        if (inp1[i].value == "3" && inp1[i].checked)
        { $ball++;}
    }
};
    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        $new.show();
        $result.hide();
        var newText = $textInput.val();
        $('.modal img').after('<h2>' + newText + ',' + '</h2>');
        $textInput.val('');
        $('.modal span').after($ball);
    });
    check(); 
})
function blockNote() {
    var width = 16,
        height = 16;
    for (var i = 0; i < height; i++) {
        $('.note').append('<div class = "note-line"></div>');
    }
    for (var j = 0; j < width; j++) {
        $('.note-line').append('<div></div>');
    }
    $('.note-line>div').hover(function () {
        var r = Math.floor(Math.random() * (256));
        var g = Math.floor(Math.random() * (256));
        var b = Math.floor(Math.random() * (256));
        var randomcolor = 'rgb(' + r + ',' + g + ',' + b + ')';
        $(this).css('background', randomcolor);
    });
    $('#reset').click(function () {
        $('.setting-container').css('height', '100%', 'overflow', 'none');
    });
    $('#submit').click(function () {
        $('.setting-container').css('height', '0', 'overflow', 'hidden');
        $('.note-line>div').css('background-color', 'red');
        $('.note-line>div').remove();
        $('.note-line').remove();
        width = document.size.size_width.value,
            height = document.size.size_height.value;
        for (var i = 0; i < height; i++) {
            $('.note').append('<div class = "note-line"></div>');
        }
        for (var j = 0; j < width; j++) {
            $('.note-line').append('<div></div>');
        }
        $('.note-line>div').hover(function () {
            var r = Math.floor(Math.random() * (256));
            var g = Math.floor(Math.random() * (256));
            var b = Math.floor(Math.random() * (256));
            var randomcolor = 'rgb(' + r + ',' + g + ',' + b + ')';
            $(this).css('background', randomcolor);
        });
    });
}
$(document).ready(blockNote);

$(document).ready(function () {

    console.log('Ваша версия jQuery ' + jQuery.fn.jquery);

    // var images = $('.picture__item img');
    var result = $('.result__block');
    // result.html(images[0].outerHTML);
    //
    // images.click(function () {
    //     var Bigg = result.html(this.outerHTML);
    //     result.html(this.outerHTML);
    // });
    var counter = 1;
    var text = $('#text');
    var text2 = $('#text2');
    var text3 = $('#text3');
    var text4 = $('#text4');
    var text5 = $('#text5');
    $('#lol').click(function () {
        console.log('click');
        addCaption();
        var form = $('#imageForm'),
            imgSrc = $('.result__block img')[0].currentSrc,
            imgText = text.val(),
            imgText2 = text2.val(),
            imgText3 = text3.val(),
            imgText4 = text4.val(),
            imgText5 = text5.val(),
            textTop = text[0].offsetTop,
            textLeft = text[0].offsetLeft,
            text2Top = text2[0].offsetTop,
            text2Left = text2[0].offsetLeft,
            text3Top = text3[0].offsetTop,
            text3Left = text3[0].offsetLeft,
            text4Top = text4[0].offsetTop,
            text4Left = text4[0].offsetLeft;

        console.log(textTop);

        form.html('<input type="hidden" name="imgsrc" id="imgsrc" value="' + imgSrc + '"><input type="hidden" name="text1" id="text1" value="' + imgText + '"><input type="hidden" name="text2" id="text2" value="' + imgText2 + '"><input type="hidden" name="text3" id="text3" value="' + imgText3 + '"><input type="hidden" name="text4" id="text4" value="' + imgText4 + '"><input type="hidden" name="text5" id="text5" value="' + imgText5 + '"><input type="hidden" name="textTop" id="textTop" value="' + textTop + '"><input type="hidden" name="text2Top" id="text2Top" value="' + text2Top + '"><input type="hidden" name="text3Top" id="text3Top" value="' + text3Top + '"><input type="hidden" name="textLeft" id="textLeft" value="' + textLeft + '"><input type="hidden" name="text2Left" id="text2Left" value="' + text2Left + '"><input type="hidden" name="text3Left" id="text3Left" value="' + text3Left + '"><input type="submit" value="Скачать"> ');

    });



    function addCaption() {

        if (result.children('div').length > 0) {
            result.children("div").remove();
        }


        counter++;
        var textValue = text.val(),
            text2Value = text2.val(),
            text3Value = text3.val(),
            text4Value = text4.val(),
            text5Value = text5.val(),
            textId = "txt" + counter;

        console.log(result.height());
        var enemy = $('<div id="txt1" class="txt-all"></div>');
        var enemy2 = $('<div id="txt2" class="txt-all"></div>');
        var enemy3 = $('<div id="txt3" class="txt-all" ></div>');
        var enemy4 = $('<div id="txt4" class="txt-all" ></div>');
        var enemy5 = $('<div id="txt5" class="txt-all" ></div>');
        enemy.appendTo(result).html(textValue).css({
            position: "absolute",
            background: 'transparent',
            top: '208px',
            fontFamily: $("#font").val()
        });
        enemy2.appendTo(result).html(text2Value).css({
            position: "absolute",
            background: 'transparent',
            top: '252px',
            left: '(result.width() - text2Value.width) / 2',
            fontFamily: $("#font").val()
        });

        enemy3.appendTo(result).html(text3Value).css({
            position: "absolute",
            background: 'transparent',
            top: '300px',
            left: (result.width() - text3Value.width) / 2,
            fontFamily: $("#font").val()
        });
        enemy4.appendTo(result).html(text4Value).css({
            position: "absolute",
            background: 'transparent',
            top: '346px',
            left: (result.width() - text4Value.width) / 2,
            fontFamily: $("#font").val()
        });

        enemy5.appendTo(result).html(text5Value).css({
            position: "absolute",
            background: 'transparent',
            top: '232px',
            left: '379px',
            fontFamily: $("#font").val()
        });


        //		.draggable({
        //		containment: "parent"
        //	});
        console.log(enemy.css('top'));

    }

    $('#downloadbutton').click(function () {
        var form = $('#imageForm'),
            imgSrc = $('.result__block img')[0].currentSrc,
            imgText = text.val(),
            imgText2 = text2.val(),
            imgText3 = text3.val(),
            imgText4 = text4.val(),
            imgText5 = text5.val(),
            textTop = text[0].offsetTop;

        console.log(textTop);

        form.html('<input type="hidden" name="imgsrc" id="imgsrc" value="' + imgSrc + '"><input type="hidden" name="text1" id="text1" value="' + imgText + '"><input type="hidden" name="text2" id="text2" value="' + imgText2 + '"><input type="hidden" name="text3" id="text3" value="' + imgText3 + '"><input type="hidden" name="text4" id="text4" value="' + imgText4 + '"><input type="hidden" name="text5" id="text5" value="' + imgText5 + '"> ');


    });

});
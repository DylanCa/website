$(document).ready(function() {

    var d = $(document).height();

    setHeight();
    setZone();
    bubbleClick();

    $(window).scroll(function() {
        var s = $(window).scrollTop(),
            c = $(window).height();
        position = (s / (d - c));

        moveZone();
        skillbar();



        if ($(this).scrollTop() > 0) {
            moveBackground();
            setHeight();

            $('progress').attr('value', position);
            $('header').addClass("sticky");
            $('#pic').addClass("sticky");
            $('#cvName').addClass("sticky");
            $('#hidd').addClass("sticky");
            $('progress').addClass("sticky");
            $('#enveloppe').addClass("sticky");

        } else {
            $('header').removeClass("sticky");
            $('#pic').removeClass("sticky");
            $('#cvName').removeClass("sticky");
            $('#hidd').removeClass("sticky");
            $('progress').removeClass("sticky");
        }
    });
});


function setHeight() {

    // $('#footer').css({ 'top': $('#bwFormContact').offset().top - $(this).scrollTop() + 140 });

    if ($('#bwSkillXP').offset().top - $(this).scrollTop() < 1500 && $(this).scrollTop() > 0) {
        $('#skills').css({ 'height': $('#bwSkillXP').offset().top - $(this).scrollTop() });
        $('button').css({ 'background-color': '#ecf0f1' });
        $('#buttonSkills').css({ 'background-color': '#DDE0E2' });

        if ($('#bwXPForm').offset().top - $(this).scrollTop() < 1500) {
            $('#experience').css({ 'height': $('#bwXPForm').offset().top - $(this).scrollTop() });
            $('button').css({ 'background-color': '#ecf0f1' });
            $('#buttonExperience').css({ 'background-color': '#DDE0E2' });

            if ($('#bwFormContact').offset().top - $(this).scrollTop() < 1500) {
                $('#formation').css({ 'height': $('#bwFormContact').offset().top - $(this).scrollTop() });

                $('#Contact').css({ 'height': $('#footer').offset().top - $(this).scrollTop() });

                $('button').css({ 'background-color': '#ecf0f1' });
                $('#buttonFormation').css({ 'background-color': '#DDE0E2' });



                if ($('#bwFormContact').offset().top - $(this).scrollTop() < 500) {
                    $('button').css({ 'background-color': '#ecf0f1' });
                    $('#buttonContact').css({ 'background-color': '#DDE0E2' });

                }
            }
        }
    }
}

function moveZone() {
    $('#skills').css({ 'top': $(this).scrollTop() * 0.03 });
}

function setZone() {
    $('#buttonSkills').click(function() {
        $("html, body").animate({
            scrollTop: "5px"
        })
    });
    $('#buttonExperience').click(function() {
        $("html, body").animate({
            scrollTop: "1000px"
        })
    });
    $('#buttonFormation').click(function() {
        $("html, body").animate({
            scrollTop: "2140px"
        })
    });
    $('#buttonContact').click(function() {
        $("html, body").animate({
            scrollTop: "3280px"
        })
    });

}

function moveBackground() {
    $('#sun').css({ 'top': $(this).scrollTop() * -0.1319 });
    $('#moon').css({ 'top': $(this).scrollTop() * 0.0819 - 550 });
    $('#backbg').css({ 'top': $(this).scrollTop() * -0.01728 + 300 });
    $('#frontbg').css({ 'top': $(this).scrollTop() * -0.012 + 200 });
    $('#house').css({ 'top': $(this).scrollTop() * -0.008 + 150 });
}

function skillbar() {
    if ($('#skills').height() > 500) {
        jQuery('.skillbar').each(function() {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 500);
        });
    } else if ($('#skills').height() < 450) {
        jQuery('.skillbar').each(function() {
            jQuery(this).find('.skillbar-bar').stop();
            jQuery(this).find('.skillbar-bar').width('0%')
        });
    }
}

function bubbleClick(){
    $('.bubble').click(function() {
        if ($(this).css("marginLeft") == '-20px') {
            $('.bubble').animate({
                'marginLeft': '-20'
            }, 100);
            $(this).animate({
                'marginLeft': '0'
            }, 100);
        } else if ($(this).css("marginLeft") == '0px') {
            $('.bubble').animate({
                'marginLeft': '-20'
            }, 100);
        }
    });
}
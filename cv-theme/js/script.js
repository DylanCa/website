$(document).ready(function() {

    var d = $(document).height();

    setHeight();
    setZone();
    bubbleClick();
    hoverBar();

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
            $('progress').addClass("sticky");
            $('#enveloppe').addClass("sticky");

        } else {
            $('header').removeClass("sticky");
            $('#pic').removeClass("sticky");
            $('progress').removeClass("sticky");
            $('#enveloppe').removeClass("sticky");
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
    $('#skills').css({ 'top': $(this).scrollTop() * 0.02 });
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

    $('#pic').click(function() {
        if ($(window).scrollTop() == 0) {
            $("html, body").animate({
                scrollTop: "5px"
            })

        } else {
            $("html, body").animate({
                scrollTop: "0px"
            })
        }
    });


}

function moveBackground() {
    $('#sun').css({ 'top': $(this).scrollTop() * -0.219 + 100 });
    $('#moon').css({ 'top': $(this).scrollTop() * 0.179 - 550 });
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

function bubbleClick() {
    $('.bubble').click(function() {
        if ($(this).css("marginLeft") == '-24px') {
            $('.bubble').animate({
                'marginLeft': '-24'
            }, 100);
            $(this).animate({
                'marginLeft': '0'
            }, 100);

            switch ($(this).find("h1").html()) {
                case '2017':
                    $('#name').html('t');
                    break;

                default:
                    break;
            }
        } else if ($(this).css("marginLeft") == '0px') {
            $('.bubble').animate({
                'marginLeft': '-24'
            }, 100);
        }
    });
}

function hoverBar() {
    $('.skillbar').hover(function() {
        switch ($(this).find("span").html()) {
            case 'Java':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #Java").html();
                break;
            case 'C#':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #CS").html();
                break;
            case 'HTML':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #HTML").html();
                break;
            case 'PHP':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #PHP").html();
                break;
            case 'CSS':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #CSS").html();
                break;
            case 'JavaScript / JQuery':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #JS").html();
                break;
            case 'SQL':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #SQL").html();
                break;
            case 'Leadership':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #Leadership").html();
                break;
            case 'Interpersonal Skills':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #IS").html();
                break;
            case 'Initiative':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #Initiative").html();
                break;
            case 'Optimism':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #Optimism").html();
                break;
            case 'Adaptability':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #Adaptability").html();
                break;
            case 'Critical Thinking':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #CT").html();
                break;
            case 'Reliability':
                $("#skillHovered").load("/cv-theme/templates/timeline.html #Reliability").html();
                break;
            default:
                $("#skillHovered").html('<p>Hover a skill to see details.</p>');
                break;
        }
    }, function() { $("#skillHovered").html('<p>Hover a skill to see details.</p>'); });
}

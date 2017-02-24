$(document).ready(function() {

    var d = $(document).height();

    setHeight();
    setZone();
    bubbleClick();
    hoverBar();
    moveZone();
    workClick();
    studyClick();

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

    $('#experience').css({ 'top': $(this).scrollTop() * 0.02 - 50 });

    $('#formation').css({ 'top': $(this).scrollTop() * 0.02 - 50 });

    $('#Contact').css({ 'top': $(this).scrollTop() * 0.02 - 80 });
}

function setZone() {
    $('#buttonSkills').click(function() {
        $("html, body").animate({
            scrollTop: "5px"
        }, 400)
    });
    $('#buttonExperience').click(function() {
        $("html, body").animate({
            scrollTop: "1000px"
        }, 400)
    });
    $('#buttonFormation').click(function() {
        $("html, body").animate({
            scrollTop: "2140px"
        }, 400)
    });
    $('#buttonContact').click(function() {
        $("html, body").animate({
            scrollTop: "3280px"
        }, 400)
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
    // $('#sun').css({ 'top': $(this).scrollTop() * -0.219 + 100 });
    // $('#moon').css({ 'top': $(this).scrollTop() * 0.179 - 550 });
    $('#fractal1').css({ 'top': $(this).scrollTop() * -0.5 });
    $('#fractal2').css({ 'top': $(this).scrollTop() * -0.3 });
    $('#fractal3').css({ 'top': $(this).scrollTop() * -0.1 });
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

function bubbleClick() {



    $('.bubble, .bubbleInt, #arenesS, #mirailS, #exiaS').click(function() {

        $(".workName").hide();
        $('#workSelected').hide();

        $('.bubble, .bubbleInt, #arenesS, #mirailS, #exiaS').css("box-shadow", "");
        $(this).css("box-shadow", "inset 1px 1px 1px 1px #878787");


        $("#timelineSelected").show();
        $('.workName').css({
            'color': '',
            'box-shadow': '0px 0px 5px 0px #878787'
        });

        switch ($(this).find("h1").html()) {

            case '2017':
                $("h1#workName7").show();
                break;
            case '2016':
                $("h1#workName6").show();
                break;
            case '2015':
                $("h1#workName5").show();
                break;
            case '2014':
                $("h1#workName4").show();
                break;
            case '2013':
                $("h1#workName3").show();
                break;
            case '2012':
                $("h1#workName2").show();
                break;
            case 'CNRS':
                $("#timelineSelected").hide();
                $('#workSelected').show();
                $("#workSelected").load("/cv-theme/templates/timeline.html #cnrs ").html();
                $("#workSelected").css({
                    'float': 'right',
                    'left': '-100px'
                });
            default:
                break;
        }

    });
}

function workClick() {
    $('.workName').click(function() {
        $("#workSelected").css({
            'float': 'left',
            'marginLeft': '10px',
            'left': ''
        });
        $('#workSelected').empty();
        $('#workSelected').show();

        $('.workName').css({
            'color': '',
            'box-shadow': '0px 0px 5px 0px #878787'
        });

        $(this).css({
            'color': '#E7A036',
            'box-shadow': 'inset 1px 1px 1px 1px #878787'
        });

        switch ($(this).html()) {
            case "TFC":
                $("#workSelected").load("/cv-theme/templates/timeline.html #tfc ").html();
                break;
            case "Pizza Bonici":
                $("#workSelected").load("/cv-theme/templates/timeline.html #pizza ").html();
                break;
            case 'Relais des Cedres':
                $("#workSelected").load("/cv-theme/templates/timeline.html #station ").html();
                break;
            case "McDonald's":
                $("#workSelected").load("/cv-theme/templates/timeline.html #mcdo ").html();
                break;
            case "Quick":
                $("#workSelected").load("/cv-theme/templates/timeline.html #quick ").html();
                break;
            case "Chronodrive":
                $("#workSelected").load("/cv-theme/templates/timeline.html #chrono ").html();
                break;

            default:
                break;
        }
    });
}

function studyClick() {
    $('.study').click(function() {
        $('.study').css('color', '');
        $(this).css('color', '#155A15');
        switch ($(this).html()) {
            case "Exia.CESi":
                $('#schoolName').load("/cv-theme/templates/timeline.html #exia .schoolName").html();
                $('#schoolLoc').load("/cv-theme/templates/timeline.html #exia .schoolLoc").html();
                $('#schoolLink').load("/cv-theme/templates/timeline.html #exia .schoolLink").html();
                $('#schoolDate').load("/cv-theme/templates/timeline.html #exia .schoolDate").html();
                $('#schoolDesc').load("/cv-theme/templates/timeline.html #exia .schoolDesc").html();
                break;
            case "Lycée des Arènes":
                $('#schoolName').load("/cv-theme/templates/timeline.html #arenes .schoolName").html();
                $('#schoolLoc').load("/cv-theme/templates/timeline.html #arenes .schoolLoc").html();
                $('#schoolLink').load("/cv-theme/templates/timeline.html #arenes .schoolLink").html();
                $('#schoolDate').load("/cv-theme/templates/timeline.html #arenes .schoolDate").html();
                $('#schoolDesc').load("/cv-theme/templates/timeline.html #arenes .schoolDesc").html();
                break;
            case "Université Toulouse II - Jean Jaurès":
                $('#schoolName').load("/cv-theme/templates/timeline.html #mirail .schoolName").html();
                $('#schoolLoc').load("/cv-theme/templates/timeline.html #mirail .schoolLoc").html();
                $('#schoolLink').load("/cv-theme/templates/timeline.html #mirail .schoolLink").html();
                $('#schoolDate').load("/cv-theme/templates/timeline.html #mirail .schoolDate").html();
                $('#schoolDesc').load("/cv-theme/templates/timeline.html #mirail .schoolDesc").html();
                break;
            default:
                break;
        }
    });
}

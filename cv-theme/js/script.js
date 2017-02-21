$(document).ready(function() {

    setHeight();

    $(window).scroll(function() {
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();
        scrollPercent = (s / (d - c));
        var position = scrollPercent;

        if ($('#skills').height() > 485){
            jQuery('.skillbar').each(function() {
                jQuery(this).find('.skillbar-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 1000);
            });
        }

        if ($('#skills').height() < 310){
            jQuery('.skillbar').each(function() {
                jQuery(this).find('.skillbar-bar').stop();
                jQuery(this).find('.skillbar-bar').width('0%')
            });
        }

        $('progress').attr('value', position);

        if ($(this).scrollTop() > 0) {

            setHeight();

            $('header').addClass("sticky");
            $('#pic').addClass("sticky");
            $('#cvName').addClass("sticky");
            $('#hidd').addClass("sticky");
            $('progress').addClass("sticky");
            

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

    if ($('#bwSkillXP').offset().top - $(this).scrollTop() < 1000) {
        $('#skills').css({ 'height': $('#bwSkillXP').offset().top - $(this).scrollTop() });

        if ($('#bwXPForm').offset().top - $(this).scrollTop() < 1000) {
            $('#experience').css({ 'height': $('#bwXPForm').offset().top - $(this).scrollTop() });

            if ($('#bwFormHobbies').offset().top - $(this).scrollTop() < 1000) {
                $('#formation').css({ 'height': $('#bwFormHobbies').offset().top - $(this).scrollTop() });
            }
        }
    }
}

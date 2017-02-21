$(document).ready(function() {


    $(window).scroll(function() {
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();
        scrollPercent = (s / (d - c));
        var position = scrollPercent;

        $('progress').attr('value', position);

        if ($(this).scrollTop() > 0) {
            var top = $('#bwSkillXP').offset().top - $(this).scrollTop();

            $('header').addClass("sticky");
            $('#pic').addClass("sticky");
            $('#cvName').addClass("sticky");
            $('#hidd').addClass("sticky");
            $('progress').addClass("sticky");
            $('.name').html(top);
            $('#skills').css({ 'height': top });

        } else {
            $('header').removeClass("sticky");
            $('#pic').removeClass("sticky");
            $('#cvName').removeClass("sticky");
            $('#hidd').removeClass("sticky");
            $('progress').removeClass("sticky");
        }
        if ($(this).scrollTop() > 50) {
            jQuery('.skillbar').each(function() {
                jQuery(this).find('.skillbar-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2000);
            });
        }
    });
});

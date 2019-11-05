$(function(){
    //말줄임
    generateDot($(".dott"));
    
    // 모바일 메뉴 - 열기
    $("header").on('click', '.m_btn', function () {
        var $rootScr = $("html").scrollTop() || $("body").scrollTop();
        var objWrapStyl = {
            position: 'fixed',
            minHeight: $(window).height() + $rootScr + 'px',
            top: ($rootScr * -1) + 'px',
            width: '100%',
        };

        $("body").addClass("leftOpen");
        $('.container_wrap').css(objWrapStyl).data("top", $rootScr);
    });

    // 모바일 메뉴 - 닫기
    $(".nav .close_btn").on('click', function () {
        var $rootScr = $("html").scrollTop();
        var $previusScr = $(".container_wrap").data("top");

        $("body").removeClass("leftOpen");
        $('.container_wrap').attr("style", "");
        $("html, body").animate({scrollTop: $previusScr}, 0);
    });

});

//말줄임 처리
function generateDot($el) {
    $el.dotdotdot({
        // configuration goes here
        ellipsis: '... ',
        wrap: 'word',
        after: null,
        watch: true,
        height: null,
        tolerance: 0
    });
}
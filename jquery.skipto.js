/**
 * @file jQuery collection plugin that enhances a skip to link for screen reader navigation
 * @author Ian McBurnie <ianmcburnie@hotmail.com>
 * @version 0.0.1
 * @requires jquery
 */
(function($, window, document, undefined) {
    // if the user has pressed the back button, set focus back on the link
    /*
    var hasHistoryAPI = !!(window.history && history.pushState);

    $(window).on("popstate", function onPopState(e) {
        if(window.location.hash === '' && history.state && history.state.skipto) {
            $('#'+history.state.skipto).focus();
        }
    });
    */
    $.fn.skipTo = function() {
        return this.each(function onEach() {
            var $widget = $(this);
            var $link = $widget.find('a');
            var targetId = $link.attr('href');
            var $target = $(targetId);

            // set a unique widget id
            // $widget.nextId('skipto');

            $link.on('click', function onClick(e) {
                // make target programmatically focussable
                $target.attr('tabindex', '-1');

                // set programmatic focus on target. Firefox needs a short delay
                window.setTimeout(function(e) {
                    $target.focus();
                }, 5);

                // remove tabindex on blur
                $target.one('blur', function(e) {
                    $target.removeAttr('tabindex');
                });

                // store link id in history state
                /*
                if (hasHistoryAPI === true && window.location.hash === '') {
                    history.pushState({"skipto":$widget.prop('id')}, null, window.location.href);
                }
                */
            });
        });
    };
}(jQuery, window, document));

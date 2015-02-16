// ==UserScript==
// @name vim-aviate
// @namespace http://keyboardfire.com/
// @grant none
// @license MIT
// @description Pop out text boxes from your web browser into full-fledged Vim instances. Soar to new text-editing levels.
// @version 1.0.0
// @match *://*/*
// ==/UserScript==

window.addEventListener('load', function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.addEventListener('load', function() {
        var script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.text = 'var aviateJQ = jQuery.noConflict(true); (' + go + ')(aviateJQ);';
        document.head.appendChild(script2);
    });
    script.src = 'http://code.jquery.com/jquery-1.11.2.min.js';
    document.head.appendChild(script);
});

function go($) { $(function() {
    $(document.body).on('keydown', 'textarea', function(e) {
        if (e.altKey && e.keyCode === 86) {
            e.preventDefault();
            var textarea = this;
            editInVim(textarea, function(str) {
                textarea.value = str;
            });
        }
    });

    function editInVim(textarea, callback) {
        $.get('http://127.0.0.1:8000/server.php?str=' + encodeURIComponent(textarea.value));
        makeOverlay(textarea, function(e) {
            $.get('http://127.0.0.1:8000/server.php', function(data) {
                callback(data);
            });
        });
    }

    function makeOverlay(textarea, callback) {
        var overlay = $('<div>')
            .css({
                position: 'fixed',
                top: '0px',
                left: '0px',
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: '999999',
                textAlign: 'center',
                lineHeight: Math.floor(window.innerHeight / 2) + 'px'
            })
            .append($('<button>')
                .attr('id', 'aviateDoneBtn')
                .text('Done')
                .click(function(e) {
                    overlay.fadeOut(300, function() { overlay.remove(); });
                    callback(e);
                })
            )
            .hide().fadeIn(300)
            .appendTo(document.body);

        $(textarea).one('focus', function() {
            $('#aviateDoneBtn').click();
        });
    }
}); }

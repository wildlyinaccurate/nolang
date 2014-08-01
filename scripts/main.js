$('.sample-code').each(function(_, block) {
  hljs.highlightBlock(block);
});

$('.console').console({
    promptLabel: 'No > ',

    commandValidate: function(line) {
        return line !== '';
    },

    commandHandle: function(line) {
        return [{
            msg: 'false',
            className: 'jquery-console-message-value'
        }];
    },
    autofocus: true,
    animateScroll: true,
    promptHistory: true
});

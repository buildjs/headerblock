var reLeadingDot = /^\./,
    slashStarComments = {
        leading: '/*',
        line:    ' * ',
        end:     ' */ '
    },
    fileComments = {
        js: slashStarComments,
        css: slashStarComments,
        coffee: {
            leading: '###',
            line:    '',
            end:     '###'
        }
    },
    reLineBreak = /\r?\n/,

    // intialise line endings based on platform
    lineEnding = process.platform == 'win32' ? '\r\n' : '\n';

module.exports = function(opts, content) {
    // split the content on line breaks
    var lines = [''].concat((content || '').split(reLineBreak)).concat(''),
        lastLineIdx = lines.length - 1,
        filetype = (opts.filetype || 'js').replace(reLeadingDot, ''),
        comments;

    // get the comments for the specific filetype
    comments = fileComments[filetype] || slashStarComments;
    
    // if we have a leader then add an additional line for a tidy output
    if (opts.leader) { lines.shift(''); }
    
    // iterate through the lines and add the comments
    lines = lines.map(function(line, index) {
        var comment = comments[index === 0 ? 'leading' : (index === lastLineIdx ? 'end' : 'line' )];
        
        // if we are at the first line, then add the optional leader
        if (index === 0) {
            comment += (opts.leader || '');
        }

        // add the comment line to the content line
        return comment + line;
    });

    // wrap in the comments
    return lines.join(lineEnding);
};
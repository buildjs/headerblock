var async = require('async'),
    fs = require('fs'),
    path = require('path'),
    _existsSync = fs.existsSync || path.existsSync,
    commentwrap = require('./commentwrap'),
    _ = require('underscore'),
    defaultData = {
        name: '',
        version: '',
        url: null,
        builddate: null,
        md5: null,
        copyright: null,
        licenses: []
    };

module.exports = function(data, opts, callback) {
    var templatePaths = [ path.resolve(__dirname, 'templates', 'default.txt') ],
        output;
    
    // handle the 2 args case
    if (typeof opts == 'function') {
        callback = opts;
        opts = {};
    }
    
    // ensure we have opts
    opts = opts || {};
    
    // ensure the data has defaults
    data = _.defaults({}, data, defaultData);
    
    // if we are to include the builddate, then include that now
    if (! opts.nodate) {
        data.builddate = new Date().toISOString();
    }
    
    // if we have a template option specified, then add some additional paths
    if (opts.template) {
        templatePaths.shift(path.resolve(__dirname, 'templates', opts.template + '.txt'));
        templatePaths.shift(path.resolve(opts.template));
    }
    
    // find the first valid template
    async.detect(templatePaths, fs.exists || path.exists, function(templatePath) {
        // read the template file
        fs.readFile(templatePath, 'utf8', function(err, content) {
            if (err) return callback(err);
            
            try {
                // fire the callback
                return callback(null, commentwrap(opts, _.template(content, _.defaults({}, data, opts))));
            }
            catch (e) {
                return callback(e);
            }
        });
    });
};
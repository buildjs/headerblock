var headerblock = require('../'),
    fs = require('fs'),
    path = require('path'),
    crypto = require('crypto'),
    assert = require('assert'),
    reLeadingDot = /^\./;
    
function runAndCheck(targetPath, filetype) {
    // require the package json data
    var basePath = path.resolve(__dirname, targetPath),
        data = require(path.join(basePath, 'package.json')),
        referenceFile = path.join(basePath, 'output.' + filetype.replace(reLeadingDot, ''));
    
    return function(done) {
        headerblock(data, { filetype: filetype, nodate: true }, function(err, output) {
            assert.ifError(err);
            
            fs.writeFileSync(path.join(basePath, '__output.txt'), output, 'utf8');
            
            fs.readFile(referenceFile, 'utf8', function(err, reference) {
               assert.ifError(err, 'Unable to open reference file: ' + referenceFile);
               assert.equal(output, reference);
               done();
            });
        });
    };
}

describe('headerblock generation tests', function() {
    it('should be able to generate a simple js file', runAndCheck('simple', 'js'));
    it('should be able to generate a simple coffee file', runAndCheck('simple', 'coffee'));
});
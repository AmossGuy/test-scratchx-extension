(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.root = function(root, n) {
        return Math.pow(n, 1/root);
    };
    
    ext.power = function(n, power) {
        return Math.pow(n, power);
    }
    
    var counter = 0;
    
    ext.getcount = function() {
        return counter;
    }
    
    ext.resetcount = function() {
        counter = 0;
    }
    
    ext.incrcount = function() {
        counter += 1;
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'the %n th root of %n', 'root', 3, 8],
            ['r', '%n ^ %n', 'power', 3, 2],
            ['-'],
            ['r', 'counter', 'getcount'],
            [' ', 'reset counter', 'resetcount'],
            [' ', 'increment counter', 'incrcount']
        ]
    };

    // Register the extension
    ScratchExtensions.register('My Test Extension', descriptor, ext);
})({});

var util = require("util"),
    __ = function(s){return s;};

console.log(util.format(__("Pick %s"), "this"));



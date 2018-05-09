

//immediately invoked function - takes two objects
// safe code environment - build code inside

(function(global, $) {

// build object and prototype
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
        // function constructor - do not always have to use 'new' keyword
    }

// prototype - empty object
    Greetr.prototype = {};

    Greetr.init = function(firstName, lastName, language) {

        // function constructor - build object - give 3 props
        // default properties 
        var self = this;
        self.firstName =  firstName || ''; 
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    // objects that are created point here
    Greetr.init.prototype = Greetr.prototype;

    // pass to global object with alias
    // global.Greetr object points to var Greetr value - lines 9-10
    // global.G$ object points to var Greetr value - lines 9-10
    global.Greetr = global.G$ = Greetr;


}(window, jQuery));
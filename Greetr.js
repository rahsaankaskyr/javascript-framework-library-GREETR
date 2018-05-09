

//immediately invoked function - takes two objects
// safe code environment - build code inside

(function(global, $) {

// build object and prototype
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
        // function constructor - do not always have to use 'new' keyword
    }

    Greetr.init = function(firstName, lastName, language) {

        // default properties 
        var self = this;
        this.firstName: default, 
        this.lastName: default,
        this.language: en

    }


}(window, jQuery));
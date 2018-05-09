

//immediately invoked function - takes two objects
// safe code environment - build code inside

(function(global, $) {

// build object and prototype
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
        // function constructor - do not always have to use 'new' keyword
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',  
        es: 'Saludos'
    };
// log to console 
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'

    };

// prototype - empty object
// 
    Greetr.prototype = {
        // object literay syntax to create method
        // function expression defines it
        
        fullName: function() {
            return this.fullName + '' + this.lastName
           },
        
        // seperate methods with commas
        // throw an error when detecting languages
        validate: function(){
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + '' + this.firstName + '!';
        },

        formalGreetings: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // chainable methods 

        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreetings();
            }
            else {
                msg = this.greeting()
            }

            if (console) {
                console.log(msg);
            }
        }

    };

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
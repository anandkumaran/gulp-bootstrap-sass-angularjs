
	function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
var car = new Car('Porsche boxter');
function Car (desc) {
    this.desc = desc;
    this.color = "red";
}
 
Car.prototype.getInfo = function() {
    return 'A ' + this.color + ' ' + this.desc + '.';
};

console.log(typeof Car);
console.log(car.getInfo());

var bike =  Object();
console.log(typeof bike);

var b;
console.log($('.contain').width());
 
    $.fn.uidev = function(options) {
    	 // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );

        
        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
    };

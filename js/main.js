window.onload = function(){
    if (annyang) {
        var commands = {
            'mirror off': function() {
                document.getElementsByTagName('body')[0].className+=' blur'
            },
            'mirror on': function() {
                document.getElementsByTagName('body')[0].className-=' blur'
            },
            'What time Is It': function() {
                document.getElementById("readOut").innerHTML = "ADVENTURE TIME";
            },
            'My name is *name': function(name) {
		var userName = name
                document.getElementById("readOut").innerHTML = "Hello, " + name;
            },
            'What is your Name': function() {
                document.getElementById("readOut").innerHTML = "They call me Mirror.";
            },
            'Who created you': function() {
                document.getElementById("readOut").innerHTML = "Bunch o' Losers";
            },
            'Clear': function() {
                document.getElementById("readOut").innerHTML = "";
            },
            'Reload': function() {
                location.reload();
            },

        };
        annyang.addCommands(commands);
        annyang.start(); 
    }
}

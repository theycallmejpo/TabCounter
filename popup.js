document.getElementById("query").onkeypress = runScript;

function runScript(e) {
	 if (e.keyCode == 13) {
        var tb = document.getElementById("query");
        var text = tb.value;
        console.log(text);
        return false;
	}
}

chrome.tabs.getAllInWindow(null, function(tabs) {

	var numTabs = tabs.length;
	document.getElementById("add").innerHTML += numTabs + " tabs, bitch";

});
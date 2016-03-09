var page = function () {
    this.paraCount = 0
}

page.prototype.pullParagraph = function(url) {
    return fetch(url).then(function (result) { return result.json(); });
};

var mainFunction = new function () {
	var currentPage = new page();
	var firstPara = currentPage.pullParagraph("https://raw.githubusercontent.com/uresh88/Promises/master/firstPara.json");
    
	firstPara.then(function (res) {
	    console.log(res);
	})
}


document.addEventListener('DOMContentLoaded', mainFunction, false);
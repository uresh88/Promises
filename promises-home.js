var page = {
	var paraCount=0;
}

page.prototype.pullParagraph = function(url) {
	return fetch(url);
};

var mainFunction = new function () {
	var currentPage = new page();
	currentPage.pullParagraph("https://raw.githubusercontent.com/uresh88/Promises/master/firstPara.json");

}


document.addEventListener('DOMContentLoaded', fn, false);
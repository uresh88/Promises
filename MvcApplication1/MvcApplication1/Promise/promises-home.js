var page = function () {
    this.paraCount = 0
}

page.prototype.pullParagraph = function(url) {
    return fetch(url).then(function (result) { return result.json(); });
};

var mainFunction = new function () {
	var currentPage = new page();
	var firstPara = currentPage.pullParagraph("https://raw.githubusercontent.com/uresh88/Promises/master/paradetail.json");

	firstPara.then(function (res) {
	    var urlArray = res.Para;
	    urlArray.forEach(function (item) {

	        currentPage.pullParagraph(item)
	            .then(function (res) {
	                var para = document.getElementById("para_" + res.paraNum);
	                parat.innerHTML = res.Para;
	            });
	        
	    })
        return res;
    });
}


document.addEventListener('DOMContentLoaded', mainFunction, false);
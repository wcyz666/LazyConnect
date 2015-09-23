(function init(){
    var MyUtils = (function (){

        var ExtentionID = chrome.runtime.id;

        return {
            ExtId : ExtentionID,
        };
    })();

    window.addEventListener("load", function(){

        var form = document.forms[0],
            key,
            savedParams = MyUtils.getAll(),
            params;

		if ()

    }, false);

})();

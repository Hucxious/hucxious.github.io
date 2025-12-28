function loadSettings() {
    let theme = localStorage.getItem('theme');
    if (!theme) {
    //if (theme) {
    	theme = 'light'; // 首次打开，强制设为浅色模式
    	localStorage.setItem('theme', 'light'); // 缓存到本地
        document.documentElement.setAttribute('theme', theme);
    } else {
        document.documentElement.setAttribute('theme', theme);
    }

    let showBanner = localStorage.getItem("showBanner");
    if (showBanner == null || showBanner == undefined || showBanner == "true") {
        document.documentElement.setAttribute('showBanner', true)
    } else {
        document.documentElement.setAttribute('showBanner', false)
    }
};
loadSettings();

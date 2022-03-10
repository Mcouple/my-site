//网站标题控制
let routeTitle = "",
    siteTile = "";

function setTitle() {
    if (!routeTitle || !siteTile) {
        document.title = "loading...";
    } else if (routeTitle && !siteTile) {
        document.title = routeTitle;
    } else if (!routeTitle && siteTile) {
        document.title = siteTile
    } else {
        document.title = `${routeTitle}-${siteTile}`
    }
}
export default {
    //设置路由标题
    setRouteTitle(title) {
        routeTitle = title;
        setTitle();
    },
    //设置网站标题
    setSiteTitle(title) {
        siteTile = title;
        setTitle()
    }
}
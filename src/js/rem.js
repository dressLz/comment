var fun = function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;  //clientWidth窗口大小
            if (!clientWidth) return;
            if ((100 * (clientWidth / 750)) <= 160) {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            } else {
                docEl.style.fontSize = 100 + 'px';
            }
        }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
fun(document, window);
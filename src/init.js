export default function init() {

    let fav = document.createElement('link');
    fav.setAttribute("rel","icon");
    fav.setAttribute("href","favicon-32x32.png");
    fav.setAttribute("type","image/x-icon")
    document.head.appendChild(fav);

}

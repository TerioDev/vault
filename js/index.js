function popup(name, state) {
    let el = document.getElementById(name);
    if (el === undefined)
        return;

    let body = document.getElementsByTagName('body')[0];
    if (body) {
        body.classList.toggle('popup_active', state);
    }
    
    el.classList.toggle('active', state);
}

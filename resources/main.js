let ctabutton = document.getElementsByClassName('ctabutton');

//all buttons with class = ctabutton goes to the same googlfe form link.
for (let i = 0; i < ctabutton.length; i++) {
    ctabutton[i].onclick = function() {
        window.location.href = 'https://www.vg.no/';
    };
}


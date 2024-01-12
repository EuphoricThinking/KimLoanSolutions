function delayedAction() {
            var hiddenContent = document.getElementById("hidCont");
            hiddenContent.style.display = "block";
        }

function hideElem() {
            var hiddenContent = document.getElementById("hidCont");
            hiddenContent.style.display = "none";
        }


        window.onload = function() {
            setTimeout(delayedAction, 3000);
            setTimeout(hideElem, 5000);
        };

const loc = window.location.pathname;
const dir = loc.substring(0, loc.lastIndexOf('/'));
const mapa = document.getElementById('mapa')
const czasPrzejazdu = document.getElementById('czas-przejazdu');
const opóźnienie = document.getElementById('opóźnienie');

mapa.src = "/static/media/pusta.png";

const godzinaPrzyjazduGłówna = new Date();
godzinaPrzyjazduGłówna.setHours(13);
godzinaPrzyjazduGłówna.setMinutes(0);

const godzinaPrzyjazduAlternatywna = new Date();
godzinaPrzyjazduGłówna.setHours(13);
godzinaPrzyjazduGłówna.setMinutes(12);

const trasy = {
    główna: {
        czas: 36 * 60 * 1000,
        środki: [['R7', 'pociąg']],
        godzinaPrzyjazdu: godzinaPrzyjazduGłówna,
        godzinaDojazdu: godzinaPrzyjazduGłówna + 36 * 60 * 1000,
        opóźnienie: [40 * 60 * 1000]
    },
    alternatywna: {
        czas: 47 * 60 * 1000,
        środki: [['521', 'autobus'], ['502', 'autobus'], ['158', 'autobus']],
        godzinaPrzyjazdu: godzinaPrzyjazduAlternatywna,
        godzinaDojazdu: godzinaPrzyjazduAlternatywna + 36 * 60 * 1000,
        opóźnienie: [0, 0, 2 * 60 * 1000]
    }
};

const wyswietlGlownaTrase = () => {
    mapa.src = `/static/media/pociag.png`;
    czasPrzejazdu.innerHTML = `${trasy.główna.czas / 60 / 1000}min`;
};
const wyswietlAlternatywnaTrase = () => {
    mapa.src = `/static/media/autobus.png`;
    czasPrzejazdu.innerHTML = `${trasy.alternatywna.czas / 60 / 1000}min`;
};
const wyswietlPustaMape = () => {
    mapa.src = `/static/media/pusta.png`;
    czasPrzejazdu.innerHTML = "";
};

document.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.shiftKey) {
        switch (e.code) {
            case 'KeyQ':
                wyswietlGlownaTrase();
                break;
            case 'KeyW':
                wyswietlAlternatywnaTrase();
                break;
            case 'KeyE':
                wyswietlPustaMape();
                break;
        }
        console.log(e.code)
    }
});

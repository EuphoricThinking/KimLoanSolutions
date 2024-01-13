const moveDateByMinutes = (date, minutes) => {
    const newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() + minutes);
  
    return newDate;
};

function delayedAction() {
            var hiddenContent = document.getElementById("hidCont");
            if (hiddenContent.style.display) hiddenContent.style.display = "block";
        }

function hideElem() {
            var hiddenContent = document.getElementById("hidCont");
            if (hiddenContent.style.display) hiddenContent.style.display = "none";
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
const godzinaPrzyjazdu = document.getElementById('godzina-odjazdu');
const godzinaDojazdu = document.getElementById('godzina-dojazdu');
const infoOPołączeniu = document.getElementById('info-o-połączeniu');
const szczegółyToggle = document.getElementById('szczegóły-toggle');

let godzinaPrzyjazduGłówna = new Date();
godzinaPrzyjazduGłówna.setHours(13, 4);

let godzinaPrzyjazduAlternatywna = new Date();
godzinaPrzyjazduAlternatywna.setHours(13, 12);

const czasDojazduGłównej = 36;
const czasDojazduAlternatywnej = 47;

const trasy = {
    główna: {
        czas: czasDojazduGłównej,
        środki: [['R7', 'pociąg']],
        godzinaPrzyjazdu: godzinaPrzyjazduGłówna,
        godzinaDojazdu: godzinaPrzyjazduGłówna + czasDojazduGłównej,
        opóźnienie: 40
    },
    alternatywna: {
        czas: czasDojazduAlternatywnej,
        środki: [['521', 'autobus'], ['502', 'autobus'], ['158', 'autobus']],
        godzinaPrzyjazdu: godzinaPrzyjazduAlternatywna,
        godzinaDojazdu: godzinaPrzyjazduAlternatywna + czasDojazduAlternatywnej,
        opóźnienie: 2
    }
};
console.log(godzinaPrzyjazdu, godzinaDojazdu);

const wyświetlTrasę = (trasa) => {
    szczegółyToggle.style.display = 'block';
    czasPrzejazdu.innerHTML = `${trasa.czas}min`;
    godzinaPrzyjazdu.innerHTML = `${trasa.godzinaPrzyjazdu.getHours()}:${trasa.godzinaPrzyjazdu.getMinutes() < 10 ? '0' : ''}${trasa.godzinaPrzyjazdu.getMinutes()}`;
    const rzeczywistaGodzinaDojazdu = moveDateByMinutes(trasa.godzinaPrzyjazdu, trasa.czas);
    godzinaDojazdu.innerHTML = `${rzeczywistaGodzinaDojazdu.getHours()}:${rzeczywistaGodzinaDojazdu.getMinutes() < 10 ? '0' : ''}${rzeczywistaGodzinaDojazdu.getMinutes()}`;
    opóźnienie.innerHTML = `${trasa.opóźnienie}min`;
}

const togglujSzczegóły = () => {
    const włączone = infoOPołączeniu.style.display === 'block';
    infoOPołączeniu.style.display = włączone ? 'none' : 'block';
    szczegółyToggle.innerHTML = włączone ? 'Rozwiń szczegóły' : 'Ukryj szczegóły';
}

const wyświetlGłównąTrasę = () => {
    mapa.src = `/static/media/pociag.png`;
    wyświetlTrasę(trasy.główna);
};
const wyswietlAlternatywnaTrase = () => {
    mapa.src = `/static/media/autobus.png`;
    wyświetlTrasę(trasy.alternatywna);
};
const wyswietlPustaMape = () => {
    mapa.src = `/static/media/pusta.png`;
    infoOPołączeniu.style.display = 'none';
    szczegółyToggle.innerHTML = 'Rozwiń szczegóły';
    szczegółyToggle.style.display = 'none';
};

document.addEventListener('keydown', (e) => {
    if (e.shiftKey) {
        switch (e.code) {
            case 'KeyQ':
                wyświetlGłównąTrasę();
                break;
            case 'KeyW':
                wyswietlAlternatywnaTrase();
                break;
            case 'KeyE':
                wyswietlPustaMape();
                break;
        }
    }
});

wyświetlGłównąTrasę();

szczegółyToggle.addEventListener('click', () => {
    togglujSzczegóły();
})
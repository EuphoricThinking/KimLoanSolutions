window.addEventListener('load', init);

const moveDateByMinutes = (date, minutes) => {
    const newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() + minutes);
  
    return newDate;
};

function checkAndShow() {
    var currentTime = new Date();
    console.log(currentTime)
    var targetTime = new Date(currentTime);
    targetTime.setHours(14, 04, 0, 0); // Set the target time to 12:34:00 // START

    var endTime = new Date(currentTime)
    endTime.setHours(14,05,0,0)  // END

    var getCont = document.getElementById('hidCont')
    if (getCont == null) {
        clearInterval(intervalId);
        return;
    }

    if (currentTime >= targetTime && currentTime <= endTime) {
        document.getElementById('hidCont').style.display = 'block';

    }
    console.log('check')
    if (currentTime > endTime) {
        document.getElementById('hidCont').style.display = 'none';
        clearInterval(intervalId);
    }
}

var intervalId = setInterval(checkAndShow, 1000);


const loc = window.location.pathname;
const dir = loc.substring(0, loc.lastIndexOf('/'));
const mapa = document.getElementById('mapa')
const czasPrzejazdu = document.getElementById('czas-przejazdu');
const opóźnienie = document.getElementById('opóźnienie');
const godzinaPrzyjazdu = document.getElementById('godzina-odjazdu');
const godzinaDojazdu = document.getElementById('godzina-dojazdu');
const infoOPołączeniu = document.getElementById('info-o-połączeniu');
const szczegółyToggle = document.getElementById('szczegóły-toggle');
const środki = document.getElementById('środki');

let godzinaPrzyjazduGłówna = new Date();
godzinaPrzyjazduGłówna.setHours(13, 4);

let godzinaPrzyjazduAlternatywna = new Date();
godzinaPrzyjazduAlternatywna.setHours(13, 12);

const czasDojazduGłównej = 36;
const czasDojazduAlternatywnej = 47;

const trasy = {
    główna: {
        czas: czasDojazduGłównej,
        środki: 'pociąg R7',
        godzinaPrzyjazdu: godzinaPrzyjazduGłówna,
        godzinaDojazdu: godzinaPrzyjazduGłówna + czasDojazduGłównej,
        opóźnienie: 40,
    },
    alternatywna: {
        czas: czasDojazduAlternatywnej,
        środki: 'autobus 521 > autobus 502 > autobus 159',
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
    środki.innerHTML = trasa.środki;
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
            case 'KeyG':
                wyświetlGłównąTrasę();
                break;
            case 'KeyA':
                wyswietlAlternatywnaTrase();
                break;
            case 'KeyP':
                wyswietlPustaMape();
                break;
            case 'KeyS': {
                if (szczegółyToggle.style.display !== 'none') {
                    togglujSzczegóły();
                }

                break;
            }
            case 'KeyU': {
                alert('Opóźnienie na trasie: 40 minut\nWyświetl alternatywną trasę')
                wyswietlAlternatywnaTrase();
                break;
            }
        }
    }
});

wyświetlGłównąTrasę();

szczegółyToggle.addEventListener('click', () => {
    togglujSzczegóły();
});

mapa.addEventListener('contextmenu', function(event) {
    // Check if the Ctrl key is pressed
    if (event.ctrlKey && szczegółyToggle.style.display !== 'none') {
        event.preventDefault();
        infoOPołączeniu.style.display = 'block';
        szczegółyToggle.innerHTML = 'Ukryj szczegóły';
    }
  });

function displayAlert() {
            const href = window.location.href;
            const page_name = href.split('/').slice(-2)[0];
            if (page_name === "dodaj_trase") {
                        alert("Poprzednia trasa zostanie usunięta.")
            }
}

function hideTimeWindow() {
            const dropdown = document.getElementById("okno_trasa");
            const selectedVal = dropdown.options[dropdown.selectedIndex].value;
            const toggle = document.getElementsByClassName("jesli_okno_czasowe")[0];
            if (selectedVal !== "okno") {
                        toggle.style.display = "none";
            }
            else {
                        toggle.style.display = "block";
            }
}

function init() {
            displayAlert();
            hideTimeWindow();
            const dropdown = document.getElementById("okno_trasa");
            dropdown.addEventListener("change", hideTimeWindow);
}


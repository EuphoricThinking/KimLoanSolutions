# niezbędne moduły pythonowskie
`django`

# uruchamianie serwera
`python manage.py runserver` z terminala w katalogu z manage.py

# wygląd strony
zachodSlonca/templates/zachodSlonca (pliki powinny być w ,,powtórzonym" zachodSlonca - przynajmniej tak działa - nie przemieszczać).

# funkcje obsługujące requesty po stronie serwera
zachodSlonca/views.py

# definiowanie nowych linków
zachodSlonca/urls.py

# jak dodawać nowe linki
1. zachodSlonca/templates/zachodSlonca/*.html - href="{% url 'zachodSlonca:moj_link' %}
2. zachodSlonca/urls.py - dodać do listy urlpatterns path("moj_link", views.nazwa_obslugujacej_funkcji_w_views, name="moj_link")
3. zachodSlonca/views.py - dodać funkcję moj_link(request //ewentualnie argumenty przekazane w templacie, np. wartości zaznaczone w checkboksach powinny zostać odebrane jako lista, jeśli dobrze pamiętam//)

# jak zmieniać mapę
- `Shift` + `G` — trasa główna
- `Shift` + `A` — trasa alternatywna
- `Shift` + `P` — pusta mapa
- `Shift` + `S` — szczegóły
- `Shift` + `U` - uwaga, opóźnienie: alert

# wysuwanie bloku
przez przycisk albo prawy przycisk myszy z controlem
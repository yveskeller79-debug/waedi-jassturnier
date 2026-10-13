// =====================================================================
//  WÄDI JASSTURNIER – DATEN
//  Nur diese Datei muss jedes Jahr angepasst werden, nie die index.html.
//  Datumsformat: "JJJJ-MM-TT"  ·  Zeiten: "HH:MM"
// =====================================================================

window.TURNIER = {

  // ---------------------------------------------------------------
  //  AKTUELLES TURNIER
  // ---------------------------------------------------------------
  aktuell: {
    ausgabe: 8,                          // 8. Wädi Jassturnier
    datum: "2026-11-21",
    anmeldeschluss: "2026-11-14",
    anmeldungOffen: true,                // false = Formular wird ausgeblendet
    maxTeilnehmende: 0,                  // 0 = unbeschränkt, sonst Anzahl Plätze (danach Warteliste)

    ort: {
      name: "Restaurant Beispiel",
      adresse: "Seestrasse 1, 8820 Wädenswil",
      kartenLink: "https://www.google.com/maps/search/?api=1&query=Seestrasse+1+8820+Wädenswil",
      hinweis: "5 Gehminuten vom Bahnhof Wädenswil. Wenige Parkplätze vorhanden."
    },

    zeitplan: [
      { zeit: "13:00", programm: "Türöffnung & Check-in" },
      { zeit: "13:30", programm: "Begrüssung und Auslosung" },
      { zeit: "13:45", programm: "1. Passe" },
      { zeit: "15:00", programm: "2. Passe" },
      { zeit: "16:15", programm: "Pause mit Kaffee & Kuchen" },
      { zeit: "16:45", programm: "3. Passe" },
      { zeit: "18:00", programm: "4. Passe" },
      { zeit: "19:30", programm: "Znacht, Rangverkündigung & Preisverteilung" }
    ],

    modus: [
      "Schieber mit Deutschschweizer Karten",
      "4 Passen à 12 Spiele",
      "Partner werden pro Passe neu zugelost",
      "Gewertet wird die Einzelpunktzahl über alle Passen"
    ],

    preise: "Wanderpokal für den Sieger, Sachpreise für alle",

    kontakt: {
      name: "OK Wädi Jassturnier",
      email: "info@waedi-jassturnier.ch",
      telefon: "079 000 00 00"
    }
  },

  // ---------------------------------------------------------------
  //  ANMELDUNG
  //  scriptUrl: Web-App-URL des Google Apps Script
  //  (beginnt mit https://script.google.com/macros/s/…/exec).
  //  Leer lassen → Formular zeigt einen Hinweis statt zu senden.
  //  belegungAnzeigen: true = "32 von 48 Plätzen belegt" auf der Website
  // ---------------------------------------------------------------
  anmeldung: {
    scriptUrl: "https://script.google.com/macros/s/AKfycbzOyCBLfj5wYIH9ZWeWl98OImmJpT5uZfpfAWzJeiEmIwsRVtXHu3pAC39ff-AN3QynEQ/exec",
    belegungAnzeigen: true
  },

  // ---------------------------------------------------------------
  //  ERGEBNISSE / EHRENTAFEL
  //  Neues Jahr einfach oben einfügen.
  //  sieger:     Name der Siegerin / des Siegers
  //  siegerFoto: Foto im Ordner "fotos" (z. B. "fotos/2026.jpg"),
  //              weglassen = Platzhalter "Foto folgt"
  //  rangliste:  optional – sobald vorhanden, erscheinen Podest und Tabelle.
  //
  //  Vorlage ab 2026:
  //  {
  //    jahr: 2026, sieger: "Name", siegerFoto: "fotos/2026.jpg",
  //    ort: "Restaurant …, Wädenswil", teilnehmende: 40,
  //    rangliste: [
  //      { rang: 1, name: "Name", punkte: 4500 },
  //      { rang: 2, name: "Name", punkte: 4400 },
  //      { rang: 3, name: "Name", punkte: 4300 }
  //    ]
  //  },
  // ---------------------------------------------------------------
  archiv: [
    { jahr: 2025, sieger: "Karin",    siegerFoto: "fotos/2025.jpg" },
    { jahr: 2024, sieger: "Bobby",    siegerFoto: "fotos/2024.jpg" },
    { jahr: 2023, sieger: "Nina",     siegerFoto: "fotos/2023.jpg" },
    { jahr: 2021, sieger: "Schlagi",  siegerFoto: "fotos/2021.jpg" }
  ],

  // ---------------------------------------------------------------
  //  PROGNOSE (Spezialkachel am Ende der Ehrentafel)
  //  Löschen oder auf null setzen, sobald der Fuchs tatsächlich gewinnt.
  // ---------------------------------------------------------------
  prognose: {
    jahr: 2999,
    name: "Fuchs",
    foto: "fotos/2999.jpg",
    text: "Gemäss aktueller Hochrechnung. Es gibt Hoffnung. 🦊"
  }
};

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
    maxTeilnehmende: 48,

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

    startgeld: "CHF 30.– inkl. Znacht",
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
  //  Leer lassen → Anmeldung öffnet stattdessen eine E-Mail an kontakt.email.
  //  belegungAnzeigen: true = "32 von 48 Plätzen belegt" auf der Website
  // ---------------------------------------------------------------
  anmeldung: {
    scriptUrl: "",
    belegungAnzeigen: true
  },

  // ---------------------------------------------------------------
  //  ERGEBNISSE VERGANGENER JAHRE (BEISPIELDATEN – ersetzen)
  //  Neues Jahr einfach oben einfügen.
  // ---------------------------------------------------------------
  archiv: [
    {
      jahr: 2025, ausgabe: 7, ort: "Restaurant Beispiel, Wädenswil", teilnehmende: 44,
      rangliste: [
        { rang: 1, name: "Reto Bachmann",   punkte: 4486 },
        { rang: 2, name: "Ursula Keller",   punkte: 4412 },
        { rang: 3, name: "Marco Steiner",   punkte: 4398 },
        { rang: 4, name: "Heidi Zollinger", punkte: 4351 },
        { rang: 5, name: "Peter Hauser",    punkte: 4307 },
        { rang: 6, name: "Sandra Frei",     punkte: 4288 },
        { rang: 7, name: "Thomas Huber",    punkte: 4251 },
        { rang: 8, name: "Beat Brunner",    punkte: 4213 }
      ]
    },
    {
      jahr: 2024, ausgabe: 6, ort: "Kulturhaus Beispiel, Wädenswil", teilnehmende: 40,
      rangliste: [
        { rang: 1, name: "Ursula Keller",   punkte: 4521 },
        { rang: 2, name: "Beat Brunner",    punkte: 4433 },
        { rang: 3, name: "Reto Bachmann",   punkte: 4402 },
        { rang: 4, name: "Monika Graf",     punkte: 4366 },
        { rang: 5, name: "Marco Steiner",   punkte: 4322 },
        { rang: 6, name: "Hans Weber",      punkte: 4290 },
        { rang: 7, name: "Sandra Frei",     punkte: 4247 },
        { rang: 8, name: "Peter Hauser",    punkte: 4198 }
      ]
    },
    {
      jahr: 2023, ausgabe: 5, ort: "Restaurant Beispiel, Wädenswil", teilnehmende: 36,
      rangliste: [
        { rang: 1, name: "Ursula Keller",   punkte: 4398 },
        { rang: 2, name: "Hans Weber",      punkte: 4377 },
        { rang: 3, name: "Thomas Huber",    punkte: 4341 },
        { rang: 4, name: "Reto Bachmann",   punkte: 4310 },
        { rang: 5, name: "Heidi Zollinger", punkte: 4279 },
        { rang: 6, name: "Beat Brunner",    punkte: 4233 }
      ]
    }
  ]
};

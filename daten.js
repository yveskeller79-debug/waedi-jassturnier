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
    ausgabe: 12,                         // 12. Wädi Jassturnier (seit 2015 jährlich)
    datum: "2026-11-14",
    anmeldeschluss: "2026-11-14",
    anmeldungOffen: true,                // false = Formular wird ausgeblendet
    maxTeilnehmende: 0,                  // 0 = unbeschränkt, sonst Anzahl Plätze (danach Warteliste)

    ort: {
      name: "Restaurant Gambrinus",
      adresse: "Wädenswil",
      kartenLink: "https://www.google.com/maps/search/?api=1&query=Restaurant+Gambrinus+Wädenswil",
      hinweis: "Der definitive Austragungsort wird noch bekannt gegeben – aktuell ist das Restaurant Gambrinus vorgesehen."
    },

    //  zeit = Beginn, bis = optionales Ende
    zeitplan: [
      { zeit: "17:00", bis: "17:45", programm: "Eintreffen, Apéro & letzte Ausreden vorbereiten" },
      { zeit: "17:45",               programm: "Auslosung, kurze Regelkunde und dann geht’s los." },
      { zeit: "18:00", bis: "19:30", programm: "Runde 1 & 2 – jetzt wird um Ruhm und Ehre gekämpft." },
      { zeit: "19:30", bis: "20:30", programm: "Essen & Verschnaufpause – die Karten dürfen kurz ruhen." },
      { zeit: "20:30", bis: "22:00", programm: "Runde 3 & 4 – jetzt zeigt sich, wer wirklich das Zeug zum Jasskönig oder zur Jasskönigin hat." },
      { zeit: "22:15",               programm: "Rangverkündigung – Zeit für Ruhm, Ehre und die besten Ausreden des Abends." }
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
    {
      jahr: 2025, sieger: "Karin Solèr", siegerFoto: "fotos/2025.jpg", teilnehmende: 16,
      rangliste: [
        { rang:  1, name: "Karin Solèr",       punkte: 4702 },
        { rang:  2, name: "Angelika Küng",     punkte: 4237 },
        { rang:  3, name: "Christa Fuchs",     punkte: 4110 },
        { rang:  4, name: "Marc Weber",        punkte: 4100 },
        { rang:  5, name: "André Zollinger",   punkte: 3981 },
        { rang:  6, name: "Philippe Lenherr",  punkte: 3883 },
        { rang:  7, name: "Oliver Küng",       punkte: 3859 },
        { rang:  8, name: "Vera Stahel",       punkte: 3852 },
        { rang:  9, name: "Bobby Stahel",      punkte: 3815 },
        { rang: 10, name: "Stefan Fuchs",      punkte: 3755 },
        { rang: 11, name: "Patrik Schlageter", punkte: 3751 },
        { rang: 12, name: "Fabienne Weber",    punkte: 3729 },
        { rang: 13, name: "Yves Keller",       punkte: 3622 },
        { rang: 14, name: "Marc Gonzales",     punkte: 3589 },
        { rang: 15, name: "Matthias Kost",     punkte: 3588 },
        { rang: 16, name: "Barbara Knobel",    punkte: 3315 }
      ]
    },
    { jahr: 2024, sieger: "Bobby Stahel",       siegerFoto: "fotos/2024.jpg" },
    { jahr: 2023, sieger: "Nina",               siegerFoto: "fotos/2023.jpg" },
    { jahr: 2022, sieger: "Nicolas Baumgartner", siegerFoto: "fotos/2022.jpg" },
    { jahr: 2021, sieger: "Florian Stahel",     siegerFoto: "fotos/2021.jpg" },
    { jahr: 2020, sieger: "Patrick Schlageter", siegerFoto: "fotos/2020.jpg" },
    { jahr: 2019, sieger: "Yves Keller",        siegerFoto: "fotos/2019.jpg" },
    { jahr: 2018, sieger: "Barbara Füchslin",   siegerFoto: "fotos/2018.jpg" },
    { jahr: 2017, sieger: "Katya Füchslin",     siegerFoto: "fotos/2017.jpg" },
    { jahr: 2016, sieger: "Bobby Stahel",       siegerFoto: "fotos/2016.jpg" },
    { jahr: 2015, sieger: "Oliver Küng",        siegerFoto: "fotos/2015.jpg" }
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

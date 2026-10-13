// =====================================================================
//  WÄDI JASSCUP – DATEN
//  Nur diese Datei muss jedes Jahr angepasst werden, nie die index.html.
//  Datumsformat: "JJJJ-MM-TT"  ·  Zeiten: "HH:MM"
// =====================================================================

window.TURNIER = {

  // ---------------------------------------------------------------
  //  AKTUELLES TURNIER
  // ---------------------------------------------------------------
  aktuell: {
    ausgabe: 12,                         // 12. Wädi Jasscup (seit 2015 jährlich)
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
      "4 Runden à 12 Spiele",
      "Partner werden pro Runde neu zugelost",
      "Gewertet wird die Einzelpunktzahl über alle Runden",
      "Kein Wiis",
      "Match mit 100 Punkten Bonus",
      "Der Sieger darf den Modus für das kommende Jahr festlegen"
    ],

    preise: "Wanderpokal und viel Ruhm für den Sieger",
    pokalFoto: "fotos/Pokal.jpg",        // Foto des Wanderpokals (oben auf der Seite), "" = ausblenden

    kontakt: {
      name: "OK Wädi Jasscup",
      email: "yves.keller79@gmail.com",
      telefon: "079 212 04 34"
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
  //              runden: [R1, R2, R3, R4] optional – zeigt die Rundenpunkte in der Tabelle.
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
        { rang:  3, name: "Christa Füchslin",   punkte: 4110 },
        { rang:  4, name: "Marc Weber",        punkte: 4100 },
        { rang:  5, name: "André Zollinger",   punkte: 3981 },
        { rang:  6, name: "Philippe Lenherr",  punkte: 3883 },
        { rang:  7, name: "Oliver Küng",       punkte: 3859 },
        { rang:  8, name: "Vera Stahel",       punkte: 3852 },
        { rang:  9, name: "Bobby Stahel",      punkte: 3815 },
        { rang: 10, name: "Stefan Füchslin",   punkte: 3755 },
        { rang: 11, name: "Patrik Schlageter", punkte: 3751 },
        { rang: 12, name: "Fabienne Weber",    punkte: 3729 },
        { rang: 13, name: "Yves Keller",       punkte: 3622 },
        { rang: 14, name: "Marc Gonzales",     punkte: 3589 },
        { rang: 15, name: "Matthias Kost",     punkte: 3588 },
        { rang: 16, name: "Barbara Knobel",    punkte: 3315 }
      ]
    },
    { jahr: 2024, sieger: "Bobby Stahel",       siegerFoto: "fotos/2024.jpg" },
    { jahr: 2023, sieger: "Nina Ambrogio",       siegerFoto: "fotos/2023.jpg" },
    { jahr: 2022, sieger: "Nicolas Baumgartner", siegerFoto: "fotos/2022.jpg" },
    {
      jahr: 2021, sieger: "Florian Stahel", siegerFoto: "fotos/2021.jpg", teilnehmende: 16,
      rangliste: [
        { rang:  1, name: "Florian Stahel",    runden: [1461, 1177, 911, 948], punkte: 4497 },
        { rang:  2, name: "Patrik Schlageter", runden: [1134, 1263, 986, 1037], punkte: 4420 },
        { rang:  3, name: "Vera Stahel",       runden: [1113, 1263, 998, 993], punkte: 4367 },
        { rang:  4, name: "Yves Keller",             runden: [1461, 807, 1073, 889], punkte: 4230 },
        { rang:  5, name: "André Zollinger",   runden: [1134, 995, 998, 1037], punkte: 4164 },
        { rang:  6, name: "Joni",              runden: [871, 929, 1163, 1095], punkte: 4058 },
        { rang:  7, name: "Bobby Stahel",      runden: [773, 1127, 1073, 993], punkte: 3966 },
        { rang:  8, name: "Philipp Strickler",  runden: [723, 1177, 911, 1095], punkte: 3906 },
        { rang:  9, name: "Angelika Küng",     runden: [992, 1127, 884, 889], punkte: 3892 },
        { rang: 10, name: "Jill Schlageter",              runden: [992, 721, 1163, 995], punkte: 3871 },
        { rang: 11, name: "Oliver Küng",       runden: [1113, 957, 884, 889], punkte: 3843 },
        { rang: 12, name: "Nina Ambrogio",     runden: [1092, 721, 986, 995], punkte: 3794 },
        { rang: 13, name: "Karin Solèr",       runden: [1092, 807, 1000, 891], punkte: 3790 },
        { rang: 14, name: "Stefan Füchslin",   runden: [871, 929, 998, 948], punkte: 3746 },
        { rang: 15, name: "Simon Notter",             runden: [773, 995, 1000, 891], punkte: 3659 },
        { rang: 16, name: "Sandro",            runden: [723, 957, 998, 889], punkte: 3567 }
      ]
    },
    { jahr: 2020, sieger: "Patrik Schlageter",  siegerFoto: "fotos/2020.jpg" },
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
    name: "Stefan Füchslin",
    foto: "fotos/2999.jpg",
    text: "Gemäss aktueller Hochrechnung. Es gibt Hoffnung. 🦊"
  }
};

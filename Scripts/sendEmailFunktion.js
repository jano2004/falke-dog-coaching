function sendEmailWithSelectedLeistungsType() {
    var leistungenType = document.getElementById('leistungenType').value;
    sendEmailWithLeistungsType(leistungenType);
}

function sendEmailWithLeistungsType(leistungenType) {
    var emailAddress = 'example@falke-dog-coaching.com'; 
    var subject;
    var subject;
    switch (leistungenType) {
        case "leistungen":
            subject = "Allgemeine Anfrage";
            break;
        case "klassisch":
            subject = "Anfrage - Klassisches Hundetraining";
            break;
        case "teamarbeit":
            subject = "Anfrage - Team-Arbeit und Anlageförderung";
            break;
        case "diensthund":
            subject = "Anfrage - Diensthundetraining";
            break;
        case "workshops":
            subject = "Anfrage - Workshops / Sonstiges";
            break;
        default:
            console.log("FATAL-ERROR: no case selected");
            return; 
    }
    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject);
    window.location.href = mailtoLink; 
}


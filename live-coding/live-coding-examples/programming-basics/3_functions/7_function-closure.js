
function aussen()
{
    let ersteNummer = 10;

    return function()
    {
        let zweiteNummer = 20;

        console.log("ersteNummer: " + ersteNummer, "zweiteNummer: " + zweiteNummer);

        ersteNummer++;
    }
}

// Wir haben hier 2 funktionen:
// - Die "aussen" funktion, die die variable "ersteNummer" beinhasltet und die "innere" funktion returned.
// - Die "innen" funktion, die die variable "zweiteNummer" beinhaltet und die "äussere" variable "ersteNummer" innerhalb des code-blocks anspricht.

// Das scope der variable ersteNummer ist auf die funktion beschränkt.
// Das scope der variable zweiteNummer ist auf die innere funktion beschränkt.

const ersteFunktion = aussen();

ersteFunktion();
ersteFunktion();
ersteFunktion();
// ersteFunktion();
// ersteFunktion();
// ersteFunktion();
// ersteFunktion();

const o1 = {
    nazev: "Just Food",
    cena: 50
}

const o2 = {
    nazev: "Your Mama",
    cena: 100
}

const o3 = {
    nazev: "Flavour Heaven",
    cena: 500
}

const vstup1 = prompt(`Vyberte si číslo podniku ze kterého chcete objednat: 
1 - Just Food
2 - Your Mama
3 - Flavour Haven`)
const vstup2 = prompt("pro kolik lidí máme objednat catering?")
const vstup3 = prompt("Zadejte název události")

const myFce = (pocetLidi, o, event) => {
    const celkem = Number(pocetLidi) * o.cena
    document.body.innerHTML = `Událost ${event} s cateringem od ${o.nazev} pro ${pocetLidi} lidí za ${celkem},-`
}

if (vstup1 == 1) {
    myFce(vstup2, o1, vstup3)
} else if (vstup1 == 2) {
    myFce(vstup2, o2, vstup3)
} else if (vstup1 == 3) {
    myFce(vstup2, o3, vstup3)
} else {
    document.body.innerHTML = `neplatná volba`
}
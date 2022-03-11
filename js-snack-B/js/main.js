/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */

    const automobili = [
        {
            marca : "pegeout",
            modello: "108",
            alimentazione: "gpl",
        },
        {
            marca : "pegeout",
            modello: "208",
            alimentazione: "benzina",
        },
        {
            marca : "pegeout",
            modello: "5008",
            alimentazione: "diesel",
        },
        {
            marca : "toyota",
            modello: "celica",
            alimentazione: "benzina",
        },
        {
            marca : "subaru",
            modello: "impreza",
            alimentazione: "benzina",
        },
        {
            marca : "toyota",
            modello: "ch-r",
            alimentazione: "elettrica",
        },
        {
            marca : "volkswagen",
            modello: "up",
            alimentazione: "metano" ,
        },
        {
            marca : "nissan",
            modello: "gtr",
            alimentazione: "benzina",
        },
        {
            marca : "nissan",
            modello: "pulsar",
            alimentazione: "diesel",
        },
        {
            marca : "chevrolet",
            modello: "camaro ss",
            alimentazione: "gpl",
        },
        {
            marca : "chevrolet",
            modello: "matiz",
            alimentazione: "metano",
        },
        {
            marca : "fiat",
            modello: "panda",
            alimentazione: "metano",
        },

    ];


    /* Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. */
    let benzina = [];
    let diesel = [];
    let allTheRest = [];


    automobili.forEach((element) => {
        if(element.alimentazione === "benzina"){
            benzina.push(element)
        }else if(element.alimentazione === "diesel"){
            diesel.push(element)
        }else{
            allTheRest.push(element)
        }
    }
    );

    console.table(benzina);
    console.table(diesel);
    console.table(allTheRest);
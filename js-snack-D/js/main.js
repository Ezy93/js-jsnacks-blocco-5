/**
 * 
 * 
    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.

 * 
 */

    const animal =[
        { 
            nome: 'leone',
            famiglia: 'felidi',
            classe: 'mammiferi', 
        },

        { 
            nome: 'cane',
            famiglia: 'canidi',
            classe: 'mammiferi', 
        },

        { 
            nome: 'gallina',
            famiglia: 'fasianidi',
            classe: 'uccelli', 
        },

        {
            nome: "ornitoriunco",
            famiglia: "gesuiti",
            classe: "mammiferi",
        },

        {
            nome: "cocorita",
            famiglia: "volatili",
            classe: "ovipari",
        },

        {
            nome: "coccodrillo",
            famiglia: "rettili",
            classe: "ovipari",
        }
    ]

    let mammiferi = animal.filter((elemento) => {
        if(elemento.classe === "mammiferi"){
            return true
        }
    });
    console.table(mammiferi)
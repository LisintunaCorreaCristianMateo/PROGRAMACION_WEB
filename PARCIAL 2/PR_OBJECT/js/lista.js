let estudiantes = [
    {
        nombre: "Estiven",
        apellido: "Cevallos",
        edad: 20,
        saludar: function () {
            console.log("Hola, mi nombre es " + this.nombre + " y mi apellido es " + this.apellido)
        }
    },
    {
        nombre: "Cristian",
        apellido: "Cevallos",
        edad: 20,
        saludar: function () {
            console.log("Hola, mi nombre es " + this.nombre + " y mi apellido es " + this.apellido)

        },

    },
    {
        nombre: "Marcos",
        apellido: "Cevallos",
        edad: 20,
        saludar: function () {
            console.log("Hola, mi nombre es " + this.nombre + " y mi apellido es " + this.apellido)

        },

    },
]
console.log(estudiantes[1].nombre);
console.log(estudiantes[1].saludar());
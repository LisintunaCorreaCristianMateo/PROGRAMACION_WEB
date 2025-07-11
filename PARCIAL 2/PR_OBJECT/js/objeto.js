let persona={
    nombre:"Cristian",
    apellido:"Cevallos",
    edad:20,
    musica_favorita:["Rock","Pop","Reggaeton"],
    saludar: function(){
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
    },

}
console.log(persona.apellido);
console.log(persona.musica_favorita[2]);
console.log(persona);
console.log(persona.saludar());
persona.nombre="Marcos";
console.log(persona);
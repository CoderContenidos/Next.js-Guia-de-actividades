
export default function contactClass() {

    class Contacto {
        constructor(id, nombre, apellido, telefono,seniority) {
          this.id = id;
          this.nombre = nombre;
          this.apellido = apellido;
          this.telefono = telefono;
          this.seniority = seniority;
        }
      }
      
      let contactos = [];
    
      const contacto1 = new Contacto(1, "Ezequiel", "Tartaglia", 123456789, "Semisenior");
      const contacto2 = new Contacto(2, "Matias", "Rodriguez", 123456789, "Junior");
      const contacto3 = new Contacto(3, "Melina", "Lencina", 123456789, "Junior Advance");
      const contacto4 = new Contacto(4, "Roberto", "Gayol", 123456789, "Senior");

      contactos.push(contacto1, contacto2, contacto3, contacto4);

      return contactos
}

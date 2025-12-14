export const vehiculos = [
  {
    id: 1,

    // Identidad
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2018,

    // Precio / uso
    precio: 11500,        // número (sin símbolos) para poder ordenar/filtrar
    kilometraje: 85000,   // número

    // Mecánica
    transmision: "Automática",
    combustible: "Gasolina",
    motor: "1.8L",
    traccion: "FWD",

    // Estado y carrocería
    color: "Blanco",
    estado: "Excelente",       // Excelente | Bueno | Regular | Nuevo
    puertas: 4,
    origen: "Importado",       // Importado | Nacional

    // Media
    imagen: "/vehiculos/vehiculo1.jpg", // recomendado: guardarlas en public/vehiculos/

    // Detalles para la página del carro
    descripcion: "Sedán económico y confiable, ideal para ciudad.",
    caracteristicas: [
      "A/C",
      "Bluetooth",
      "Cámara reversa",
      "Pantalla táctil",
      "Rines de lujo",
      "Sensores de parqueo",
    ],
  },

  {
    id: 2,
    marca: "Honda",
    modelo: "Civic",
    anio: 2019,
    precio: 13200,
    kilometraje: 72000,
    transmision: "Automática",
    combustible: "Gasolina",
    motor: "2.0L",
    traccion: "FWD",
    color: "Gris",
    estado: "Muy bueno",
    puertas: 4,
    origen: "Nacional",
    imagen: "/vehiculos/vehiculo2.jpg",
    descripcion: "Diseño deportivo, cómodo y con buen rendimiento.",
    caracteristicas: [
      "A/C",
      "Cruise control",
      "Bluetooth",
      "Cámara reversa",
      "Llantas nuevas",
    ],
  },
]

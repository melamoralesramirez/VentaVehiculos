export const vehiculos = [
  {
    id: 1,

    marca: "Toyota",
    modelo: "Corolla",
    anio: 2018,

    precio: 11500,        
    kilometraje: 85000,   

    transmision: "Automática",
    combustible: "Gasolina",
    motor: "1.8L",
    traccion: "FWD",

    color: "Blanco",
    estado: "Nuevo",       // Usado | Nuevo
    puertas: 4,
    origen: "Importado",       // Importado | Nacional

    condicion: "Disponible", // Disponible | Vendido

    imagen: "/vehiculos/vehiculo1.jpg", 

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
    estado: "Usado",
    puertas: 4,
    origen: "Nacional",
    condicion: "Vendido",
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

  {
    id: 3,
    marca: "Hyundai",
    modelo: "Tucson",
    anio: 2020,
    precio: 17800,
    kilometraje: 54000,
    transmision: "Automática",
    combustible: "Gasolina",
    motor: "2.0L",
    traccion: "AWD",
    color: "Negro",
    estado: "Usado",
    puertas: 5,
    origen: "Nacional",
    condicion: "Disponible",
    imagen: "/vehiculos/vehiculo3.jpg",
    descripcion: "SUV espacioso, cómodo y seguro, ideal para familia.",
    caracteristicas: [
      "A/C",
      "Pantalla táctil",
      "Cámara reversa",
      "Sensores de parqueo",
      "Control de estabilidad",
    ],
  },

  // ===== NUEVO VENDIDO =====
  {
    id: 4,
    marca: "Nissan",
    modelo: "Sentra",
    anio: 2017,
    precio: 9800,
    kilometraje: 96000,
    transmision: "Manual",
    combustible: "Gasolina",
    motor: "1.8L",
    traccion: "FWD",
    color: "Plata",
    estado: "Nuevo",
    puertas: 4,
    origen: "Importado",
    condicion: "Vendido",
    imagen: "/vehiculos/vehiculo4.jpg",
    descripcion: "Sedán confiable y económico, muy rendidor.",
    caracteristicas: [
      "A/C",
      "Bluetooth",
      "Vidrios eléctricos",
      "Radio USB",
    ],
  },
]

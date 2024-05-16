
const users = [
  {
    id: '1',
    name: 'Elon Musk',
    email: 'elonm@betrusty.com',
    avatar: '/img/em.png',
    password: '123456',
  },
  
  {
    id: '2',
    name: 'Userina',
    email: 'usersina@betrusty.com',
    avatar: '/img/em.png',
    password: '654321',
  },

];

const departamentos = [
  {
    id: '1',
    owner_id: '1',
    name: 'Frank Apart',
    type: 'departamento',
    habs: 3,
    wifi: "yes",
    estacionamiento: "gratuito",
    direccion: 'Av. San Martín 315, Mendoza, Argentina',
    descripcion: "Este hermoso apartamento de 2 habitaciones se encuentra en el corazón de la ciudad, a solo unos pasos de los mejores restaurantes, tiendas y lugares de interés turístico. El apartamento es ideal para aquellos que buscan un espacio cómodo y acogedor en el que relajarse después de un largo día de trabajo o de turismo.",
    precio: 60,
    image01: '/img/01.png',
    image02: '/img/01.png',
    image03: '/img/01.png',
    image04: '/img/01.png',
  }
];


module.exports = {
  users,
  departamentos
};

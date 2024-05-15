export const productos = [
    {
      id: 1,
      nombre: "Buzo Marin Kitagawa",
      precio: 89000,
      categoria: "Buzos",
      stock: 5,
      descripcion:
        "Buzos hecho de 50% algodon y 50 % poliester, no se encojen y mantienen el color",
      img: "https://d351ygrurko1q2.cloudfront.net/dev-assets-85/marin1.png",
    },
    {
      id: 2,
      nombre: "Buzo Nezuko Kamado ",
      precio: 89000,
      categoria: "Buzos",
      stock: 5,
      descripcion:
        "Buzos hecho de 50% algodon y 50 % poliester, no se encojen y mantienen el color",
      img: "https://d351ygrurko1q2.cloudfront.net/dev-assets-85/nezuko.png",
    },
    {
      id: 3,
      nombre: "Mochila de Rem y Satella",
      precio: 149000,
      categoria: "Mochilas",
      stock: 5,
      descripcion:
        "Mochilas de alta calidad fabricadas a mano con el mejor material del mercado",
      img: "https://d351ygrurko1q2.cloudfront.net/dev-assets-85/mochila_rem_ste.jpg",
    },
    {
      id: 4,
      nombre: "Mochila de Rem",
      precio: 129000,
      categoria: "Remeras",
      stock: 5,
      descripcion:
        "Mochilas de alta calidad fabricadas a mano con el mejor material del mercado",
      img: "https://d351ygrurko1q2.cloudfront.net/dev-assets-85/mochila_rem.png",
    },
    {
      id: 5,
      nombre: "Calcetines de pokemon",
      precio: 39000,
      categoria: "Calcetines",
      stock: 5,
      descripcion:
        "Calcetines hechos 100% de algodon, calidos y comodos para el dia a dia",
      img: "https://d351ygrurko1q2.cloudfront.net/dev-assets-85/calcetines_variados.jpg",
    },
    {
      id: 7,
      nombre: "Calcetines de sailor moon",
      precio: 39000,
      categoria: "Calcetines",
      stock: 5,
      descripcion:
        "Calcetines hechos 100% de algodon, calidos y comodos para el dia a dia",
      img: "https://d351ygrurko1q2.cloudfront.net/dev-assets-85/sailormoon.jpg",
    },
    
    {
      id: 7,
      nombre: "Mousepad Esdeath",
      precio: 59000,
      categoria: "Mousepad",
      stock: 5,
      descripcion:
        "Mousepad de 30x70 cm, con estampado de EsDeath de Akame ga Kill",
      img: "https://d351ygrurko1q2.cloudfront.net/dev-assets-85/mousepad.jpg",
    },
    {
      id: 8,
      nombre: "Dakimakura de Konosuba",
      precio: 20000,
      categoria: "Dakimakura",
      stock: 5,
      descripcion:
        "Dakimakura de 150x50 cm, con estampado de Megumin de Konosuba",
      img: "https://d351ygrurko1q2.cloudfront.net/dev-assets-85/daikamakura.png",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      const productosFiltrados = productos.filter(
        (prod) => prod.categoria === category
      );
      setTimeout(() => {
        resolve(productosFiltrados);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
      setTimeout(() => {
        resolve(productoFiltrado);
      }, 2000);
    });
  };
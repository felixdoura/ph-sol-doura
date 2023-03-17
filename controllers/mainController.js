let productos = [

    {
        id: 1,
        nombre: "foto01",
        descripcion: "imagen001",
        precio: 1000,
        descuento: 10,
        imagen: "/images/PortfolioSol-Moda0447.jpg"
    },

    {
        id: 2,
        nombre: "foto02",
        descripcion: "imagen002",
        precio: 1500,
        descuento: 10,
        imagen: "/images/soldoura_amatista_2021.jpg"
    },

    {
        id: 3,
        nombre: "foto03",
        descripcion: "imagen002",
        precio: 1500,
        descuento: 10,
        imagen: "/images/SolDoura-Estetica de lo cotidiano.jpg"
    },

    {
        id: 4,
        nombre: "foto04",
        descripcion: "imagen001",
        precio: 1000,
        descuento: 10,
        imagen: "/images/14.jpg"
    },

    {
        id: 5,
        nombre: "foto05",
        descripcion: "imagen002",
        precio: 1500,
        descuento: 10,
        imagen: "/images/La-Reserva-IG-6.jpg"
    },

    {
        id: 6,
        nombre: "foto06",
        descripcion: "imagen002",
        precio: 1500,
        descuento: 10,
        imagen: "/images/Porfolio-Sol-Rockearte-32.jpg"
    },
]


module.exports = {
    home : (req, res) => {
        res.render("home", {productos});
    },

}





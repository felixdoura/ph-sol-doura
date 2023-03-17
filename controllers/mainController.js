let productos = [

    {
        id: 1,
        nombre: "Moda",
        descripcion: "Portfolio Moda",
        precio: 1000,
        descuento: 10,
        imagen: "/images/PortfolioSol-Moda0447.jpg"
    },

    {
        id: 2,
        nombre: "Amatista",
        descripcion: "imagen002",
        precio: 1500,
        descuento: 10,
        imagen: "/images/soldoura_amatista_2021.jpg"
    },

    {
        id: 3,
        nombre: "Estética",
        descripcion: "imagen002",
        precio: 1500,
        descuento: 10,
        imagen: "/images/SolDoura-Estetica de lo cotidiano.jpg"
    },

    {
        id: 4,
        nombre: "Estética",
        descripcion: "imagen001",
        precio: 1000,
        descuento: 10,
        imagen: "/images/14.jpg"
    },

    {
        id: 5,
        nombre: "Paisajes",
        descripcion: "imagen002",
        precio: 1500,
        descuento: 10,
        imagen: "/images/La-Reserva-IG-6.jpg"
    },

    {
        id: 6,
        nombre: "Rock",
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





let products = [

    {
        id: 1,
        descripcion: "imagen001",
        precio: 1000,
        descuento: 10,

    }
]


module.exports = {
    index : (req, res) => {
       
        res.render("home");

    },

}





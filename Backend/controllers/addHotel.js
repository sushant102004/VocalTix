const { Hotel } = require('./../models/hotel')

exports.addHotel = async (req, res) => {
    const { name, location, destination, price, rating, roomType } = req.body

    const newHotel = await Hotel.create({ 
        name: name,
        location: location,
        destination: destination,
        price: price,
        rating: rating,
        roomType: roomType
     })

    res.status(200).json({
        status: 'success',
        message: 'Hotel added successfully.',
        hotel: newHotel
    })
}
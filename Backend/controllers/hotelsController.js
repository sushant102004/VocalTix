const { Hotel } = require('./../models/hotel')

exports.addHotel = async (req, res) => {
    const { name, location, destination, price, rating, roomType } = req.body

    if(!name, !location, !destination, !price, !roomType, !rating) {
        console.log('Please provide details')
        return;
    }

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


exports.searchHotel = async (req, res) => {
    const searchQuery = req.params.searchQuery
    if(!searchQuery) {
        return res.status(404).json({
            status: 'not-found',
            message: 'Search Query not found.'
        })
    }
    const hotels = await Hotel.find({
        '$or': [
            { 'location'  : { $regex: searchQuery, '$options' : 'i' }}
        ]
    })

    if(hotels.length === 0) {
        return res.status(404).json({
            status: 'not-found',
            message: 'Hotels not found.'
        })
    }

    res.status(200).json({
        status: 'success',
        hotels: hotels
    })
}

import Cards from "../models/CardModel";

exports.createCard = async (req, res) => {
    const card = req.body
     await Cards.create(card, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

exports.getCards = async (req, res) => {
    await Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
}
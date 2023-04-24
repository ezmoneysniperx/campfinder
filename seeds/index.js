const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/campground');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author : "63efc5e1f02fee54544143be",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description : '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos similique libero qui hic nesciunt. Impedit quae tenetur eos iusto ratione neque quibusdam nisi alias repellendus. Ipsum a aliquam fuga dolores!',
            price,
            geometry: {
                type: "Point",
                coordinates : [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url : "https://res.cloudinary.com/deitd4std/image/upload/v1680790940/CampFinder/jea5o648cnmtxzjxbluh.jpg",
                    filename : "CampFinder/jea5o648cnmtxzjxbluh",
                },
                {
                    url : "https://res.cloudinary.com/deitd4std/image/upload/v1681129474/CampFinder/qiojmkmcqsc7e7mvdgcb.jpg",
                    filename : "CampFinder/qiojmkmcqsc7e7mvdgcb",
                },
                {
                    url : "https://res.cloudinary.com/deitd4std/image/upload/v1681129473/CampFinder/jmeafwgknn5euzqxzooz.jpg",
                    filename : "CampFinder/jmeafwgknn5euzqxzooz",
                },
                {
                    url : "https://res.cloudinary.com/deitd4std/image/upload/v1680790940/CampFinder/kyjfrskb2htbodaxsrsy.jpg",
                    filename : "CampFinder/kyjfrskb2htbodaxsrsy",
                },
                {
                    url : "https://res.cloudinary.com/deitd4std/image/upload/v1680790940/CampFinder/pez0yad4xp1vfuan4oy9.jpg",
                    filename : "CampFinder/pez0yad4xp1vfuan4oy9",
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
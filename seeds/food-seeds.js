const { Food } = require('../models');

const foodData = [
    {
        restaurantName: `Chef Tanya's Kitchen`,
        cuisine: 'Vegan',
        address: '706 S Eugene Rd Palm Springs, CA 92264',
        restaurantUrl: 'https://www.yelp.com/biz/chef-tanyas-kitchen-palm-springs',
        cost: '$$',
        reservation: false,
        reservation_date: '',
        reservation_time: ''
    },
    {
        restaurantName: 'Cafe Du Monde',
        cuisine: '',
        address: '800 Decatur St French Market New Orleans, LA 70116',
        restaurantUrl: 'https://www.yelp.com/biz/caf%C3%A9-du-monde-new-orleans-19?osq=cafe+du+monde',
        cost: '$',
        reservation: false,
        reservation_date: '',
        reservation_time: ''
    },
    {
        restaurantName: 'Hayato',
        cuisine: 'Japanese',
        address: '1320 E 7th St Ste 126 Los Angeles, CA 90021',
        restaurantUrl: 'https://www.yelp.com/biz/hayato-los-angeles-3',
        cost: '$$$$',
        reservation: true,
        reservation_date: 'July 29, 2021',
        reservation_time: '6:30 PM'
    },
    {
        restaurantName: 'Spruce',
        cuisine: 'American',
        address: '3640 Sacramento St San Francisco, CA 94118',
        restaurantUrl: 'https://www.yelp.com/biz/spruce-san-francisco',
        cost: '$$$$',
        reservation: true,
        reservation_date: 'July 05, 2021',
        reservation_time: '7:30 PM'
    },
    {
        restaurantName: 'Local Myth Pizza',
        cuisine: 'Pizza',
        address: '122 S Emerson St Chelan, WA 98816',
        restaurantUrl: 'https://www.yelp.com/biz/local-myth-pizza-chelan',
        cost: '$$',
        reservation: false,
        reservation_date: '',
        reservation_time: ''
    },
    {
        restaurantName: 'Born and Bred',
        cuisine: 'Korean BBQ',
        address: '2F, 1 Majang-ro 42-gil, Seongdong-gu, Seoul, South Korea',
        restaurantUrl: 'https://guide.michelin.com/en/seoul-capital-area/kr-seoul/restaurant/born-and-bred',
        cost: '$$$$',
        reservation: false,
        reservation_date: 'December 24, 2021',
        reservation_time: '5:00 PM'
    },
    {
        restaurantName: 'Nicole',
        cuisine: 'Turkish',
        address: 'Tomtom, Tomtom Kaptan Sk. No:18, 34433 Beyoğlu/İstanbul, Turkey',
        restaurantUrl: 'http://nicole.com.tr/index.php/tr/',
        cost: '$$$$',
        reservation: false,
        reservation_date: 'October 20, 2021',
        reservation_time: '6:45 PM'
    },
    {
        restaurantName: 'Tumz Seafood Restaurant',
        cuisine: 'Thai',
        address: '63/672, Alley 4, Soi 22 Shops 67,68, 69,70 Wirat Hong Yok 3 Rd, Wichit, Mueang Phuket District, Phuket 83000, Thailand',
        restaurantUrl: 'https://tumzphuket.com/',
        cost: '$$',
        reservation: false,
        reservation_date: '',
        reservation_time: ''
    },

];

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;
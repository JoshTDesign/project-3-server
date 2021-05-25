const { User } = require('../models');

const userData = [
    {
        first_name: 'Tina',
        last_name: 'Torres',
        email: 'tina.torres@example.com',
        username: 'tinatorres123',
        password: 'password',
        image_path: '',
        tripId: 2
    },
    {
        first_name: 'Willie',
        last_name: 'Schmidt',
        email: 'willie.schmidt@example.com',
        username: 'willieschmidt123',
        password: 'password',
        image_path: '',
    },
    {
        first_name: 'Ana',
        last_name: 'Gregory',
        email: 'ana.gregory@example.com',
        username: 'anagregory123',
        password: 'password',
        image_path: '',
    },
    {
        first_name: 'Martha',
        last_name: 'Soto',
        email: 'martha.soto@example.com',
        username: 'marthasoto123',
        password: 'password',
        image_path: '',
    },
    {
        first_name: 'Dean',
        last_name: 'Thompson',
        email: 'dean.thompson@example.com',
        username: 'deanthompson123',
        password: 'password',
        image_path: '',
    },
    {
        first_name: 'Mary',
        last_name: 'Montgomery',
        email: 'mary.montgomery@example.com',
        username: 'marymontgomery123',
        password: 'password',
        image_path: '',
    },
    {
        first_name: 'Javier',
        last_name: 'Douglas',
        email: 'javierdouglas123@example.com',
        username: 'javierdouglas123',
        password: 'password',
        image_path: '',
    },
    {
        first_name: 'Sophia',
        last_name: 'Hale',
        email: 'sophia.hale@example.com',
        username: 'sophiahale123',
        password: 'password',
        image_path: '',
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
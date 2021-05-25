const { Activity } = require('../models');

const activityData = [
    {
        activityName: 'Golf',
        address: '75-200 Classic Club Blvd, Palm Desert, CA 92211',
        activityUrl: 'https://www.classicclubgolf.com/',
        category: 'Leisure',
        cost: '$$$',
        activity_date: 'July 30, 2021',
        start_time: '7:30 AM',
        end_time: ''
    },
    {
        activityName: 'French Quarter History and Ghostbuster Tour',
        address: '',
        activityUrl: 'https://frenchquarterhistorytours.com/',
        category: 'Leisure',
        cost: '$$',
        activity_date: 'July 03, 2021',
        start_time: '10:00 PM',
        end_time: '11:00 PM'
    },
    {
        activityName: 'LACMA',
        address: '5905 Wilshire Blvd, Los Angeles, CA 90036',
        activityUrl: 'https://www.lacma.org/',
        category: 'Sightseeing',
        cost: '$',
        activity_date: 'July 30, 2021',
        start_time: '',
        end_time: ''
    },
    {
        activityName: 'Golden Gate Bridge',
        address: '',
        activityUrl: 'https://www.goldengate.org/',
        category: 'Sightseeing',
        cost: '$',
        activity_date: 'July 03, 2021',
        start_time: '10:00 AM',
        end_time: '11:00 AM'
    },
    {
        activityName: 'Paddle Boarding',
        address: '1228 W Woodin Ave, Chelan, WA 98816',
        activityUrl: 'http://www.chelanparasail.com/',
        category: 'Leisure',
        cost: '$',
        activity_date: 'June 12, 2021',
        start_time: '1:00 PM',
        end_time: '3:00 PM'
    },
    {
        activityName: 'Gyeongbokgung Palace',
        address: '161 Sajik-ro, Sejongno, Jongno-gu, Seoul, South Korea',
        activityUrl: 'https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264337',
        category: 'Sightseeing',
        cost: '$',
        activity_date: 'December 12, 2021',
        start_time: '10:00 AM',
        end_time: ''
    },
    {
        activityName: 'Hagia Sophia',
        address: ' Sultan Ahmet, Ayasofya Meydanı No:1, 34122 Fatih/İstanbul, Turkey',
        activityUrl: 'https://muze.gen.tr/muze-detay/ayasofya',
        category: 'Sightseeing',
        cost: '$',
        activity_date: 'October 17, 2021',
        start_time: '',
        end_time: '',
    },
    {
        activityName: 'Beach Hang',
        address: 'Patong beach Pa Tong, Kathu District, Phuket 83150, Thailand',
        activityUrl: '',
        category: 'Leisure',
        cost: '',
        activity_date: 'September 09, 2021',
        start_time: '10:30 AM',
        end_time: ''
    },
    
    
];

const seedActivity = () => Activity.bulkCreate(activityData);

module.exports = seedActivity;
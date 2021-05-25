const { Trip } = require('../models');

const tripData = [
    {
        city: 'Palm Springs',
        state: 'CA',
        country: '',
        lodgingType: 'Hotel',
        lodgingUrl: 'https://www.hilton.com/en/hotels/psppshf-hilton-palm-springs/?SEO_id=GMB-HF-PSPPSHF&y_source=1_MTIyMDg5MS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D',
        start_date: 'August 01, 2021',
        end_date: 'August 07, 2021',
        image_path: '',
        creatorId: 1,
    },
    {
        city: 'New Orleans',
        state: 'LA',
        country: '',
        lodgingType: 'Airbnb',
        lodgingUrl: 'https://www.airbnb.com/rooms/plus/24631451?check_in=2021-11-17&check_out=2021-11-21&federated_search_id=85b12888-4c07-476d-ab2c-4370a837f68b&source_impression_id=p3_1621918734_mAD%2BLAJlFQUex0fA&guests=1&adults=1',
        start_date: 'July 08, 2021',
        end_date: 'July 11, 2021',
        image_path: ''
    },
    {
        city: 'Los Angeles',
        state: 'CA',
        country: '',
        lodgingType: 'Hotel',
        lodgingUrl: 'https://www.omnihotels.com/hotels/los-angeles-california-plaza?utm_source=gmblisting&utm_medium=organic',
        start_date: 'July 28, 2021',
        end_date: 'August 01, 2021',
        image_path: ''
    },
    {
        city: 'San Fransisco',
        state: 'CA',
        country: '',
        lodgingType: 'Airbnb',
        lodgingUrl: 'https://www.airbnb.com/rooms/33578?check_in=2021-06-10&check_out=2021-06-13&federated_search_id=79dfe77c-d2fe-4184-bb9d-b257024e0dc8&source_impression_id=p3_1621918790_5Gd%2FhxqXNetwLWPa&guests=1&adults=1',
        start_date: 'July 03, 2021',
        end_date: 'July 06, 2021',
        image_path: ''
    },
    {
        city: 'Chelan',
        state: 'WA',
        country: '',
        lodgingType: 'Airbnb',
        lodgingUrl: 'https://www.airbnb.com/rooms/16949175?check_in=2022-08-04&check_out=2022-08-07&federated_search_id=eab0d6fd-f523-4850-bfe2-3b719a5124ab&source_impression_id=p3_1621918896_QpSvg4B8el2K5uoZ&guests=1&adults=1',
        start_date: 'June 11, 2021',
        end_date: 'June 14, 2021',
        image_path: ''
    },
    {
        city: 'Seoul',
        state: '',
        country: 'Korea',
        lodgingType: 'Hotel',
        lodgingUrl: '353 Yeonhui-ro, Hongeun 2(i)-dong, Seodaemun-gu, Seoul, South Korea',
        start_date: 'December 01, 2021',
        end_date: 'January 03, 2022',
        image_path: ''
    },
    {
        city: 'Istanbul',
        state: '',
        country: 'Turkey',
        lodgingType: 'Airbnb',
        lodgingUrl: 'https://www.airbnb.com/rooms/49538080?check_in=2021-10-13&check_out=2021-10-27&federated_search_id=65752b67-fd43-4159-93d7-60665f1f50da&source_impression_id=p3_1621918999_OAESTUpDEFcFKolD&guests=1&adults=1',
        start_date: 'October 15, 2021',
        end_date: 'November 01, 2021',
        image_path: ''
    },
    {
        city: 'Phuket',
        state: '',
        country: 'Thailand',
        lodgingType: 'Hotel',
        lodgingUrl: '1/18, 1/20 Kamala, Kathu District, Phuket 83150, Thailand',
        start_date: 'September 08, 2021',
        end_date: 'September 20, 2021',
        image_path: ''
    },
    
];

const seedTrip = () => Trip.bulkCreate(tripData);

module.exports = seedTrip;
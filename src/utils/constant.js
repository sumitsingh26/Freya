import AppFlag from '../components/AppFlags';
import imagepath from '../images/Images';

export const appColors = {
  Secondary: '#DED0B6',
  Primary: '#607274',
  SilverFoil: '#AEAEAE',
  TextPrimary: '#FFFFFF',
  BackGround: '#EFEFEF',
  LightPrimary: '#7C7C7C',
  LightBackGround: '#F7F7F7',
  Text: '#494949',
  LightBackGround: '#F9F9F9',
};

export const appKeys = {
  user: 'user',
  smstoken: 'smstoken',
  accessToken: 'accessToken',
  language: 'language',
};

export const appScreens = {
  home: 'Home',
  dashboard: 'Dashboard',
  signup: 'SignUpScreen',
  signin: 'SignInScreen',
  signupMethod: 'ChooseSignUpMethod',
  splash: 'SplashScreen',
  clinicDetails: 'ClinicDetailsScreen',
  bookingAppointment: 'BookingAppointment',
  emailOTP: 'OtpEmailScreen',
  mobileOTP: 'OtpMobileScreen',
  viewAllClinics : 'ViewAllClinics'
};

const appGenderData = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Other', value: '3'},
];
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
const tmpFilterData = [
  'Botox',
  'Skin Treatments',
  'Filler',
  'Body Contouring',
  'Microblading',
  'Hair Treatments',
  'Laser',
];
const tmpShortByData = ['Distance', 'Ratings', 'Experience'];
const tmpPriceData = ['€', '€€', '€€€', '€€€€'];
const tmpSearchData = [
  'Apple',
  'Banana',
  'Orange',
  'Pineapple',
  'Grapes',
  'Strawberry',
  'Watermelon',
  // Add more items as needed
];
const tmpImageSliderData = [
  {
    id: '1',
    image: imagepath.sliderImage,
  },
  {
    id: '2',
    image: imagepath.bestBotoxImage,
  },
  {
    id: '3',
    image: imagepath.sliderImage,
  },
  {
    id: '4',
    image: imagepath.bestBotoxImage,
  },
  {
    id: '5',
    image: imagepath.sliderImage,
  },
];
const tmpBotoxData = [
  {label: 'Botox 1a', value: 'Botox 1a', price: '$150USD'},
  {label: 'Botox 1b', value: 'Botox 1b', price: '$150USD'},
  {label: 'Botox 1c', value: 'Botox 1c', price: '$150USD'},
  {label: 'Botox 1d', value: 'Botox 1d', price: '$150USD'},
  {label: 'Botox 1e', value: 'Botox 1e', price: '$150USD'},
  {label: 'Botox 1f', value: 'Botox 1f', price: '$150USD'},
  {label: 'Botox 1g', value: 'Botox 1g', price: '$150USD'},
  {label: 'Botox 1h', value: 'Botox 1h', price: '$150USD'},
];
const tmpNearYouData = [
  {
    id: '1',
    image: imagepath.newNearImage,
    clinic_name: 'SMR\nAesthetics',
    clients: '1000+',
    reviewTxt: '121',
    rating: '5.0',
  },
  {
    id: '2',
    image: imagepath.bestBotoxImage,
    clinic_name: 'Story',
    clients: '1000+',
    reviewTxt: '121',
    rating: '5.0',
  },
  {
    id: '3',
    image: imagepath.newNearImage,
    clinic_name: 'SMR \n Aesthetics',
    clients: '1000+',
    reviewTxt: '121',
    rating: '5.0',
  },
];
const tmpFilterSelectData = [
  {label: 'Filter 1a', value: 'Filter 1a', price: '$150USD'},
  {label: 'Filter 1b', value: 'Filter 1b', price: '$150USD'},
  {label: 'Filter 1c', value: 'Filter 1c', price: '$150USD'},
  {label: 'Filter 1d', value: 'Filter 1d', price: '$150USD'},
  {label: 'Filter 1e', value: 'Filter 1e', price: '$150USD'},
  {label: 'Filter 1f', value: 'Filter 1f', price: '$150USD'},
  {label: 'Filter 1g', value: 'Filter 1g', price: '$150USD'},
  {label: 'Filter 1h', value: 'Filter 1h', price: '$150USD'},
];
const tmpLaserIPLData = [
  {label: 'Laser/IPL 1a', value: 'Laser/IPL 1a', price: '$15USD'},
  {label: 'Laser/IPL 1b', value: 'Laser/IPL 1b', price: '$250USD'},
  {label: 'Laser/IPL 1c', value: 'Laser/IPL 1c', price: '$10USD'},
  {label: 'Laser/IPL 1d', value: 'Laser/IPL 1d', price: '$350USD'},
  {label: 'Laser/IPL 1e', value: 'Laser/IPL 1e', price: '$450USD'},
  {label: 'Laser/IPL 1f', value: 'Laser/IPL 1f', price: '$50USD'},
  {label: 'Laser/IPL 1g', value: 'Laser/IPL 1g', price: '$150USD'},
  {label: 'Laser/IPL 1h', value: 'Laser/IPL 1h', price: '$60USD'},
];
const tmpContactData = [
  {
    id: '1',
    name: 'Email',
    email: 'thehappy_clinic@gmail.com',
    icon: 'at',
  },
  {
    id: '2',
    name: 'Mobile',
    email: '+4587630984',
    icon: 'mobile-phone',
  },
  {
    id: '3',
    name: 'Website',
    email: 'www.thehappyclinic.com',
    icon: 'globe',
  },
];
const tmpLocations = [
  {
    label: 'Denmark',
    value: 'da',
    flag: <AppFlag flag={imagepath.ic_danish} backColor={'white'} />,
  },
  {
    label: 'Sweden',
    value: 'se',
    flag: <AppFlag flag={imagepath.ic_swedish} backColor={'yellow'} />,
  },
  {
    label: 'Norway',
    value: 'no',
    flag: <AppFlag flag={imagepath.ic_norwegian} />,
  },
  {
    label: 'Finland',
    value: 'fi',
    flag: <AppFlag flag={imagepath.ic_finnish} />,
  },
];
const tmpLanguage = [
  {
    label: 'Danish',
    value: 'da',
    flag: <AppFlag flag={imagepath.ic_danish} backColor={'white'} />,
  },
  {
    label: 'Swedish',
    value: 'se',
    flag: <AppFlag flag={imagepath.ic_swedish} backColor={'yellow'} />,
  },
  {
    label: 'Norwegian',
    value: 'no',
    flag: <AppFlag flag={imagepath.ic_norwegian} />,
  },
  {label: 'French', value: 'fi', flag: <AppFlag flag={imagepath.ic_finnish} />},
  {
    label: 'English',
    value: 'en',
    flag: <AppFlag flag={imagepath.ic_english} />,
  },
];

const tmpUserProfileList = [
  {name: 'Account', image: imagepath.accountIcon},
  {name: 'Bookings', image: imagepath.bookingIcon},
  {name: 'Saved Places', image: imagepath.savePlaceIcon},
  {name: 'Contact Us', image: imagepath.contactUsIcon},
  {
    name: 'Privacy Policy',
    image: imagepath.privacyPolicyIcon,
  },
  {name: 'Language', image: imagepath.languageIcon},
];
const tmpGuestUserProfileList = [
  {name: 'Saved Places', image: imagepath.savePlaceIcon},
  {name: 'Contact Us', image: imagepath.contactUsIcon},
  {
    name: 'Privacy Policy',
    image: imagepath.privacyPolicyIcon,
  },
  {name: 'Language', image: imagepath.languageIcon},
];
const tmpSocialData = [
  {platform: 'Facebook', icon: 'facebook'},
  {platform: 'Twitter', icon: 'twitter'},
  {platform: 'Instagram', icon: 'instagram'},
  {platform: 'LinkedIn', icon: 'linkedin'},
  // Add more social platforms as needed
];

const tmpHomeAPIData = [
  {
    _id: '661842da7435ceeabd411900',
    clinic_id: '661842da7435ceeabd4118fd',
    subcategory_id: '65fc3017e31b4f856c70bce7',
    category_id: '65fc0fd3e31b4f856c70bccb',
    is_active: true,
    created_date: '2024-04-11T20:06:50.808Z',
    last_update: '2024-04-11T20:06:50.808Z',
    __v: 0,
    clinic: {
      _id: '661842da7435ceeabd4118fd',
      clinicname: 'healt care ',
      about: 'this is text',
      country: 'India',
      totime: '10:00',
      fromtime: '21:00',
      fromday: 'Monday',
      today: 'Monday',
      categoryid: [
        {
          label: 'Botox',
          categoryid: '65fc2f87e31b4f856c70bcd6',
        },
        {
          label: 'ENT ',
          categoryid: '65fc0fd3e31b4f856c70bccb',
        },
      ],
      lat: '887899',
      long: '887899',
      email: 'angadsule2006@gmail.com',
      phone: 7620330115,
      website: 'www.heahh.care.com',
      address: [
        {
          address: 'Vidya mandir marg',
          city: 'patna',
          state: 'National Capital Territory of Delhi',
          zip: '801503',
        },
      ],
      doc_file: [
        {
          file_path:
            'uploads/clinic/1712866010537-Screenshot from 2023-07-17 13-10-20.png',
          file_name: '1712866010537-Screenshot from 2023-07-17 13-10-20.png',
          file_size: 155062,
        },
      ],
      images: [
        {
          file_path:
            'uploads/clinic/1712866009109-Screenshot from 2023-07-18 14-02-31.png',
          file_name: '1712866009109-Screenshot from 2023-07-18 14-02-31.png',
          file_size: 565576,
        },
      ],
      is_active: true,
      createdAt: '2024-04-11T20:06:50.789Z',
      lastUpdate: '2024-04-11T20:06:50.789Z',
      __v: 0,
    },
    category: {
      _id: '65fc0fd3e31b4f856c70bccb',
      categoryname: 'ENT ',
      is_active: 1,
      createdAt: '2024-03-21T10:45:39.160Z',
      lastUpdate: '2024-03-21T10:45:39.160Z',
      __v: 0,
    },
  },
];

export {
  appGenderData,
  emailRegex,
  specialCharacters,
  tmpFilterData,
  tmpShortByData,
  tmpPriceData,
  tmpSearchData,
  tmpImageSliderData,
  tmpBotoxData,
  tmpFilterSelectData,
  tmpLaserIPLData,
  tmpContactData,
  tmpLocations,
  tmpLanguage,
  tmpUserProfileList,
  tmpGuestUserProfileList,
  tmpSocialData,
  tmpNearYouData,
};

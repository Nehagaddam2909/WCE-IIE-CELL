import ig from '../public/assets/icons/instagram.png';
import tw from '../public/assets/icons/twitter.png';
import yt from '../public/assets/icons/youtube.png';
import gh from '../public/assets/icons/github.png';
import ld from '../public/assets/icons/linkedin.png';
const FooterLinks = [
    {
        title: 'Quick Links',
        links: [
            {
                name: 'Home',
                url: '/',
            },
            {
                name: 'About Us',
                url: '/about',
            },
            {
                name: 'Partners',
                url: '/partners',
            },
            {
                name: 'team',
                url: '/team',
            },
        ],
        target:'_self'
    },
    {
        title: 'Other Links',
        links: [
            {
                name: 'incubatees',
                url: '/incubatees',
            },
            {
                name: 'Events',
                url: '/events',
            },
            {
                name: 'Register',
                url: '/register',
            },
            {
                name: 'Terms',
                url: 'https://policies.google.com/terms',
            },
        ],
        target:'_blank'
    },
];

const SocialLinks = [
    { icon: ig, link: 'https://www.instagram.com' },
    { icon: tw, link: '#' },
    {
        icon: yt,
        link: 'https://www.youtube.com',
    },
    { icon: gh, link: 'https://github.com' },
    { icon: ld, link: 'https://www.linkedin.com' },
];

module.exports = { SocialLinks, FooterLinks };
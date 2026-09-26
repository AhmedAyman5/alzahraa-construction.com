import { CONTACT } from '@/data/contact';

export { CONTACT } from '@/data/contact';

export const SITE = {
	name: 'الزهراء للمقاولات والتشييد والبناء',
	shortName: 'الزهراء للمقاولات',
	phone: CONTACT.phone.display,
	phoneHref: CONTACT.phone.href,
	whatsapp: CONTACT.whatsapp,
	email: CONTACT.email.display,
	address: CONTACT.address.ar,
	logo: '/images/logo.webp',
	banner: '/images/banner.webp',
};

export const IMAGES = {
	hero: '/images/hero.webp',
	engineerBlueprint: '/images/engineerBlueprint.webp',
	concrete: '/images/concrete.webp',
	finishing: '/images/finishing.webp',
	mep: '/images/mep.webp',
	steel: '/images/steel.webp',
	asphalt: '/images/asphalt.webp',
	landscape: '/images/landscape.webp',
	landBefore: '/images/landBefore.webp',
	villaAfter: '/images/villaAfter.webp',
	building: '/images/building.webp',
	fleet: '/images/fleet.webp',
	crane: '/images/crane.webp',
	scaffolding: '/images/scaffolding.webp',
	team: '/images/team.webp',
};

export const NAV_LINKS = [
	{ to: '/', label: 'الرئيسية' },
	{ to: '/about', label: 'من نحن' },
	{ to: '/services', label: 'خدماتنا' },
	{ to: '/projects', label: 'مشاريعنا' },
	{ to: '/equipment', label: 'معداتنا' },
	{ to: '/contact', label: 'اتصل بنا' },
];

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
	logo: 'https://horizons-cdn.hostinger.com/a660be08-a7bd-4d76-8bec-73b3c35d93d7/b6f3c2168228570557e2e18adc55e356.png',
	banner: 'https://horizons-cdn.hostinger.com/a660be08-a7bd-4d76-8bec-73b3c35d93d7/43413b7d134229483e956cd0ffc88053.png',
};

export const IMAGES = {
	hero: 'https://images.hostinger.com/3b3a52bf-5a31-4701-ac3f-63d4b61ef6fb.png',
	engineerBlueprint: 'https://images.hostinger.com/4787c2ed-a856-4bb0-832c-b6adee9e0b4d.png',
	concrete: 'https://images.hostinger.com/336fa74c-ec3c-4edc-a436-4ae54923a124.png',
	finishing: 'https://images.hostinger.com/0adf7ee4-1477-48c6-8358-abfd29353e59.png',
	mep: 'https://images.hostinger.com/7aab0471-0322-4340-9d01-4ebb170b4039.png',
	steel: 'https://images.hostinger.com/e07e3a2c-1f90-4ac3-8922-b94e0c27a7e0.png',
	asphalt: 'https://images.hostinger.com/cb7b28f1-3a29-4cb8-96e3-1a318e400582.png',
	landscape: 'https://images.hostinger.com/86e3287f-5864-42b2-92e7-55a43e036de6.png',
	landBefore: 'https://images.hostinger.com/65909fec-297c-41e4-8a3a-9ad2c007f2d0.png',
	villaAfter: 'https://images.hostinger.com/7324dfbe-9678-430a-b0be-d94008b79815.png',
	building: 'https://images.hostinger.com/19404c30-c848-4284-acb4-8db73970c1a1.png',
	fleet: 'https://images.hostinger.com/3b3934d8-1560-4d58-ab94-332b9169313d.png',
	crane: 'https://images.hostinger.com/ab4e3ae4-bef0-4d79-84e8-9647b9c5cb6b.png',
	scaffolding: 'https://images.hostinger.com/a5f1c3c4-53c0-4dc2-b662-715926cfcd76.png',
	team: 'https://images.hostinger.com/21306b1e-624e-447c-83fc-7f4512ddadaa.png',
};

export const NAV_LINKS = [
	{ to: '/', label: 'الرئيسية' },
	{ to: '/about', label: 'من نحن' },
	{ to: '/services', label: 'خدماتنا' },
	{ to: '/projects', label: 'مشاريعنا' },
	{ to: '/equipment', label: 'معداتنا' },
	{ to: '/contact', label: 'اتصل بنا' },
];

/**
 * Single source of truth for ALL contact information.
 * Import this wherever phone, email, address or WhatsApp is needed.
 */
export const CONTACT = {
	phone: {
		display: '+201003111302',
		href: 'tel:+201003111302',
	},
	email: {
		display: 'info@alzahraa.construction',
		href: 'mailto:info@alzahraa.construction',
	},
	address: {
		ar: '١٢٧ شارع محمد فريد – عمارة البستان – شقة ٥٣، الدور الخامس – عابدين – القاهرة',
		en: '127 Mohamed Farid St. – Al-Bustan Building – Apartment 53, 5th Floor – Abdin – Cairo',
	},
	whatsapp: 'https://wa.me/201003111302',
} as const;

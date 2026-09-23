import { IMAGES } from '@/data/site';

export interface Service {
	id: string;
	image: string;
}

export const SERVICES: Service[] = [
	{ id: 'concrete', image: IMAGES.concrete },
	{ id: 'finishing', image: IMAGES.finishing },
	{ id: 'mep', image: IMAGES.mep },
	{ id: 'steel', image: IMAGES.steel },
	{ id: 'infrastructure', image: IMAGES.asphalt },
	{ id: 'landscape', image: IMAGES.landscape },
];

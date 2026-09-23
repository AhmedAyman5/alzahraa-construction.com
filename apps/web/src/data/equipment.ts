import { IMAGES } from '@/data/site';

export interface EquipmentGalleryItem {
	image: string;
}

export const EQUIPMENT_GALLERY: EquipmentGalleryItem[] = [
	{ image: IMAGES.fleet },
	{ image: IMAGES.crane },
	{ image: IMAGES.scaffolding },
];

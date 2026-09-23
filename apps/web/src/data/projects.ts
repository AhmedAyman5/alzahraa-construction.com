import { IMAGES } from '@/data/site';

export interface Project {
	image: string;
	year: string;
	sample?: boolean;
}

export const PROJECTS: Project[] = [
	{
		image: IMAGES.villaAfter,
		year: '2024',
	},
	{
		image: IMAGES.building,
		year: '2023',
	},
	{
		image: IMAGES.steel,
		year: '2024',
	},
	{
		image: IMAGES.finishing,
		year: '2025',
	},
	{
		image: IMAGES.landscape,
		year: '2024',
		sample: true,
	},
	{
		image: IMAGES.asphalt,
		year: '2023',
		sample: true,
	},
];

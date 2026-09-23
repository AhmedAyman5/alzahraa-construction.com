/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
	const collection = new Collection({
		name: 'contact_requests',
		type: 'base',
		listRule: null,
		viewRule: null,
		createRule: '',
		updateRule: null,
		deleteRule: null,
		fields: [
			{ name: 'name', type: 'text', required: true, max: 200 },
			{ name: 'phone', type: 'text', required: true, max: 30 },
			{
				name: 'project_type',
				type: 'select',
				required: true,
				maxSelect: 1,
				values: ['villa', 'building', 'factory', 'finishing', 'other'],
			},
			{ name: 'area', type: 'text', max: 100 },
			{ name: 'message', type: 'text', max: 2000 },
		],
	});

	app.save(collection);
}, (app) => {
	const collection = app.findCollectionByNameOrId('contact_requests');
	app.delete(collection);
});

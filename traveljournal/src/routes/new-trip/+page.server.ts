import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		let formData = await event.request.formData();
		// TODO Add database and add the entry to the database
		console.log('title ' + formData.get('title'));
		console.log('desc ' + formData.get('desc'));
		console.log('date ' + formData.get('date'));
		console.log('photo ' + formData.get('photo'));
        // console.log("form submitted!");
	}
} satisfies Actions;
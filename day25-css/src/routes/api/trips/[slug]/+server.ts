import travels from '$lib/assets/travels';
type TravelKey = keyof typeof travels;
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
    let pathName = url.pathname;
    console.log(pathName);
    let parts = pathName.split('/');
    let tripID = parts[parts.length - 1] as TravelKey;
    // see this in the server console (not browser)
    console.log(parts);

    // TODO: add code here to get JSON for a given trip
    // Return error status if tripID not found
    if (!(tripID in travels)) {
        error(404, `Trip ${tripID} was not found.`);
    }

    let tripData = travels[tripID];

    // This returns text/plain which is not useful to us
    // return new Response(JSON.stringify(tripData));

    // JSON instead
    return json(tripData);
};
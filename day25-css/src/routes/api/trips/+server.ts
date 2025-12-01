import travels from '$lib/assets/travels';
type TravelKey = keyof typeof travels;
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
    let trips = Object.keys(travels);
    return json(trips);
    // console.log(trips);
    // return new Response("Hello from /trips");
};

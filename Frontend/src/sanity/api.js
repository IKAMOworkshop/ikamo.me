import {useSanityClient} from 'astro-sanity';

export async function getAllPosts() {
    const client = useSanityClient();
    const query = `*[_type == "logs"]`;
    const posts = await client.fetch(query);
    return posts;
};
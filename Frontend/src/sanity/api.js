import {useSanityClient} from 'astro-sanity';

export async function getAllPosts() {
    const client = useSanityClient();
    const query = `*[_type == "logs"]`;
    const posts = await client.fetch(query);
    return posts;
};

// Date Sorting
export function formatLogPost(posts, {
	sortByDate = true,
} = {}) {
    if (sortByDate) {
        posts.sort((a,b) => {
            const dateA = new Date(a.eventDate);
            const dateB = new Date(b.eventDate);
    
            return dateB - dateA;
        });
    };
    console.log(posts);
	return posts;
};
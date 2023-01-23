import { fetchMarkdownProjects } from '$lib/utils';
import { json } from '@sveltejs/kit';

export async function GET() {
	const allProjects = await fetchMarkdownProjects();

	const sortedProjects = allProjects.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedProjects);
}

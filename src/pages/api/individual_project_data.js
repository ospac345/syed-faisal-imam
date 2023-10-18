
import projects from '../../data/project_data';


export default function handler(req, res) {

    const slug = req.query.slug;

    try {
        const project = projects.find(project => project.slug === slug);
        if (!project) {
            throw new Error('Unable to fetch project');
        }

        res.status(200).json(project);
    }

    catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}



import projects from '../../data/project_data';

export default function handler(req, res) {

    try {
        projects
        if (!projects) {
            throw new Error('Unable to fetch projects');
        }

        res.status(200).json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

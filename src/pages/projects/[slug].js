import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import projectsData from '../../data/project_data';
import Layout from '../../components/Layout';
import Box from '@mui/material/Box';
import ProjectDetailedPage from '../../components/project-detailed-page/ProjectDetailedPage';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const ProjectDetails = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch(`/api/individual_project_data?slug=${slug}`);
            const project = await res.json();
            setProject(project);
            setLoading(false);
        }
        if (slug) {
            fetchProject();
        }
    }, [slug]);

    if (loading) {
        return <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    }

    if (!project) {
        return <div
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Project not found</h1>
        </div>
    }

    return (
        <Layout>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                <ProjectDetailedPage project={project} />
            </Box>
        </Layout>
    );
};

export default ProjectDetails;


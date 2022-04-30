import { useLocation } from 'react-router-dom';

import styles from './Projects.module.css';

import Message from "../layout/Message";
import Container from '../layout/Container';
import Loading from '../layout/Loading';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';

import { useState, useEffect } from 'react';

function Projects(){
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectmessage] = useState('');

    const location = useLocation();
    let message = ''

    if(location.state) {
        message = location.state.message;
    }

    useEffect(() => {
      
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then( (resp) => resp.json())
                .then( (data) => {
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 300);

    }, [])
    
    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(resp => resp.json())
            .then( data => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectmessage('Projeto removido com sucesso')
            })
            .catch( err => console.log(err))
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projetos" />
            </div>

            {message && <Message msg={message} type='success'/> }
            {projectMessage && <Message msg={projectMessage} type='success'/> }

            <Container customClass='start'>
                { 
                    projects.length >0 && 
                        projects.map((project) => (
                            <ProjectCard 
                                id={project.id}
                                name={project.name}
                                budget={project.budget}
                                category={project.category.name}
                                key={project.id}
                                handleRemove={removeProject}
                            />
                        ))
                }
                {!removeLoading && <Loading />}
                {removeLoading && projects.length ===0 && (
                    <p>Nao ha projetos cadastrados</p>
                )

                }
            </Container>

        </div>
    )
}

export default Projects;
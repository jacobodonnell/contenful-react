import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: '9kbvsao26djj',
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'project' });
      const rawProjects = response.items;
      const parsedProjects = rawProjects.map(project => {
        // title, url, id, img
        const title = project.fields.title;
        const id = project.sys.id;
        const url = project.fields.url;
        const img = project.fields.image?.fields?.file?.url;
        return { title, id, url, img };
      });
      setProjects(parsedProjects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

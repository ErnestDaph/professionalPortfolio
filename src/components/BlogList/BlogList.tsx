import {useEffect, useState} from 'react'
import api from '../../api';

type BlogPost = {
    id: number;
    title: string;
    content: string;
};

function BlogList() {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        api.get('/blog-posts').then(response => {
            setPosts(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Mes actualités</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default BlogList;

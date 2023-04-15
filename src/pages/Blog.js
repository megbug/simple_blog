import blogData from '../data/blogData.js'
import BlogItem from '../components/BlogItem.js';

const Blog = () => {
    return (
        <section className='blog_grid'>
            {blogData.map((elt) => {
                return (
                    <BlogItem
                        key={elt.id}
                        img={elt.img_url}
                        title={elt.title}
                        id={elt.id}
                    />
                )
            })}
        </section>
    );
}

export default Blog;
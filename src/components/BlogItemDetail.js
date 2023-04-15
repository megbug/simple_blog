import { useParams } from 'react-router-dom'
import blogData from '../data/blogData.js'

const BlogItemDetail = () => {
    const blogParams = useParams()
    // console.log(blogParams);

    const detailFilter = blogData.filter((elt) => {
        return elt.id.toString() === blogParams.label
    })
    // console.log(detailFilter);

    return (
        <div>
            <img className='blog_item_image' src={detailFilter[0].img_url} alt="" />
            <div className='blog_item_text'>
                <h2>{detailFilter[0].title}</h2>
                <p>{detailFilter[0].published_date}</p>
                <p>{detailFilter[0].description}</p>
                <p>By {detailFilter[0].author}</p>
            </div>
        </div>
    );
}

export default BlogItemDetail;
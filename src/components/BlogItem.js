import { Link } from "react-router-dom";

const BlogItem = (props) => {
    // console.log(props);
    return (
        <div className='blog_item'>
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <Link to={`/blog/${props.id}`}>Read more</Link>
        </div>
    );
}

export default BlogItem;

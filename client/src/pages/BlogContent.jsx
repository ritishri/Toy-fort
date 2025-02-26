// import React, { useState, useEffect  } from 'react'
// import Comments from '../components/Comments'
// import { useParams } from 'react-router-dom'

// const BlogContent = () => {

//     const [blogPosts, setBlogPosts] = useState(null)
//     const [blogPostFilter, setBlogPostsFilter] = useState([])
//     const {category_slug, id} = useParams()

//     const applyFilter = () =>{
//         if(id){
//             setBlogPostsFilter(blogPosts.filter((post)=> post.id === id && post.category_slug === category_slug))
//         }else{
//             setBlogPostsFilter(blogPosts)
//         }
//     }

//     useEffect(() => {
//         applyFilter();
//       }, [blogPosts, id]);


//   return (
//     <div>
//         {
//             blogPostFilter.map((ele,index)=>(
//                 <div key={index}>
//                    {ele.content}
//                 </div>
//             ))
//         }
//         <Comments />
//     </div>
//   )
// }

// export default BlogContent


import React, { useState, useEffect } from 'react';
import Comments from '../components/Comments';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogContent = () => {
  const [blogPost, setBlogPost] = useState("");
  const { category_slug, id } = useParams();


// console.log(category_slug)
// console.log(id)
console.log(blogPost)


  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/blog-image/${category_slug}/${id}`);
        console.log(data)
        setBlogPost(data);
      } catch (error) {
        console.error('Error fetching blog content:', error.message);
      }
    };

    fetchBlogContent();
  }, [category_slug, id]);

  if (!blogPost) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6" style={{ fontFamily: 'Open Sans' }}>
      {/* <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1> */}
      {/* <div className="mb-4">{blogPost.content}</div> */}
      <div className='m-6' dangerouslySetInnerHTML={{ __html: blogPost.content }}/>
      <Comments />

    </div>
  );
};

export default BlogContent;

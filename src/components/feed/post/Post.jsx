import './Post.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Users } from '../../../dummyData';

export default function Post( {post}) {
    console.log(post)
  return (

    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                   <img className='postProfileImg' src= {Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
                   <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                   <span className="postDate">{post.date}</span>
                </div>
                
                <div className="postTopRight">
                    <MoreVertIcon/>              
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post?.desc}
                </span>
                <img src= {post.photo} alt="" className='postImg' />
                
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon'  src="assets/post/like.png" alt="" />
                    <img className='likeIcon' src="assets/post/heart.png" alt="" />
                    <span className="postLikeCounter">{post.like} liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post?.comment}</span>
                </div>
            </div>
        </div>      
    </div>
  )
}

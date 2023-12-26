import "./Feed.css"
import Share from "../sidebar/share/Share"
import Post from "../sidebar/post/Post"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}

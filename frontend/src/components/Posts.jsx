import React, { useEffect, useState } from "react";
import useAppStore from "../store/appStore.js";

const Posts = () => {
  const { posts, comments, fetchPosts, fetchComments } = useAppStore();
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
    fetchComments();
  }, [fetchPosts, fetchComments]);

  useEffect(() => {
    if (posts.length > 0 && comments.length > 0) {
      const postWithCommentCounts = posts.map((post) => ({
        ...post,
        commentCount: comments.filter((comment) => comment.postId === post.id).length,
      }));

      const highestCommentCount = Math.max(
        ...postWithCommentCounts.map((post) => post.commentCount)
      );

      const trending = postWithCommentCounts.filter(
        (post) => post.commentCount === highestCommentCount
      );

      setTrendingPosts(trending);
    }
  }, [posts, comments]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
      {trendingPosts.map((post) => (
        <div key={post.id} className="border p-4 mb-2 rounded-lg shadow-md">
          <h3 className="font-semibold">{post.title}</h3>
          <p>{post.body}</p>
          <p className="text-sm text-gray-600">Comments: {post.commentCount}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
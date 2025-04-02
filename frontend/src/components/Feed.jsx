import React, { useEffect, useState } from "react";
import useAppStore from "../store/appStore";

const Feed = () => {
  const { posts, fetchPosts } = useAppStore();
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const loadInitialPosts = async () => {
      await fetchPosts();
      setFeed(posts);
    };
    loadInitialPosts();
  }, [fetchPosts, posts]);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      fetchPosts();
    }, 5000);

    return () => clearInterval(refreshInterval);
  }, [fetchPosts]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Live Feed</h2>
      {feed.map((post) => (
        <div key={post.id} className="border p-4 mb-2 rounded-lg shadow-md">
          <h3 className="font-semibold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
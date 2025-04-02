import React, { useEffect, useState } from "react";
import useAppStore from "../store/appStore.js";

const Users = () => {
  const { users, posts, fetchUsers, fetchPosts } = useAppStore();
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, [fetchUsers, fetchPosts]);

  useEffect(() => {
    if (users.length > 0 && posts.length > 0) {
      const usersWithPostCounts = users.map((user) => ({
        ...user,
        postCount: posts.filter((post) => post.userId === user.id).length,
      }));

      const sortedUsers = usersWithPostCounts.sort(
        (a, b) => b.postCount - a.postCount
      );

      setTopUsers(sortedUsers.slice(0, 5));
    }
  }, [users, posts]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top 5 Users</h2>
      <ul>
        {topUsers.map((user) => (
          <li key={user.id} className="border p-4 mb-2 rounded-lg shadow-md">
            <h3 className="font-semibold">{user.name}</h3>
            <p>Posts: {user.postCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
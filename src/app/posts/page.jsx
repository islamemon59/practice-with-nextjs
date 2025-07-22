import Link from "next/link";
import React from "react";
import styles from "./post.module.css"

export const fetchPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data;
};

const Posts = async () => {
  const posts = await fetchPostsData();

  return (
    <div className="grid grid-cols-6 gap-6">
      {posts.map((post) => {
        return (
          <div key={post.id} className={`border-2 rounded border-emerald-500 ${styles["post-card"]}`}>
            <p className="border-2 border-emerald-500 p-2 rounded">
              {post.title}
            </p>
            <p className="border-2 border-emerald-500 p-2 rounded">
              {post.body}
            </p>
            <Link
              href={`/posts/${post.id}`}
              className="px-3 py-2 rounded border-2 font-semibold"
            >
              Details
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

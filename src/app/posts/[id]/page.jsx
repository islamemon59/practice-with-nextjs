import React from "react";

const fetchSingleData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
    const { id } = await params;
  const post = await fetchSingleData(id)
  return {
    title: post.title,
    description: post.description,
  }
}

const SinglePost = async ({ params }) => {
  const { id } = await params;
  const singlePost = await fetchSingleData(id);
  console.log(singlePost);
  return (
    <div className="max-w-2xs border-2 rounded p-2">
      <p>{singlePost.title}</p>
      <p>{singlePost.body}</p>
    </div>
  );
};

export default SinglePost;

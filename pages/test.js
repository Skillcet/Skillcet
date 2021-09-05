import React from "react";

function test({ data }) {
  var n = new Date(data[0].createdAt).getFullYear();
  var today = new Date();
  console.log([n, today]);
  return <div>{data[0].createdAt}</div>;
}

export default test;
export async function getStaticProps() {
  const res = await fetch(`https://mighty-wave-83703.herokuapp.com/nra-posts`);

  // `https://mighty-wave-83703.herokuapp.com/nra-posts?_sort=Tab:ASC`
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 10,
  };
}

import Link from "next/link";

const Page = async () => {
  const data = await fetch("http://localhost:3000/api/posts");
  const posts = await data.json();
  type Sample = {
    userId: number, 
    id: number, 
    title: string, 
    body: string
 }

  const showPosts = () => {
    return posts.map((e: Sample) => {
      return <li key={e.id} className="p-5">
        <Link href={`/${e.id}`}>{ e.title }</Link>
      </li>;
    });
  };

  return (
    <div className="h-screen w-full">
      <ul>{showPosts()}</ul>
    </div>
  );
};

export default Page;

import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../redux/features/api/baseApi";
import { useState } from "react";
import { ContactUs } from "./ContactUs";

const Chat = () => {
  const [isopen, setIsOpen] = useState(false);
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  if (isLoading) {
    return <div>Loading......</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="bg-zinc-900 text-zinc-50">
      <div className="flex gap-5 items-center">
        <Link to={`/addPost`} className="bg-indigo-700 border p-3">
          Add-Post
        </Link>
        <h1>Chat</h1>
        <button
          onClick={() => setIsOpen(!isopen)}
          className="bg-indigo-600 text-zinc-50 p-3"
        >
          Contact Us
        </button>
      </div>
      {isopen && <ContactUs />}
      <div className="flex flex-col gap-4 p-5">
        {!isLoading &&
          !isError &&
          posts?.map((item, index) => (
            <Link
              to={`/chat/${item?.id}`}
              key={index}
              className="bg-zinc-700 text-zinc-50 p-10"
            >
              <h4 className="font-bold text-xl">{item?.title}</h4>
              <p>{item?.body}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Chat;

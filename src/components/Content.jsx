/** @format */

import { useContext } from "react";
import { AppContext } from "../context/Context";
import Spiner from "./Spiner";

const Content = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="mt-28 max-w-175 flex flex-col gap-10 flex-1 mb-24 overflow-x-hidden ">
      {loading ? (
        <div className="mx-auto my-auto">
          <Spiner />
        </div>
      ) : posts.length === 0 ? (
        <div className="mx-auto my-auto text-3xl font-mono font-bold">
          Post Not Found
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="flex flex-col gap-2 overflow-x-hidden w-full">
            <p className="font-bold text-md ">{post.title}</p>

            <div>
              <p className=" italic text-slate-600">
                By <span className="font-bold">{post.author}</span> on{" "}
                <span className="font-bold">{post.category}</span>
              </p>
              <p>
                Posted on <span>{post.date}</span>
              </p>
            </div>

            <div className="overflow-x-hidden">
              <p>{post.content}</p>
              <div className="flex gap-3 items-center">
                {post.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="italic text-blue-700 underline cursor-pointer"
                  >
                    #<span>{tag}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Content;

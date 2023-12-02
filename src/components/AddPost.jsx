import { useSetPostMutation } from "../redux/features/api/baseApi";

const AddPost = () => {
  const [setPost, { data: postData }] = useSetPostMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    if (title === "") {
      return alert("fill the input");
    }
    const info = {
      title,
    };

    setPost(info);
    form.reset();
    alert("post are submited");
    console.log(postData);
  };
  return (
    <div>
      <h4 className="text-center text-xl font-bold">AddPost</h4>
      <div className="max-w-[600px] mx-auto p-3">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <label htmlFor="">title</label>
            <input type="text" name="title" id="" />
          </div>
          <div>
            <button
              className="hover:text-zinc-50 border p-4 hover:bg-indigo-700 transition-all duration-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;

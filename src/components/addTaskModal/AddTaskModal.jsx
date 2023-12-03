import { useState } from "react";
import Modal from "../ui/Modal/Modal";
import toast, { Toaster } from "react-hot-toast";
import { useAddTaskMutation } from "../../redux/features/tasks/tasksApi";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const [addTask, { data, error }] = useAddTaskMutation();
  console.log(error);
  console.log(data);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, assignTo } = formData;
    if (title === "" || assignTo === "") {
      return toast.error("please fill the title & assign to");
    }

    addTask({ ...formData, status: "pending" });
    setIsOpen(false);
  };

  const scafolding = {
    title: "",
    details: "",
    deadline: "",
    assignTo: "",
    piority: "",
  };
  const [formData, setFormData] = useState(scafolding);
  return (
    <div>
      <Toaster />
      <Modal title={"modal title here"} isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4 ">
          <div className="flex flex-col gap-3">
            <label htmlFor="title">Title</label>
            <input
              defaultValue={formData.title}
              onChange={handleChange}
              name="title"
              type="text"
              className="cinpt"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="title">Details</label>
            <textarea
              defaultValue={formData.details}
              onChange={handleChange}
              name="details"
              type="text"
              className="cinpt"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="deadLine">deadLine</label>
            <input
              defaultValue={formData.deadline}
              onChange={handleChange}
              name="deadline"
              type="date"
              className="cinpt"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="assignTo">assign-To</label>
            <select
              defaultValue={formData.assignTo}
              onChange={handleChange}
              name="assignTo"
              type="text"
              className="cinpt"
            >
              <option>Select Name</option>
              <option value={"jihad"}>jihad</option>
              <option value={"muzahidul"}>muzahidul</option>
              <option value={"rabbi"}>rabbi</option>
              <option value={"nahid"}>nahid</option>
              <option value={"al-amin"}>al-amin</option>
              <option value={"robin"}>robin</option>
              <option value={"mahfuz"}>mahfuz</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="piority">piority</label>
            <select
              defaultValue={formData.piority}
              onChange={handleChange}
              name="piority"
              className="cinpt"
            >
              <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Low"}>Low</option>
            </select>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center gap-4">
              <button
                type="reset"
                onClick={handleCancel}
                className="w-fit px-4 py-2 rounded-md bg-orange-600 shadow text-zinc-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-fit px-4 py-2 rounded-md bg-blue-600 shadow text-zinc-50"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;

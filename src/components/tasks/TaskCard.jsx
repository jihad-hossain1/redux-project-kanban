import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useUpdateTaskMutation } from "../../redux/features/tasks/tasksApi";

const TaskCard = ({ task }) => {
  const [updateTask, { data, error }] = useUpdateTaskMutation();
  const handleUpade = (id, updateStatus) => {
    const data = {
      status: updateStatus,
    };
    const options = {
      id: id,
      data: data,
    };
    updateTask(options);
  };
  console.log(data);
  console.log(error);
  let updateSt;
  if (task.status === "pending") {
    updateSt = "running";
  } else if (task.status === "running") {
    updateSt = "done";
  } else {
    updateSt = "archive";
  }
  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task?.piority === "High" ? "text-red-500" : ""
        } ${task?.piority === "Medium" ? "text-yellow-500" : ""} ${
          task?.piority === "Low" ? "text-green-500" : ""
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.details}</p>
      <p className="text-sm">Assigned to - {task?.assignTo}</p>
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex flex-col gap-1">
          <p>{task?.deadline}</p>
          <h4>{task?.status}</h4>
        </div>
        <div className="flex gap-3">
          <button onClick={() => console.log("remove")} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() => handleUpade(task._id, updateSt)}
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

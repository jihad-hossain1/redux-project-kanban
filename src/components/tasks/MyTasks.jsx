import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userTasks } from "../../redux/features/tasks/taskSlice";
import { updatedStatus, userTasks } from "../../redux/features/tasks/taskSlice";
import TaskDetailsModal from "../taskDetailsModal/TaskDetailsModal";
// import {} from '../../'

const MyTasks = () => {
  const { tasks, userSpecificTask } = useSelector((state) => state.tasksSlice);
  const { name } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [isId, setIsId] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleId = (tid) => {
    setIsId(tid);
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    dispatch(userTasks(name));
  }, [name, dispatch, tasks]);
  console.log(name);

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} isId={isId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTask?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleId(item?.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updatedStatus({ id: item.id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;

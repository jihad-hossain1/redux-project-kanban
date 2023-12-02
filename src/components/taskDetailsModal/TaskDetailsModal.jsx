import Modal from "../ui/Modal/Modal";
import { useSelector } from "react-redux";

const TaskDetailsModal = ({ isOpen, setIsOpen, isId }) => {
  const { tasks } = useSelector((state) => state.tasksSlice);
  const task = tasks?.find((t) => t.id === isId);
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
        {task?.details}
      </Modal>
    </div>
  );
};

export default TaskDetailsModal;

import { Menu } from "@headlessui/react";
import { signOut } from "firebase/auth";
import auth from "../../../firbase/firebase.config";
import { isLogOut } from "../../../redux/features/users/usersSlice";
import { useDispatch } from "react-redux";
import { FaUserLarge } from "react-icons/fa6";

const MyDropdown = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    signOut(auth);
    dispatch(isLogOut());
  };
  return (
    <Menu>
      <Menu.Button>
        <FaUserLarge />
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="#">
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button className={`${active && "bg-blue-500"}`} onClick={logOut}>
              LogOUt
            </button>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};
export default MyDropdown;

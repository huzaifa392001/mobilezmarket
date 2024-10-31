import { getImage, logout } from "@/utils/helper";
import { Dropdown } from "antd";
import Image from "next/image";
import StyledButton from "../StyledButton/StyledButton";
import { MdMenu } from "react-icons/md";
import UserAvatar from "../UserAvatar/UserAvatar";


const DashboardHeader = (props) => {
  const { userData, handleToogleMenu = () => { } } = props;


  const items = [

    {
      key: "6",
      label: (
        <>
          <span onClick={logout}>Sign out</span>
        </>
      ),
    },
  ];

  return (
    <div className="dashboard_header">
      <StyledButton className="icon_style md " onClick={handleToogleMenu}>
        <MdMenu />
      </StyledButton>
      <Dropdown
        menu={{
          items,
        }}
        arrow
      >

        <div className="user">


          {userData?.photo &&
            <UserAvatar data={userData}
              height={50} width={50}
            />
          }
          <h1>{userData?.name}</h1>
        </div>
      </Dropdown>
    </div>
  );
};

export default DashboardHeader;

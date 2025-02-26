import { Divider } from "@mui/material";

import FooterComponent from "../../components/Footer/FooterComponent";
import NotChangeComponent from "../../components/ProfileUser/NotChangeComponent";
import ChangePasswordComponent from "../../components/ProfileUser/ChangePasswordComponent";
import ImageIconComponent from "../../components/ProfileUser/ImageIconComponent";

interface ProfileUserPageProps {
  t: (key: string) => string;
}

const ProfileUserPage: React.FC<ProfileUserPageProps> = ({t}) => {
  return (
    <div className="flex flex-col gap-10 justify-between h-full">
      <div className="w-full flex flex-col lg:w-full">
        <h1 className="mt-2 lg:mt-3 text-black text-xl text-start  font-montserrat">
          Profile User
        </h1>
        <Divider className="w-full h-[0.5px] bg-slate-400" />

        <div className="bg-white mt-4 lg:mt-6 mb-4">
          <div className="p-2 py-3 flex flex-col gap-4 lg:flex lg:flex-row lg:gap-4 lg:justify-start lg:items-center lg:p-8 shadow-lg rounded-md border-2 border-blue-400">
            {/* image */}
            <ImageIconComponent />
            {/* not change */}
            <NotChangeComponent t={t}/>

            <div className="hidden lg:block lg:h-80 w-1 lg:bg-yellow-200 "></div>

            {/* change available */}
            <ChangePasswordComponent t={t}/>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ProfileUserPage;

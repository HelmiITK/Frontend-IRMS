import { Divider } from "@mui/material";

import NotChangeComponent from "../../components/ProfileUser/NotChangeComponent";
import ChangePasswordComponent from "../../components/ProfileUser/ChangePasswordComponent";
import ImageIconComponent from "../../components/ProfileUser/ImageIconComponent";

interface ProfileUserPageProps {
  t: (key: string) => string;
}

const ProfileUserPage: React.FC<ProfileUserPageProps> = ({ t }) => {
  return (
    <>
      <h1 className="lg:mt-2 text-black text-xl text-start mb-2 font-montserrat">
        Profile User
      </h1>

      <Divider className="w-full h-[0.5px] bg-slate-400" />

      <div className="bg-white mt-4 lg:mt-6 mb-4">
        <div className="p-2 py-3 flex flex-col gap-4 lg:flex lg:flex-row lg:gap-4 lg:justify-start lg:items-center lg:p-8 shadow-lg rounded-md border-2 border-blue-400">
          {/* image */}
          <ImageIconComponent />
          {/* not change */}
          <NotChangeComponent t={t} />

          <div className="hidden lg:block lg:h-80 w-1 lg:bg-yellow-200 "></div>

          {/* change available */}
          <ChangePasswordComponent t={t} />
        </div>
      </div>
    </>
  );
};

export default ProfileUserPage;

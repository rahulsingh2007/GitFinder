import Repo from "./Repo";
import UserDetail from "./UserDetails/UserDetail";

const User = ({ user, repos }) => {
    if (!user) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[70vh] text-center px-4">
                <h1 className="text-[#888882] text-md mb-2"> Search any GitHub account </h1>
                <p className="text-[#E3E2DF] text-sm"> e.g. torvalds, gaearon, sindresorhus </p>
            </div>);
    }
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <UserDetail user={user} />
            <div className="w-full max-w-3xl text-left">
                <h2 className="font-semibold text-sm mb-5">
                    Repositories <span className="text-[#888882]">
                        {user?.public_repos}
                    </span>
                </h2>
            </div>
            <Repo repos={repos} />
        </div>
    );
};

export default User;
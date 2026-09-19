import GitHubber from "./GitHubber"
import Profile from "./Profile"

const UserDetail = ({ user }) => {
    return (
        <div className="flex justify-center mx-auto my-10 w-full px-4">
            <div className="bg-white w-full max-w-3xl p-6 border border-[#E2E2DE] shadow-sm rounded-sm">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                    <img
                        src={user?.avatar_url}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover shrink-0"
                    />
                    <div className="w-full">
                        <Profile user={user} />
                        <p className="text-sm text-[#888892] my-1">{user?.bio}</p>
                        <GitHubber user={user} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;

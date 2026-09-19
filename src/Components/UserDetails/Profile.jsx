const Profile = ({ user }) => {
    return (
        <div className="flex flex-wrap gap-1 items-center">
            <p className="text-2xl font-bold"><a href={user?.html_url}>{user?.name}</a></p>
            <p className="text-gray-500 text-sm">{user?.login}</p>
            <p className="bg-[#DCFCE7] text-[#16A381] text-sm px-2 rounded">Joined {user?.created_at ? user.created_at.slice(0, 4) : "N/A"}</p>
        </div>
    )
}

export default Profile
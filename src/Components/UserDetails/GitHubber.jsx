const GitHubber = ( {user} ) => {
    return (
        <div className="text-[#88888E] flex gap-3 text-sm py-4">
            <p><span className="font-lg text-black font-bold">{user?.public_repos}</span> repos</p>
            <p><span className="font-lg text-black font-bold">{user?.followers}</span> followers</p>
            <p><span className="font-lg text-black font-bold">{user?.following}</span> following</p>
            <p>{user?.location}</p>
        </div>
    )
}

export default GitHubber
const Repo = ({ repos }) => {
    return (
        <div>
            {repos.map((elem) => (
                <div key={elem.id} className="my-3 px-5 py-4 w-full max-w-3xl mb-4 bg-white border border-[#E2E2DE] shadow-sm rounded-sm">
                    <h2 className="text-[#2CA95B] font-bold">
                        <a href={elem.html_url}>{elem.name}</a>
                    </h2>
                    <p className="text-sm text-[#888882]">
                        {elem.description || "No description available"}
                    </p>

                </div>
            ))}

        </div>
    );
};

export default Repo;
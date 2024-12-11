

const UserCard = ({ user }) => {
    return (
        <div className="bg-slate-100 rounded-xl flex flex-col gap-4 p-6">
            <h2>{user.name}</h2>
            <p>{user.phone}</p>
            <p>{user.email}</p>
        </div>
    )

}

export default UserCard;
function AllData () {
    const ctx = React.useContext(UserContext);
    let content = [];

    for (let i = 0; i < ctx.users.length; i++) {
        content.push(
        <tr key={i}>
        <td key={"name" + i}>{ctx.users[i].name}</td>
        <td key={"email" + i}>{ctx.users[i].email}</td>
        <td key={"password" + i}>{ctx.users[i].password}</td>
        <td key={"balance" + i}>{ctx.users[i].balance}</td>
        </tr>
        )
    }

    return (
        <>
        <h2 style={{margin:"1em"}}>All Data</h2>
        <div className="card" style={{width: "35rem", margin:"2em"}}>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
                </tr>
            </thead>

            <tbody>
                    {content}
            </tbody>
            </table>
        </div>
        </>
    );
}
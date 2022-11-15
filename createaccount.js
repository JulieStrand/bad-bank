function CreateAccount () {
    const [show, setShow] = React.useState(true);
    const [name, setName] = React.useState('');
    const [status, setStatus] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handleCreate() {
        console.log(name, email, password);
        
        if (!name || name.length < 1) alert("Error, invalid name")
        else if (!email || email.length < 1) alert ("Error, invalid email")
        else if (!password || password.length < 8) alert("Error, password must be at least 8 characters")
        else {
            ctx.users.push({name, email, password, balance: 100});
            setShow(false);
            setStatus(true);
            alert('Successfully Created Account');
        }
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card 
            bgcolor = "info"
            header = "Create Account"
            body = {show ? (
                <>
                Name<br/>
                    <input 
                    type="input" 
                    className="form-control" 
                    id="name" 
                    placeholder="Enter name" 
                    value={name} 
                    onChange={ e => {setName(e.currentTarget.value); setStatus(false)}}/> <br/>
                Email address<br/>
                    <input 
                    type="input" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={ e => {setEmail(e.currentTarget.value); setStatus(false)}}/> <br/>
                Password<br/>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Enter password" 
                    value={password} 
                    onChange={ e => {setPassword(e.currentTarget.value); setStatus(false)}}/> <br/>
                <button 
                    type="submit" 
                    className="btn btn-light" 
                    disabled={status}
                    onClick={handleCreate}
                    >Create Account</button>
                </>
            ) : (
                <>
                Name<br/>
                    <input 
                        type="input" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter name" 
                        value={name} 
                        onChange={ e => setName(e.currentTarget.value)}/> <br/>
                Email address<br/>
                    <input 
                        type="input" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email" 
                        value={email} 
                        onChange={ e => setEmail(e.currentTarget.value)}/> <br/>
                Password<br/>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter password" 
                        value={password} 
                        onChange={ e => setPassword(e.currentTarget.value)}/> <br/>
                <button 
                    type="submit" 
                    className="btn btn-light" 
                    onClick={clearForm}
                    >Add another account</button>
                </>
            )}
        />
    );
}
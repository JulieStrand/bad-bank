function Withdraw () {
    const ctx = React.useContext(UserContext);
    const user = ctx.users[0];
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState(true);
    const [bal, setBal] = React.useState(user.balance);
    const [amount, setAmount] = React.useState('');
   
    const handleSubmit = () => {
        if(!amount || amount.length < 1 || amount <= 0) alert("Error: Please enter a valid amount")
        else if(isNaN(amount)) alert("Error: Please enter a valid number")
        else if (Number(amount) > Number(bal)) alert ("Error: insufficient funds")
        else {
            console.log(`withdrawing $${amount}`);
            user.balance -= Number(amount);
            setBal(user.balance);
            event.preventDefault();
            setShow(false);
        }
    };

    const clearForm = () => {
        setAmount('');
        setShow(true);
        setStatus(true)
    }

    return (
        <Card 
            bgcolor = "danger"
            txtcolor= "white"
            header = "Withdrawal"
            body = {show ? (
                <>
                Balance: ${bal}<br/><br/>
                Withdrawal Amount:<br/>
                    <input 
                        style={{marginTop:".5em"}}
                        type="input" 
                        className="form-control" 
                        id="amount" 
                        placeholder="Enter amount" 
                        value={amount} 
                        onChange={ e => {setAmount(e.currentTarget.value); setStatus(false)}}/><br/>
                <button 
                    type="submit" 
                    className="btn btn-light" 
                    disabled={status}
                    onClick={handleSubmit}>
                        Withdraw</button>
                </>
            ) : (
                <>
                <h5>Success</h5>
                Balance: ${bal}<br/><br/>
                <button 
                    type="submit" 
                    className="btn btn-light" 
                    onClick={clearForm}>
                        Make another withdrawal</button>
                </>
            )}
        />
    );
}
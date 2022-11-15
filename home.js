function Home () {
    
    return (
        <Card 
            bgcolor="success"
            txtcolor="white"
            header="BadBank Home"
            title="Welcome to BadBank"
            text="You probably shouldn't use this bank"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}
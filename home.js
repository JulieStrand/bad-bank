function Home () {
    
    return (
        <Card 
            bgcolor="success"
            txtcolor="white"
            header="BadBank Landing Page"
            title="Welcome to Bad Bank"
            text="You can use this bank"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}
function User(props){

    console.log(props);

    return (
        <div className="User box">
            <h1>Name: {props.userName}</h1>
            <p>Fav food: {props.favFood}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default User;
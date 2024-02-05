
function Header(){

    const amount = 40;

    const info = {
        title: "This is the Header component",
        subtitle: "this is the subtitle"
    }

    const renderMenu = () => {
        return <p>This is the menu</p>
    }

    return (
        <>
            <h1>{info.title}</h1>
            <h2>{info.subtitle}</h2>

            {/* Inside curly braces, you can have any valid JS expression (anything that translates to a value) */}
            <p className="info">Amount: {amount * 3}</p>

            {/* invoke a function that returns JSX */}
            {renderMenu()}
        </>
    )
        
}

export default Header;
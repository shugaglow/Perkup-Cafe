function Header() {
    // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <h2>PerkUp Café</h2>
                </div>

                <div className="menu-buttons">
                    <a href="#">Menu</a>
                    <a href="#">cart</a>
                    <a href="#">Checkout</a>
                </div>
            </nav>

            <div className="hero">
                <h2>Brewed for You, Delivered Fresh!</h2>
                <p>We believe coffee is an art. Our beans are handpicked, ethically sourced, and brewed by master baristas to bring you the perfect cup every time.
                </p>
            </div>
        </header>
    );
}

export default Header
import PropTypes from "prop-types"


const coffeeData = [
    {
        name: "Expresso",
        description: "A strong and concentrated coffee shot with a deep, bold flavor.",
        price: "N10,000",
        photoName: "Coffee/espresso.jpg",
        soldOut: false,
    },
    {
        name: "Affogato",
        description: "Affogato combines a shot of espresso poured over cold vanilla ice.",
        price: "N9,000",
        photoName: "Coffee/affogato.jpg",
        soldOut: false,
    },
    {
        name: "Cappucino",
        description: "Cappuccino offers a robust coffee flavor with a velvety, airy texture.",
        price: "N12,000",
        photoName: "Coffee/cappuccino.jpg",
        soldOut: false,
    },
    {
        name: "Cold Brew",
        description: "Brewed slowly with cold water for a smooth, low-acid coffee concentrate.",
        price: "N12,500",
        photoName: "Coffee/cold brew.jpg",
        soldOut: false,
    },
    {
        name: "Flat White Coffee",
        description: "A rich coffee experience with a fuller espresso flavor than a latte.",
        price: "N15,000",
        photoName: "Coffee/flat white coffee.jpg",
        soldOut: true,
    },
    {
        name: "Irish Coffee",
        description: "Made by mixing hot coffee with Irish whiskey, sugar, and whipped cream.",
        price: "18,000",
        photoName: "Coffee/irish coffee.jpg",
        soldOut: false,
    },

    {
        name: "Latte",
        description: "A smooth blend of espresso and steamed milk with a light layer of foam.",
        price: "N13,000",
        photoName: "Coffee/latte.jpg",
        soldOut: false,
    },
    {
        name: "Macchiato",
        description: "Made by marking a shot of espresso with a small amount of steamed milk or foam.",
        price: "14,000",
        photoName: "Coffee/macchiato.jpg",
        soldOut: false,
    },
    {
        name: "Mocha",
        description: "A dessert-like coffee with layers of espresso, steamed milk, and chocolate.",
        price: "20,000",
        photoName: "Coffee/mocha.jpg",
        soldOut: false,
    },
    {
        name: "Americano",
        description: "Made by diluting espresso with hot water to create a rich taste.",
        price: "N18,000",
        photoName: "Coffee/americano.jpg",
        soldOut: false,
    },
];


function Menu() {
    const coffees = coffeeData;
    const numCoffees = coffees.length;

    return (
    <main className="menu">
        <h2>Our Coffee </h2>

        {numCoffees > 0 ? (
        <>
            <p>
            Order your favorite coffee anytime, anywhere.
            </p>

            <ul className="coffees">
            {coffees.map((coffee) => (
                <Coffee coffeeObj={coffee} key={coffee.name} />
            ))}
            </ul>
        </>
        ) : (
        <p>We are still working on our menu. Please come back later </p>
        )}

    </main>
);
}

function Coffee({ coffeeObj }) {
    console.log(coffeeObj);

    return (
        <li className= {`coffee ${coffeeObj.soldOut ? "sold-out" : ""}`}>
            <div>
            <img src={coffeeObj.photoName} alt={coffeeObj.name} />
        <div>
            <h3>{coffeeObj.name}</h3>
            <p>{coffeeObj.description}</p>
            <span>{coffeeObj.soldOut ? "SOLD OUT" : coffeeObj.price}</span>
            <button className="btn">Order</button>
        </div>
            </div>

    </li>
    );
}

Coffee.propTypes = {
    coffeeObj: PropTypes.obj,
    openHour: PropTypes.number
}

export default Menu
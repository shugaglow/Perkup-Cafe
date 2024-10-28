// import PropTypes from "prop-types"

// function Footer() {
//     const hour = new Date().getHours();
//     const openHour = 12;
//     const closeHour = 22;
//     const isOpen = hour >= openHour && hour <= closeHour;
//     console.log(isOpen);

//     return (
//     <footer className="footer">
//         {isOpen ? (
//             <Order closeHour={closeHour} openHour={openHour} />
//         ) : (
//             <p>
//             We are happy to welcome you between {openHour}:00 and {closeHour}:00.
//             </p>
//         )}
//         </footer>
//     );

// }

// function Order({ closeHour, openHour }) {
//     return (
//         <div className="order">
//         <p>
//             We are open from {openHour}:00 to {closeHour}:00. Come visit us or order
//             online.
//         </p>
        
//         </div>
//     );
// }

// Order.propTypes = {
//     closeHour: PropTypes.number,
//     openHour: PropTypes.number
// }


// export default Footer


const Footer = () => {
    return (
    <footer className="footer">

      {/* Copyright Section */}
    <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} PerkUp Café. All Rights Reserved.</p>
    </div>
    </footer>
);
};

export default Footer;


import React from "react";
// import "./PopularDestinations.css";

export default function PopularDestinations() {
    const popularDestinations = [
        {
            name: "Pulau Komodo",
            image: "https://example.com/komodo-island.jpg",
            description: "Explore the unique wildlife on Komodo Island."
        },
        {
            name: "Danau Toba",
            image: "https://example.com/lake-toba.jpg",
            description: "Enjoy the breathtaking beauty of Lake Toba."
        },
        {
            name: "Raja Ampat",
            image: "https://example.com/raja-ampat.jpg",
            description: "Discover the vibrant marine life in Raja Ampat."
        },
        // Add more destinations as needed
    ];

    return (
        <div>
            <h1>Wisata Populer</h1>
            <div className="popular-destinations">
                {popularDestinations.map((destination, index) => (
                    <div key={index} className="destination-card">
                        <img src={destination.image} alt={destination.name} className="destination-image" />
                        <h2>{destination.name}</h2>
                        <p>{destination.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

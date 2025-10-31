import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuPreview.css';

const MenuPreview: React.FC = () => {
  const sampleDishes = [
    {
      name: "Prawns Salad",
      category: "Appetizer",
      description: "Fresh prawns served with organic greens"
    },
    {
      name: "Deluxe Fried Rice",
      category: "Fried Rice",
      description: "Deluxe fried rice with shrimp, chicken, and beef"
    },
    {
      name: "Ming's Crispy Ginger Chicken",
      category: "Meat",
      description: "Deep-fried chicken with our special ginger sauce"
    }
  ];

  return (
    <section className="menu-preview">
      <h2 className="menu-preview-title">Sample Menu</h2>
      <div className="menu-items">
        {sampleDishes.map((dish, index) => (
          <div key={index} className="menu-item">
            <h3 className="dish-name">{dish.name}</h3>
            <p className="dish-category">{dish.category}</p>
            <p className="dish-description">{dish.description}</p>
          </div>
        ))}
      </div>
      <Link to="/menu" className="view-menu-btn">
        View Full Menu
      </Link>
    </section>
  );
};

export default MenuPreview;

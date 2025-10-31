import React from 'react';
import '../styles/Menu.css';

const Menu: React.FC = () => {
  const menuCategories = [
    {
      title: "Appetizers",
      items: [
        { name: "Prawns Salad", price: "$12.95", description: "Fresh prawns on a bed of crisp greens" },
        { name: "Egg Rolls (2)", price: "$6.95", description: "Crispy vegetable rolls" },
        { name: "Pot Stickers (6)", price: "$8.95", description: "Pan-fried dumplings" },
        { name: "Hot and Sour Soup", price: "$4.95", description: "Spicy and tangy soup" }
      ]
    },
    {
      title: "Rice Dishes",
      items: [
        { name: "Deluxe Fried Rice", price: "$14.95", description: "Shrimp, chicken, and vegetables" },
        { name: "Chicken Fried Rice", price: "$11.95", description: "Classic chicken fried rice" },
        { name: "Vegetable Fried Rice", price: "$10.95", description: "Mixed vegetables" },
        { name: "Shrimp Fried Rice", price: "$13.95", description: "Fresh shrimp" }
      ]
    },
    {
      title: "Signature Dishes",
      items: [
        { name: "Ming's Crispy Ginger Chicken", price: "$16.95", description: "Our famous crispy chicken with ginger sauce" },
        { name: "Kung Pao Chicken", price: "$14.95", description: "Spicy chicken with peanuts" },
        { name: "Orange Chicken", price: "$14.95", description: "Sweet and tangy orange sauce" },
        { name: "Mongolian Beef", price: "$16.95", description: "Tender beef with green onions" }
      ]
    },
    {
      title: "Seafood",
      items: [
        { name: "Walnut Prawns", price: "$18.95", description: "Prawns with candied walnuts" },
        { name: "Salt and Pepper Prawns", price: "$17.95", description: "Crispy seasoned prawns" },
        { name: "Sweet and Sour Fish", price: "$16.95", description: "Lightly battered fish" },
        { name: "Garlic Prawns", price: "$17.95", description: "Prawns in garlic sauce" }
      ]
    }
  ];

  return (
    <div className="menu-page">
      <h1 className="menu-page-title">Our Menu</h1>
      <div className="menu-content">
        {menuCategories.map((category, index) => (
          <div key={index} className="menu-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="category-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item-full">
                  <div className="item-header">
                    <h3 className="item-name">{item.name}</h3>
                    <span className="item-price">{item.price}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

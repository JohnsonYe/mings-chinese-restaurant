export interface MenuItem {
  name: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
  notes?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  sections?: MenuSection[];
  items?: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'special',
    name: 'Special',
    sections: [
      {
        title: "Luncheon Special",
        items: [
          { name: "Deluxe Fresh Vegetables" },
          { name: "Sweet and Sour Pork" },
          { name: "Cashew Chicken" },
          { name: "Ming's Crispy Ginger Chicken" },
          { name: "Taichi Chicken" },
          { name: "Tofu with Vegetables" },
          { name: "String Beans with Pork" },
          { name: "Kung Pao Chicken" },
          { name: "Curry Chicken" },
          { name: "Lemon Chicken" },
          { name: "BBQ Pork with vegetables" },
          { name: "Hot Spicy Eggplant with Tofu" },
          { name: "Sweet and Sour Chicken" },
          { name: "Yu Shiang Chicken" },
          { name: "Chicken with Vegetables" },
          { name: "Hunan Chicken" },
          { name: "Hunan Beef" },
          { name: "Ming's Crispy Ginger Beef" },
          { name: "Sesame Beef" },
          { name: "Sweet and Sour Prawns" },
          { name: "Sesame Prawns" },
          { name: "Kung Pao Three Combo" },
          { name: "Bok Choy Fish Fillet" },
          { name: "Crispy Ginger Fish Fillet" }
        ],
        notes: [
          "Substituting brown rice, fire rice or chow mein for white rice charge additional $1.",
          "Daily lunch special soup is not including for order to go."
        ]
      },
      {
        title: "Chef's Special",
        items: [
          { name: "Egg Fuyon with Vegetables" },
          { name: "Egg Fuyon with BBQ Pork or Beef" },
          { name: "Egg Fuyon with Shrimp" },
          { name: "General Chicken" },
          { name: "Asparagus Seafood" },
          { name: "Fish Fillet" },
          { name: "Hawaiian Lemon Prawns" },
          { name: "Lamb" },
          { name: "Minced Chicken with Lettuce" },
          { name: "Asparagus Three Combo" },
          { name: "Orange Beef" },
          { name: "Fresh Mango Chicken" },
          { name: "Shanghai Cashew Prawns" },
          { name: "Sizzling Beef" },
          { name: "Satay Sauce Beef" },
          { name: "Orange Chicken" },
          { name: "Basil Chicken with Fresh Mushrooms" }
        ]
      }
    ]
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { name: "Vegetarian Spring Rolls (4)" },
      { name: "Pot Stickers (6)" },
      { name: "Assorted Appetizers" },
      { name: "Crispy Fried Chicken Wings (6)" },
      { name: "Fried Prawns (6)" },
      { name: "Crispy Chicken Salad" },
      { name: "Fried Wontons (6)" },
      { name: "Fried Chicken Salad" },
      { name: "Crab meat Puffs (6)" },
      { name: "Fried Calamari" },
      { name: "Barbecued Pork Bun (4)" },
      { name: "Barbecued Spare Ribs" }
    ]
  },
  {
    id: 'soup',
    name: 'Soup',
    items: [
      { name: "Sizzling Rice Soup (with prawns)" },
      { name: "Wonton Soup" },
      { name: "Hot and Sour Soup (with prawns)" },
      { name: "Egg Flower Soup (with prawns)" },
      { name: "Seafood ToFu Soup" },
      { name: "Basil Fish Chicken Wonton Soup" },
      { name: "Chicken with Cream Corn Soup" },
      { name: "Westlake Beef Soup" },
      { name: "Wor Wonton Soup" },
      { name: "Fish Spinach Soup" }
    ]
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    items: [
      { name: "Deluxe Fresh Vegetables" },
      { name: "Broccoli with Oyster Sauce" },
      { name: "Hot Spicy Eggplant" },
      { name: "Chinese Mushrooms, Bamboo Shoots with Snow Peas" },
      { name: "Asparagus with Oyster Sauce" },
      { name: "Garlic Bok Choy" }
    ]
  },
  {
    id: 'tofu',
    name: 'Tofu',
    items: [
      { name: "Braised Tofu (with Pork)" },
      { name: "Hot Spicy Tofu (with Pork)" },
      { name: "Salt and Pepper Tofu" },
      { name: "Family Style Tofu" },
      { name: "String Bean with Tofu" },
      { name: "Deluxe Vegetables with Tofu" },
      { name: "Kung Pao Tofu" }
    ]
  },
  {
    id: 'meat',
    name: 'Meat',
    sections: [
      {
        title: "Pork",
        items: [
          { name: "Barbecued Pork with Assorted Vegetables" },
          { name: "Barbecued Pork with String Beans" },
          { name: "Twice Cooked Pork" },
          { name: "Yu Shiang Pork" },
          { name: "Pork with Chinese Mushrooms" },
          { name: "Salt and Pepper Spare Ribs" },
          { name: "Hunan Pork" },
          { name: "Mu Shu Pork (with 4 Chinese Pancakes)" },
          { name: "Chinese Greens with Barbecued Pork" },
          { name: "Peking Spare Ribs" },
          { name: "Shredded Pork with String Beans" },
          { name: "Sweet and Sour pork" }
        ]
      },
      {
        title: "Beef",
        items: [
          { name: "Kung Pao Beef" },
          { name: "Tomato Beef" },
          { name: "Broccoli Beef" },
          { name: "Oyster Sauce Beef" },
          { name: "Snow Peas Beef" },
          { name: "Mongolian Beef" },
          { name: "Hunan Beef" },
          { name: "Chinese Greens Beef" },
          { name: "Black Pepper Beef" },
          { name: "Mu Shu Beef" },
          { name: "Asparagus Beef Seasonal" },
          { name: "Sesame Beef" },
          { name: "Curry Beef" },
          { name: "Ming's Crispy Ginger Beef" },
          { name: "String Beans Beef" },
          { name: "Beef with Deluxe Vegetables" }
        ]
      },
      {
        title: "Chicken",
        items: [
          { name: "Kung Pao Chicken" },
          { name: "Hunan Chicken" },
          { name: "Cashew Chicken" },
          { name: "Salt and Pepper Chicken" },
          { name: "Curry Chicken" },
          { name: "Ming's Crispy Ginger Chicken" },
          { name: "Chicken with Deluxe Vegetables" },
          { name: "Garlic Hot Spicy Chicken Wings" },
          { name: "Sweet and Sour Chicken" },
          { name: "Black Bean Sauce Chicken" },
          { name: "Snow Peas Chicken" },
          { name: "Taichi Chicken" },
          { name: "Garlic Chicken" },
          { name: "Lemon Chicken" },
          { name: "Broccoli Chicken" },
          { name: "Yu Shiang Chicken" }
        ]
      }
    ]
  },
  {
    id: 'seafood',
    name: 'Seafood',
    items: [
      { name: "Curry Calamari" },
      { name: "Fish Fillet with Cream Corn" },
      { name: "Salt and Pepper Calamari" },
      { name: "Sweet and Sour Prawns" },
      { name: "Cashew Prawns" },
      { name: "Salt and Pepper Prawns (no shell) or Fish Fillet" },
      { name: "Kung Pao Prawns" },
      { name: "Hot Spicy Prawns (tomato sweet and hot spicy sauce)" },
      { name: "Snow Peas Prawns" },
      { name: "Kung Pao Three Combo (with shrimp, chicken and beef)" },
      { name: "Sizzling Seafood" },
      { name: "Happy Family Delight" },
      { name: "Broccoli Prawns" },
      { name: "Black Bean Sauce Prawns" },
      { name: "Ming's Crispy Ginger Prawns" },
      { name: "Yu Shiang Prawns" },
      { name: "Mu Shu Prawns" },
      { name: "Prawns with Lobster Sauce (with egg white sauce)" },
      { name: "Seafood Delight (with shrimp, calamari and scallop)" },
      { name: "Prawns with Fresh Mushrooms" },
      { name: "Mongolian Three Combo (with shrimp, chicken and beef)" },
      { name: "Curry Prawns" },
      { name: "Empress Prawns" },
      { name: "Deluxe Fresh Vegetables with Prawns" },
      { name: "Hunan Prawns" },
      { name: "Sizzling Rice Prawns (tomato sauce)" },
      { name: "Honey Walnut Prawns" },
      { name: "Scallops with Deluxe Fresh Vegetables" },
      { name: "Sesame Prawns" },
      { name: "Bok Choy Fish Fillet or Prawns" }
    ]
  },
  {
    id: 'rice',
    name: 'Rice',
    items: [
      { name: "House Special Fried Rice" },
      { name: "Egg Fried Rice" },
      { name: "Deluxe Fried Rice" },
      { name: "Shrimp Fried Rice" },
      { name: "Beef Fried Rice" },
      { name: "Vegetables Fried Rice" },
      { name: "Tomato Beef Fried Rice" },
      { name: "Chicken Fried Rice" },
      { name: "Steamed Rice (Per Person)" },
      { name: "Barbecued Pork Fried Rice" },
      { name: "Pork Fried Rice" },
      { name: "Brown Rice (Per Person)" }
    ]
  },
  {
    id: 'noodle',
    name: 'Noodle',
    items: [
      { name: "Plain Chow Mein" },
      { name: "Deluxe Chow Mein" },
      { name: "Shrimp Chow Mein" },
      { name: "Tomato Beef Chow Mein" },
      { name: "Chicken Chow Mein" },
      { name: "Seafood Chow Mein" },
      { name: "Beef Chow Fun" },
      { name: "Garlic Chow Mein" },
      { name: "Beef Chow Mein" },
      { name: "Pork Chow Mein" },
      { name: "Deluxe Chow Fun" },
      { name: "Singapore Rice Noodle in Curry Sauce" },
      { name: "Barbecued Pork Chow Mein" },
      { name: "Vegetables Chow Mein" },
      { name: "Black Bean Chicken Chow Fun" },
      { name: "Spicy Chao Ma Noodle Soup" }
    ]
  }
];

export const getCategoryById = (id: string): MenuCategory | undefined => {
  return menuCategories.find(cat => cat.id === id);
};

export const getCategoryNames = (): string[] => {
  return menuCategories.map(cat => cat.name);
};

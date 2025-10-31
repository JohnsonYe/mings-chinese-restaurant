import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCategoryById, menuCategories } from '../menu/menuData';
import '../styles/MenuPage.css';

// Menu page component with category routing
const MenuPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const categoryId = category || 'special';
  const menuData = getCategoryById(categoryId);

  if (!menuData) {
    return <div className="menu-page">Category not found</div>;
  }

  // Helper function to render category navigation
  const renderCategoryNav = (className: string) => (
    <div className={className}>
      <Link
        to="/menu"
        className={categoryId === 'special' ? 'active' : ''}
        onClick={() => window.scrollTo(0, 0)}
      >
        Special
      </Link>
      {menuCategories.filter(cat => cat.id !== 'special').map(cat => (
        <Link
          key={cat.id}
          to={`/menu/${cat.id}`}
          className={categoryId === cat.id ? 'active' : ''}
          onClick={() => window.scrollTo(0, 0)}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="menu-page">
      {renderCategoryNav('menu-categories-nav')}

      <h1 className="menu-page-title">{menuData.name}</h1>

      <div className="menu-content">
        {menuData.sections ? (
          menuData.sections.map((section, index) => (
            <div key={index} className="menu-section">
              <h2 className="section-title">{section.title}</h2>
              <div className="menu-items-list">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item-row">
                    <span className="item-name">{item.name}</span>
                    {item.description && (
                      <span className="item-desc">{item.description}</span>
                    )}
                  </div>
                ))}
              </div>
              {section.notes && section.notes.length > 0 && (
                <div className="section-notes">
                  <ul>
                    {section.notes.map((note, noteIndex) => (
                      <li key={noteIndex}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="menu-section">
            <div className="menu-items-list">
              {menuData.items?.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item-row">
                  <span className="item-name">{item.name}</span>
                  {item.description && (
                    <span className="item-desc">{item.description}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {renderCategoryNav('menu-categories-nav-bottom')}
    </div>
  );
};

export default MenuPage;

import React from 'react';

const menuCard = ({ menuData }) => {
  console.log(menuData);

  return (
    <>
      <section className="main-card-container">
        {menuData.map((menuItem) => {
          const { id, category, name, description, image } = menuItem;

          return (
            <>
              <div className="card-container" key={menuItem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle">{id}</span>
                    <span className="card-author">{category}</span>
                    <h1 className="card-title">{name}</h1>
                    <span className="card-description">{description}</span>
                    <span className="card-read-more">read more</span>
                  </div>
                  <div className="card-image">
                    <img src={image} />
                  </div>
                  <span className="card-tag">order now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default menuCard;

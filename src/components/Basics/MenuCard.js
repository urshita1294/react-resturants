import React from 'react';

const menuCard = ({ menuData }) => {
  console.log(menuData);

  return (
    <>
      <section className="main-card-container">
        {menuData.map((menuItem) => {
          return (
            <>
              <div className="card-container" key={menuItem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle">
                      {menuItem.id}
                    </span>
                    <span className="card-author">{menuItem.category}</span>
                    <h1 className="card-title">{menuItem.name}</h1>
                    <span className="card-description">
                      {menuItem.description}
                    </span>
                    <span className="card-read-more">read more</span>
                  </div>
                  <div className="card-image"></div>
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

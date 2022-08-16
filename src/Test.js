import React, { useState } from "react";

function Menu({ items, status }) {
  const [displayChildren, setDisplayChildren] = useState(true);

  const getData = () => {
    return Object.keys(items).map((item) => {
      if (typeof items[item] === "string") {
        return status ? <li key={item}>{items[item]}</li> : null;
      } else if (items[item].constructor === Array) {
        return status ? (
          <>
            <li key={item}>
              <button
                onClick={() => {
                  setDisplayChildren({
                    ...displayChildren,
                    [item]: !displayChildren[item],
                  });
                }}
              >
                {displayChildren[item] ? "-" : "+"}
              </button>
              {items.name ? items.name : item}
            </li>
            {displayChildren[item] &&
              items[item].map((e) => {
                return <Menu items={e} status={displayChildren} />;
              })}
          </>
        ) : null;
      } else if (items[item].constructor === Object) {
        return (
          <>
            <Menu items={items[item]} status={displayChildren} />
          </>
        );
      } else {
        return null;
      }
    });
  };

  return <ul key={Math.random()}>{getData()}</ul>;
}

export default Menu;

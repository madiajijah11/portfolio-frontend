import React from "react";

function NavigationDots({ active }: any) {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { background: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;

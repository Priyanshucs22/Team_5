import React, { useState, useEffect } from "react";
import "./header.css";

function Header() {
  const text = "Order Your Favourite Food Here";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 100 : 150; 

    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else {
        setIsDeleting(!isDeleting);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <div className="header">
      <div className="header-content">
        <h2>
          <span className="typing-text">{displayText}</span>
          <span className="cursor">|</span>
        </h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary. Our mission is to
          satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;

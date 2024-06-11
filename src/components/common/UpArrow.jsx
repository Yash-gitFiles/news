import React, { useEffect, useState } from "react";
import styles from "../../styles/common/upArrow.module.css";

function UpArrow() {
  const [scroll, setScroll] = useState(window.screenY);
  function handleTop() {
    window.scroll(0, 0);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div className={styles.btnContainer}>
      {scroll > 450 && (
        <button onClick={handleTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default UpArrow;

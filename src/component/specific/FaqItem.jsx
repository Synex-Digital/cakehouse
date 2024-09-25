import React, { useState } from "react";
import { Link } from "react-router-dom";

const FaqItem = ({ tittle, description,index=1 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item border-b border-[#B1B1B1] border-t">
      <h2 className="accordion-header mb-0" id="headingOne1">
        <Link
          to="#"
          className="accordion-button collapsed lg:text-lg md:text-base text-sm relative flex items-center md:py-7 py-5 lg:pr-[30px] md:pr-[25px] pr-[30px]"
        >
          Q{index}: {tittle}
          <span
            className="toggle-close"
            onClick={() => setIsOpen((prev) => !prev)}
          ></span>
        </Link>
      </h2>
      <div id="collapseOne1" className="accordion-collapse">
        <div className="accordion-body py-[25px] mt-[-9px]"></div>
      </div>
      {isOpen && (
        <p
          style={{
            marginBottom: "25px",
          }}
          className="text-[15px] max-w-[515px] tracking-[0.02em]"
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default FaqItem;

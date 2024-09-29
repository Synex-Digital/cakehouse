import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetailComment = ({ img, name, description }) => {
  return (
    <li class="comment">
      <div class="comment-body relative min-h-[95px] border-b border-[#2222221a] md:pl-[100px] pl-[75px] md:pb-[30px] pb-[15px] md:mb-[30px] mb-5">
        <div class="comment-author vcard">
          <img
            class="md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full left-0 absolute"
            src={img}
            alt={name}
          />
          <cite class="not-italic text-base font-semibold mb-2 block">
            {name}
          </cite>
        </div>
        <div class="star-rating mb-[10px] text-sm" data-rating="2">
          <div className="flex items-center gap-1">
            <i class="fas fa-star text-yellow">
              <FaStar />
            </i>
            <i class="fas fa-star text-yellow">
              <FaStar />
            </i>
            <i class="fas fa-star text-yellow">
              <FaStar />
            </i>
            <i class="fas fa-star text-yellow">
              <FaStar />
            </i>
            <i class="fas fa-star text-yellow">
              <FaStar />
            </i>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ProductDetailComment;

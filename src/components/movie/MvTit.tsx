import React from "react";

const MvTit: React.FC = () => (
  <>
    <div className="flex text-[20px] font-bold gap-[5px] mt-2">
      <div className="bg-gray rounded-[999px]">연령</div>
      <div>파묘</div>
    </div>
    <div className="flex justify-between text-[14px] mt-2">
      <div>
        <span>예매율:</span>
        <span>28.60%</span>
      </div>
      <div>
        <span>개봉일:</span>
        <span>2024.02.22</span>
      </div>
    </div>
    <button className="w-[6.25rem] h-[1.875rem] mt-2 bg-gray rounded-[5px] text-[13px]">
      예매하기
    </button>
  </>
);

export default MvTit;

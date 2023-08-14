import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
import "../datepicker.css";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="flex w-full h-full bg-white relative mr-10">
      <div className="flex items-center justify-between w-full h-full relative">
        <div className="absolute left-0 bottom-0 z-1 w-full h-full flex items-center justify-end pr-8">
          <div>
            <BsCalendar className="text-accent text-base w-full flex" />
          </div>
        </div>
        <DatePicker
          className="w-full h-full"
          selected={endDate}
          placeholderText="Check out"
          onChange={(date) => setEndDate(date)}
        />
      </div>
    </div>
  );
};

export default CheckOut;


// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "../datepicker.css";
// import { BsCalendar } from "react-icons/bs";
// const CheckOut = () => {
//   const [endDate, setEndDate] = useState(false);
//   return (
//     <div className="flex w-full h-full bg-white relative py-1">
//       <div className="flex items-center justify-between w-full h-full">
//         <DatePicker
//           className="w-full h-full flex items-center"
//           selected={endDate}
//           placeholderText="Check out"
//           onChange={(date) => setEndDate(date)}
//         />
//         <div className="absolute left-0 bottom-0 z-1 w-full h-full flex items-center justify-end pr-8">
//           <div>
//             <BsCalendar className="text-accent text-base w-full flex" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;

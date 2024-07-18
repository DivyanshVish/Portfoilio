// import React from "react";

// function Headers() {
//   return (
//     <div className="p-5 bg-primary flex justify-between">
//       <h1 className="text-secomdary text-4xl font-semibold font-family: ">Divyansh</h1>
//       <h1 className="text-tertiary text-4xl font-semibold">Vishwakarma</h1>
//     </div>
//   );
// }

// export default Headers;

import React from "react";

function Headers() {
  return (
    <div className="p-5 bg-primary flex justify-between">
      <h1
        className="text-forth text-4xl font-semibold"
        style={{
          fontFamily: "Great Vibes, cursive",
          fontWeight: 400,
          fontSize: 45,
          fontStyle: "normal",
        }}
      >
        Divyansh
      </h1>
      <h1
        className="text-tertiary text-4xl font-semibold"
        style={{
          fontFamily: "Great Vibes, cursive",
          fontWeight: 400,
          fontSize: 50,
          fontStyle: "normal",
        }}
      >
        Vishwakarma
      </h1>
    </div>
  );
}

export default Headers;

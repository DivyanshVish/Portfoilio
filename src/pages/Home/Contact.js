import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contacts() {
  const User = {
    Name: "Divyansh Vishwakarma",
    Email: "vishwakarmadivyansh352@gmail.com",
    Phone: "8429438423",
    Age: null,
    Gender: "Male",
    Address: "Varanasi, Uttar Pradesh",
    Country: "India",
  };
  return (
    <div>
      <SectionTitle title="Say Hola !!" />
      <div className="flex">
        <div className="flex flex-col">
          <p className=" text-tertiary">{"{"}</p>
          {Object.keys(User).map((key) => (
            <p className=" ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">"{User[key]}"</span>,
            </p>
          ))}
          <p className=" text-tertiary">{"}"}</p>,
        </div>
      </div>
    </div>
  );
}
export default Contacts;

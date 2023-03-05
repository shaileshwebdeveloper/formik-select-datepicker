import { useState } from "react";

const initState = {
  name: "",
  email: "",
  country: "",
  status: false
};

export const BasicForm = () => {
  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    // console.log(e.target)

    //destructing
    const { value, name, checked, type } = e.target;

    // Important
    const valueToUpdate = type === "checkbox" ? checked : value;

    setFormData({
      // using named key
      ...formData,
      [name]: valueToUpdate
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
        />
      </div>

      <div>
        <select
          placeholder="Country"
          defaultValue={formData.country}
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option key="India">India</option>
          <option key="USA">USA</option>
        </select>
      </div>

      <div>
        <input
          name="status"
          type="checkbox"
          checked={formData.status}
          onChange={handleChange}
        />
        <label htmlFor="">Current Working</label>
      </div>

      <button type="submit">Submit</button>

      <ul>
        <li>Name : {formData.name}</li>
        <li>Email : {formData.email}</li>
        <li>Country : {formData.country}</li>
      </ul>
    </form>
  );
};

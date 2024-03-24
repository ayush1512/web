import { useState } from "react";

export default function ShoppingListForm() {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const handleChange = (e) => {
    setFormData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <form style={{display:"flex", flexDirection:"column"}}>
      <h1>{formData.product}</h1>
      <h2>Quantity: {formData.quantity}</h2>
      <label htmlFor="product">Product Name </label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      <label htmlFor="quantity">Quantity </label>
      <input
        type="text"
        placeholder="quantity"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
    </form>
  );
}

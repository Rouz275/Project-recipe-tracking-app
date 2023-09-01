import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preperation: "",
  }

  const [formData, setFormData] = useState({ ...initialFormState });

  const changeHandler = ({ target }) => {
    setFormData(
      {
        ...formData,
        [target.name]: target.value,
      }
    );
  }

  const submitHandler = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" id="name" required={true} onChange={changeHandler} placeHolder="Name" />
            </td>
            <td>
              <input name="cuisine" id="cuisine" required={true} onChange={changeHandler} placeHolder="Cuisine" />
            </td>
            <td>
              <input name="photo" id="photo" required={true} onChange={changeHandler} placeHolder="URL" />
            </td>
            <td>
              <textarea name="ingredients" id="ingredients" required={true} onChange={changeHandler} placeHolder="Ingredients" />
            </td>
            <td> 
              <textarea name="preparation" id="preparation" required={true} onChange={changeHandler} placeHolder="Preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
            </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

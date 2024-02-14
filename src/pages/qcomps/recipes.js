export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  const items=r

  return (
    <div>
      <h1>Recipes</h1>
      {
recipes.map((r) =>{


  <div key={r.name}>
    <h2>r.name</h2>
    {
      <ul>
       { Array.from(r.ingredients).map((i,indx)=>
       {
        return <li key={ingredients+indx}>
          {i}

        </li>


        })}
      </ul>


      }

</div>})
      }
      </div>)
}

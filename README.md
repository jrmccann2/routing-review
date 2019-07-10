This project shows an example of using React Router to render 2 distinct routes from a
Header component that controls the Links.

App.js manages our state. It has two input values that are updated through its handleChange
function. Finally, state has a list (array) that is updated through our handleSubmit
function. App.js renders Hashrouter with our Header component and our routes.js as children.

Routes.js returns a Switch component with two children Route components.

Our Header component receives props of our handleChange, handleSubmit, and list from App.
We then pass those props to the Form and List component via the Link:

```
  function Header (props){
    const { handleChange, handleSubmit, list } = props
    return (
      <div>
        <Link to={{pathname: "/Form", state: {handleChange, handleSubmit}}} >Form</Link>
        <Link to={{pathname: "/List", state: {list}}} >List</Link>
      </div>
    )
  }
```

The Link component's "to" prop does not only accept a string representing the path. In this
case we are passing it an object. The first brackets escape the JSX and the inner brackets
wrap our object. We give the object `pathname` and `state` properties. React router reads the
`pathname` property to know where to go and the `state` property allows us to pass some data
to that location (Route). For more information: https://reacttraining.com/react-router/web/api/Link

Form and List then get this information off of `props.location.state` because that is where 
React Router puts the data we passed on the `state` property of the object we passed to our
Link on the "to" prop (See the Header Component).
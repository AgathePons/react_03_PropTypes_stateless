# React props, keys & stateless components

Day 2 of React.

## Props

To avoid errors or undefined, we use PropTypes to define what is wanted in component props.

### Import PropTypes

Import PropTypes:

```js
import PropTypes from 'prop-types';
```

### Define the props

Use `ComponentName.propTypes` to describe the props.

Simple example:

```js
ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
```

With an array of strings:

```js
ComponentName.propTypes = {
  listOfPhrases: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
```

With an array of objects:

```js
ComponentName.propTypes = {
  things: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
```

### Set the props in the component

Use the props as usual in the component:

```js
function ComponentName({ fistThing, secondThing }) {
  return (
    <div>
      <h1>{fistThing}</h1>
      <p>
        Blablabla {secondThing}.
      </p>
    </div>
  );
}
```

### Call the component with its props

First of all, import the component:

```js
import ComponentName from 'src/components/ComponentName';
```

Then, import the data source:

```js
import myData from 'src/data/myData';
```

In the parent component, we have to set the props (at least props which are required):

```js
<ComponentName
  firstThing={myData.firstThing}
  secondThing={myData.secondThing}
/>
```

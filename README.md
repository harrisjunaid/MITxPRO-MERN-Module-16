<h3 align="center">Board Game</h3>
</br>

## About The Project
    
</br>

### 16-12  UseState Delay
useState `setter method` is asynchronous. As a result, if the `state variable` is called right after its setter method, it has not yet been updated.

</br>

### 16-11  Track Re-render With UseEffect
Track when React is re-rendering with the useEffect Hook.
Re-render is triggered when useState is changed.

React doesn't re-render if we we update directly into the DOM. The Re-render is triggered when we change useState. 

</br>

###  16-10 Parent State Forces Re-Render
Force a child re-render from the parent component.
A change in parent's state is triggering a change in the state of the child (square components).
  
</br>

### 

![Alt text](./assets/game.drawio.svg)

</br>

https://classroom.emeritus.org/courses/1173/pages/video-16-12-3-47-usestate-delay?module_item_id=290826
</br>

### React Component Lifecycle

#### Component Lifecycle:

| Mounting | Unmounting |
| :---     | :----      | 
| Creating a DOM node for a React component and inserting it into the DOM | Process of deleting or removing React components from the DOM |
| Component's life cycle begins at mounting which happens only once. |     | 
| `let someComponent = React.createElement(someComponent)`||  
| `ReactDOM.render(someComponent, document.getElementById("root"))`|`unmountComponentAtNode(document.getElementById('root'));`|  
|

    


### Built With

- HTML
- React

## License

Distributed under the MIT License. See `LICENSE-MIT.txt` for more information.


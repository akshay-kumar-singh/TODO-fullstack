import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [itemText, setItemText] = useState('');

  const addItem = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5500/api/item', {item: itemText})
      setListItems(prev => [...prev, res.data]);
      setItemText('');
    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={e => addItem(e)}>
        <input type="text" placeholder='Add Todo Item' onChange={e => {setItemText(e.target.value)} } value={itemText} />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        <div className="todo-item">
          <p className="item-content">this is the item 1</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">this is the item 2</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">this is the item 3</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;

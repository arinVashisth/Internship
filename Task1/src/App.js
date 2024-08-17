import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (editId) {
      setItems(items.map(item => 
        item.id === editId ? { ...item, name } : item
      ));
      setEditId(null);
    } else {
      const newItem = { id: Date.now(), name };
      setItems([...items, newItem]);
    }
    setName('');
  };

  const handleEdit = (item) => {
    setName(item.name);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Items</h1>
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Item name" 
        />
      </div>
      <button 
        className="btn btn-primary mb-4" 
        onClick={handleAdd}
      >
        {editId ? 'Update Item' : 'Add Item'}
      </button>
      <ul className="list-group">
        {items.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <div>
              <button 
                className="btn btn-warning btn-sm me-2" 
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>
              <button 
                className="btn btn-danger btn-sm" 
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

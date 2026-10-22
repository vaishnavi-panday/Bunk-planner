import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSubject } from '../store/subjectsSlice';

function AddSubjectForm() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSubject(name));
    setName('');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Subject name (e.g. Computer Networks)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add subject</button>
    </form>
  );
}

export default AddSubjectForm;

import { useRef, useState } from 'react';
import './TaskDialog.css';

function TaskDialogControlled({ onSubmitSuccess }) {
  const dialogRef = useRef();
  const formRef = useRef();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => {
    formRef.current.reset();
    dialogRef.current.close();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    onSubmitSuccess(name, description);
  }

  return (
    <>
    <button onClick={openModal}>Create task</button>
    <dialog ref={dialogRef}>
      <div className="modal-content">
        <h2>Create task</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Description:
            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <div className="btn-container">
          <button type="submit">Create</button>
          <button type="button" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </dialog>
    </>
  )
}

export default TaskDialogControlled;
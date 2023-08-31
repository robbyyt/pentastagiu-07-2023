import { useRef } from 'react';
import './TaskDialog.css';

function TaskDialogUncontrolled({ 
  open, 
  onSubmitSuccess,
  handleClose,
  defaultValues
}) {
  const dialogRef = useRef();
  const formRef = useRef();

  const close = () => {
    console.log(formRef.current.reset)
    formRef.current.reset();
    handleClose();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const description = formData.get('description');
    onSubmitSuccess(name, description);
    close();
  }

  return (
    <dialog open={open} ref={dialogRef}>
      <div className="modal-content">
        <h2>Create task</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label>
            Name:
            <input type="text" name="name" required defaultValue={defaultValues['name'] ?? ''} />
          </label>
          <label>
            Description:
            <textarea name="description" required defaultValue={defaultValues['description'] ?? ''} />
          </label>
          <div className="btn-container">
          <button type="submit">Create</button>
          <button type="button" onClick={close}>Cancel</button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default TaskDialogUncontrolled;
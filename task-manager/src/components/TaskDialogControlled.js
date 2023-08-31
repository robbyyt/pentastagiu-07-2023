import React, { useRef, useState, useEffect } from 'react';
import "./TaskDialog.css"

const TaskDialogControlled = ({ onClose }) => {
  const [task, setTask] = useState({
    name: '',
    assignee: '',
    description: ''
  });
  const [open, setIsOpen] = useState(true);

  const dialogRef = useRef();

  useEffect(() => {
    console.log(dialogRef?.current.open, open)
    if (dialogRef.current?.open && !open) {
      dialogRef.current?.close()
    } else if (!dialogRef.current?.open && open) {
      dialogRef.current?.showModal()
    }
}, [open])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process or submit the task data here
    // onClose();
  };

  return (
    <dialog ref={dialogRef} open>
      <div className="modal-content">
        <h2>Create Task</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={task.name} onChange={handleChange} />
          </label>
          <label>
            Assignee:
            <input type="text" name="assignee" value={task.assignee} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={task.description} onChange={handleChange} />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </dialog>
  );
};

export default TaskDialogControlled;

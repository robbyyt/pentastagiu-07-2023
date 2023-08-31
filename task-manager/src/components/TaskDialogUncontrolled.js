import React, { useRef } from 'react';
import "./TaskDialog.css";

const TaskDialogUncontrolled = ({ onClose }) => {
  const formRef = useRef();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    
    // Get form values and log them
    const task = {
      name: formData.get('name'),
      assignee: formData.get('assignee'),
      description: formData.get('description')
    };
    console.log(task);

    // Process or submit the task data here
  };

  return (
    <dialog open>
      <div className="modal-content">
        <h2>Create Task</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Assignee:
            <input type="text" name="assignee" />
          </label>
          <label>
            Description:
            <textarea name="description" />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </dialog>
  );
};

export default TaskDialogUncontrolled;

import React from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..."/>
      <button data-cy="add-task-button" className={styles.add}>Add To Task</button>
    </div>
  );
};

export default AddTask;

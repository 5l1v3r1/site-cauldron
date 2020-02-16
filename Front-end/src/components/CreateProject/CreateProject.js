import React from "react";
import Button from "./../UI/Button/Button";
import classes from "./CreateProject.module.css";

//* Dummy Container for project creation section

const CreateProject = () => {
  return (
    <form className={classes.CreateProject}>
      <span>
        {" "}
        Database Name:
        <input maxLength="20" size="20" type="text" />
      </span>
      <br />
      <span>
        {" "}
        Description:
        <input maxLength="250" size="40" type="text" />
      </span>

      <Button btnType="Danger">Discard</Button>

      <div className={classes.Tables}>
        <p>
          {" "}
          Table Name:
          <input maxLength="20" size="20" type="text" />
        </p>

        <p style={{ fontStyle: "italic", marginLeft: "10px" }}>Columns</p>
        <div className={classes.Columns}>
          <p>
            {" "}
            Column Name:
            <input maxLength="20" size="20" type="text" />
          </p>
          <div className={classes.ColumnData}>
            <p>
              {" "}
              Type:
              <input maxLength="20" size="20" type="text" />
            </p>
            <p>
              {" "}
              Column length:
              <input maxLength="20" size="20" type="text" />
            </p>
          </div>
          <p className={classes.Add}>
            Add column:
            <button>+</button>
          </p>
          <p className={classes.Add}>
            Remove column:
            <button>-</button>
          </p>
        </div>
        <p className={classes.Add}>
          Add table:
          <button>+</button>
        </p>
        <p className={classes.Add}>
          Remove table:
          <button>-</button>
        </p>
      </div>
      <p>
        <Button btnType="Success">Send</Button>
      </p>
    </form>
  );
};

export default CreateProject;

import React, { useState } from "react";

const SkillCard = ({ name, level, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="skill-card" onClick={() => setOpen(true)}>
        <h4>{name}</h4>
        <p>{level}</p>
      </div>

      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{name}</h3>
            <p>{description}</p>
            <button className="secondary-btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillCard;

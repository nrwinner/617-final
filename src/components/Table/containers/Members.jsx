import React from 'react'

const MembersContainer = ({ members }) => {
  return (
    <div className="members card">
      <div className="card-header">
        <h1>Members</h1>
      </div>
      <div className="card-content">
      <div className="members-li header">
        <strong>Name</strong>
        <strong>Meals Eaten</strong>
      </div>
        {members.map((member) => {
          return (
            <div className="members-li">
              {member.name}
              <span className="tag">{member.mealsCompleted.length}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MembersContainer
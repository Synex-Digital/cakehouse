import React from 'react';

const TeamBio = ({ bio }) => {
  return (
    <div className="team-bio mb-[55px] mt-[30px]">
      <h4 className="mb-2.5">Biography</h4>
      <p className="mb-4 lg:text-base text-[15px]">{bio}</p>
    </div>
  );
};

export default TeamBio;
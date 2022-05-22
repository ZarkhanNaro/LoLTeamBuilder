import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Team } from '../Team'
import SingleTeam from './SingleTeam'
import "../styles/App.css"


interface Props{
  teams: Team[],
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>,
  handleEditTeam: (id: number) => void
}

const ListTeams:React.FC<Props> = ({teams, setTeams, handleEditTeam}:Props) => {
  

  return (
    <div className="listTeam">
        {
          teams.map( (team,index) => (
            <SingleTeam
              key={team.id}
              teams={teams}
              team={team}
              setTeams={setTeams}
              handleEditTeam={handleEditTeam}
            />
          ))
        }
    </div>
  )
}

export default ListTeams
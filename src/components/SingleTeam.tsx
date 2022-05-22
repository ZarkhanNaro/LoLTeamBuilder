import React, { useEffect, useRef, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import "../styles/App.css"
import { Team } from '../Team'

interface Props{
    team: Team,
    teams: Team[],
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>
    handleEditTeam: ( id: number) => void
}

const SingleTeam: React.FC<Props> = ({team, teams, setTeams, handleEditTeam}:Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTeam, setEditTeam] = useState<string>(team.name)

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    const handleEditName = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTeams(
            teams.map((team) => (team.id === id ? { ...team, name: editTeam}  : team))
        );
        setEdit(false);
    }

    const handleDelete = (id: number) => {
        setTeams(teams.filter((team) => team.id !== id))
    }

  return (
    <form className="team" onSubmit={(e) => handleEditName(e, team.id)}>
      {edit ? (
        <input
            value={editTeam}
            onChange={(e) => {
              setEditTeam(e.target.value)
            }}
            className="team--text"
            ref={inputRef}
        />
      ) : (
        <div className="team--text">
            <div className='team--title'>
                {team.name}
            </div>
            {
                team.top.icon !== "" ? (
                    <div className='team--lane'>
                        <div>
                            <img src="images/roles/TOP.png" alt="" width="30px" height="30px"></img>
                        </div>
                        <div>
                            <img src={"images/champions/" + team.top.icon} alt='' width="30px" height="30px"/>
                        </div>
                    </div>
                ): (
                    <div className='team--lane'>
                        <div>
                            <img src="images/roles/TOP.png" alt="" width="30px" height="30px"></img>
                        </div>
                    </div>
                )
            }
            {
                team.jungle.icon !== "" ? (
                    <div className='team--lane'>
                        <div>
                            <img src="images/roles/JUNGLE.png" alt="" width="30px" height="30px"></img>
                        </div>
                        <div>
                            <img src={"images/champions/" + team.jungle.icon} alt='' width="30px" height="30px"/> 
                        </div>
                    </div>
                ): (
                    <span className='team--lane'>
                        <div>
                            <img src="images/roles/JUNGLE.png" alt="" width="30px" height="30px"></img>
                        </div>
                    </span>
                )
            }
            {
                team.mid.icon !== "" ? (
                    <span className='team--lane'>
                        <div>
                            <img src="images/roles/MIDDLE.png" alt="" width="30px" height="30px"></img>
                        </div>
                        <div>
                            <img src={"images/champions/" + team.mid.icon} alt='' width="30px" height="30px"/> 
                        </div>
                    </span>
                ): (
                    <span className='team--lane'>
                        <div>
                            <img src="images/roles/MIDDLE.png" alt="" width="30px" height="30px"></img>
                        </div>
                    </span>
                )
            }
            {
                team.adc.icon !== "" ? (
                    <span className='team--lane'>
                        <div>
                            <img src="images/roles/ADC.png" alt="" width="30px" height="30px"></img>
                        </div>
                        <div>
                            <img src={"images/champions/" + team.adc.icon} alt='' width="30px" height="30px"/> 
                        </div>
                    </span>
                ): (
                    <span className='team--lane'>
                        <div>
                            <img src="images/roles/ADC.png" alt="" width="30px" height="30px"></img>
                        </div>
                    </span>
                )
            }
            {
                team.support.icon !== "" ? (
                    <span className='team--lane'>
                        <div>
                            <img src="images/roles/SUPPORT.png" alt="" width="30px" height="30px"></img>
                        </div>
                        <div>
                            <img src={"images/champions/" + team.support.icon} alt='' width="30px" height="30px"/> 
                        </div>
                    </span>
                ): (
                    <span className='team--lane'>
                        <div>
                            <img src="images/roles/SUPPORT.png" alt="" width="30px" height="30px"></img>
                        </div>
                    </span>
                )
            }
        </div>

      )}
      <div>
        <span
          className="team--icon"
          onClick={() => {
            if (!edit) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="team--icon" onClick={() => handleDelete(team.id)}>
          <AiFillDelete />
        </span>
        <span className="team--icon" >
          <button type="button" className="button" onClick={() => handleEditTeam(team.id)}>Use as Template</button>
        </span>
      </div>
    </form>
  )
}

export default SingleTeam
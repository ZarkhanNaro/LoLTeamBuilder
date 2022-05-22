import React, { useEffect, useRef, useState } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import {AiFillEdit} from "react-icons/ai"
import "../styles/styles.css"
import { Team } from '../Team';
import ChampionField from './ChampionField';

interface Props{
    team: Team
    setTeam: React.Dispatch<React.SetStateAction<Team>>,
    handleAddTeam: () => void
}

const TeamField:React.FC<Props> = ({team, setTeam, handleAddTeam}:Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTeamName, setEditTeamName] = useState<string>(team.name)

    const handleEditName = (e:React.FormEvent) => {
        e.preventDefault()
        let teamChanged = team;
        teamChanged.name = editTeamName;
        setTeam(teamChanged)
        setEdit(false)
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className='teamfield'>
        <div className='teamfield__title'>
            {
                edit ? (
                    <form onSubmit={ (e) => handleEditName(e)}>
                        <input 
                            ref={inputRef}
                            value={editTeamName} 
                            onChange={ (e) => setEditTeamName(e.target.value)} 
                            className="teamfield__title--input" 
                        />
                    </form>
                ): (
                      <span className="teamfield__title--text">
                          {team.name}
                      </span>   
                )
              }
            <span className="teamfield__icon" 
                    onClick={()=> {
                      if(!edit){
                        setEdit(!edit)
                      }
                    }
                  }> 
                <AiFillEdit />
            </span>
            <button className='button' onClick={handleAddTeam}>Add Team</button>
        </div>
        <div className='teamfield__rolediv'>
            <Droppable droppableId = 'topRole'>
                {
                    (provided, snapshot) => (
                        <div 
                            className={`teamfield__role ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >   
                            <img src="images/roles/TOP.png" alt="" className='teamfield__roleimage'></img>
                            <div className="teamfield__champion">
                                <ChampionField champion={team.top} role={0}/>
                            </div>
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId = 'jungleRole'>
                {
                    (provided, snapshot) => (
                        <div 
                            className={`teamfield__role ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <img src="images/roles/JUNGLE.png" alt="" className='teamfield__roleimage'></img>
                            <div className="teamfield__champion">
                                <ChampionField champion={team.jungle} role={1}/>
                            </div>
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable><Droppable droppableId = 'midRole'>
                {
                    (provided, snapshot) => (
                        <div 
                            className={`teamfield__role ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <img src="images/roles/MIDDLE.png" alt="" className='teamfield__roleimage'></img>
                            <div className="teamfield__champion">
                                <ChampionField champion={team.mid} role={2}/>
                            </div>
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable><Droppable droppableId = 'adcRole'>
                {
                    (provided, snapshot) => (
                        <div 
                            className={`teamfield__role ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <img src="images/roles/ADC.png" alt="" className='teamfield__roleimage'></img>
                            <div className="teamfield__champion">
                                <ChampionField champion={team.adc} role={3}/>
                            </div>
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable><Droppable droppableId = 'supportRole'>
                {
                    (provided, snapshot) => (
                        <div 
                            className={`teamfield__role ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <img src="images/roles/SUPPORT.png" alt="" className='teamfield__roleimage'></img>
                            <div className="teamfield__champion">
                                <ChampionField champion={team.support} role={4}/>
                            </div>
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    </div>
  )
}

export default TeamField
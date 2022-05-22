import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Champion } from '../Champion'

interface Props{
    champion: Champion
    index: number
  }

const ChampionIcon: React.FC<Props> = ({champion, index}: Props) => {
  return (
    <Draggable draggableId={champion.name} index={index} isDragDisabled={champion.icon===""}>
      {
        (provided, snapshot) => (
          <div 
            className={`championicon ${snapshot.isDragging ? "drag" : ""}`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref = { provided.innerRef}
          >
            {
              champion.icon !=="" && (
                <div>
                  <img src={"images/champions/" + champion.icon} alt='' width="50px" height="50px"></img>
                </div>
              )
            }
            <div className='championicon--text'>
              {champion.name}
            </div>
          </div>
        )
      }
    </Draggable>
  )
}

export default ChampionIcon
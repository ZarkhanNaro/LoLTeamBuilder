import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Champion } from '../Champion'
import ChampionIcon from './ChampionIcon'

interface Props{
  champions: Champion[]
  setChampions: React.Dispatch<React.SetStateAction<Champion[]>>
}

const ChampionsField:React.FC<Props> = ({champions, setChampions}:Props) => {
  return (
    <Droppable droppableId="championsField">
      {
        (provided, snapshot) => (
          <div 
            className={`championsfield ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef} 
            {...provided.droppableProps}
          >
            {
              champions.map( (champion, index) => (
                <div className='champions__single' key={champion.name}>
                  <ChampionIcon champion={champion} index={index}></ChampionIcon>
                </div>
              ))
            }
            {provided.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}

export default ChampionsField
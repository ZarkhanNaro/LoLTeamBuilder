import React from 'react'
import { Champion } from '../Champion'
import "../styles/styles.css"
import ChampionIcon from './ChampionIcon'

interface Props{
  champion: Champion,
  role:number
}

const ChampionField:React.FC<Props> = ({champion, role}: Props) => {
  return (
    <div className='championfield'>
      <ChampionIcon champion={champion} index={role}></ChampionIcon>
    </div>
  )
}

export default ChampionField
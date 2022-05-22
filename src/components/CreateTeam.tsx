import React, { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Champion } from '../Champion';
import ChampionsField from './ChampionsField';
import TeamField from './TeamField';
import championsStats from '../static/championsStats.json'
import "../styles/App.css"
import { Team } from '../Team';
import ListTeams from './ListTeams';



const CreateTeam: React.FC = () => {
  const emptyTeam = {
    name : "title of team",
    id : 0,
    top: {
      name:"TOP",
      icon: ""
    },
    jungle: {
      name:"JUNGLER",
      icon: ""
    },
    mid:{
      name:"MID",
      icon: ""
    },
    adc:{
      name:"ADC",
      icon: ""
    },
    support:{
      name:"SUPPORT",
      icon: ""
    }
  }
  const [showListTeam, setShowListTeam] = useState<boolean>(false)
  const [teams, setTeams] = useState<Team[]>([])
  const [team, setTeam] = useState<Team>( structuredClone(emptyTeam))
  const [champions, setChampions] = useState<Champion[]>(structuredClone(championsStats.champions))

  useEffect(() => {
    document.title = "LoL TeamBuilder"
  }, [])

  const handleAddTeam = () => {
    setTeams( [...teams, {
      id: Date.now(),
      name: team.name,
      top: team.top,
      jungle: team.jungle,
      mid: team.mid,
      adc: team.adc,
      support: team.support
    }])
    setShowListTeam(true)
  }

  const handleEditTeam = (id: number) => {
    let newTeam = structuredClone(teams.filter( teamOfLoop => teamOfLoop.id === id)[0])
    setTeam(newTeam)
    let championsToShow = structuredClone(championsStats.champions)
    let i:number =0;
    for(let champion of championsToShow){
      if( champion.name === newTeam.top.name || champion.name === newTeam.jungle.name ||champion.name === newTeam.mid.name || champion.name === newTeam.adc.name || champion.name === newTeam.support.name ){
        championsToShow.splice(i,1)
      }
      i++;
    }
    setChampions(championsToShow)
    setShowListTeam(false)
  }

  const handleSwapButton = () => {
    if(showListTeam){
      setTeam(structuredClone(emptyTeam))
      setChampions(structuredClone(championsStats.champions))
    }
    setShowListTeam(!showListTeam)
  }

  const onDragEnd = (result:DropResult) => {
    const { source, destination } = result
    if(!destination)
      return;
    if(destination.droppableId === source.droppableId && destination.index === source.index) 
      return;
    
      let add:Champion = {
        name:"TOP",
        icon: "",
      }, currentTeam = team, currentChampions = champions
      if(source.droppableId === "championsField"){
        add = currentChampions[source.index]
        currentChampions.splice(source.index, 1)
      }else{
        if(source.index === 0){
          add = currentTeam.top
          currentTeam.top = {
            name:"TOP",
            icon: ""
          };
        }else if(source.index === 1){
          add = currentTeam.jungle
          currentTeam.jungle = {
            name:"JUNGLE",
            icon: ""
          };
        }else if(source.index === 2){
          add = currentTeam.mid
          currentTeam.mid = {
            name:"MID",
            icon: ""
          };
        }else if(source.index === 3){
          add = currentTeam.adc
          currentTeam.adc = {
            name:"ADC",
            icon: ""
          };
        }else if(source.index === 4){
          add = currentTeam.support
          currentTeam.support = {
            name:"SUPPORT",
            icon: ""
          };
        }
      }
      
      if(destination.droppableId==='championsField'){
        champions.splice(destination.index,0, add)
      }else {
        if(destination.index === 0){
          if(currentTeam.top.icon !== ""){
            champions.splice(destination.index,0, currentTeam.top)
          }
          currentTeam.top = add;
        }else if(destination.index === 1){
          if(currentTeam.jungle.icon !== ""){
            champions.splice(destination.index,0, currentTeam.jungle)
          }
          currentTeam.jungle = add;
        }else if(destination.index === 2){
          if(currentTeam.mid.icon !== ""){
            champions.splice(destination.index,0, currentTeam.mid)
          }
          currentTeam.mid = add;
        }else if(destination.index === 3){
          if(currentTeam.adc.icon !== ""){
            champions.splice(destination.index,0, currentTeam.adc)
          }
          currentTeam.adc = add;
        }else if(destination.index === 4){
          if(currentTeam.support.icon !== ""){
            champions.splice(destination.index,0, currentTeam.support)
          }
          currentTeam.support = add;
        }
      }

      setTeam(currentTeam)
      setChampions(currentChampions)
  }

  return (
    <div className="App">
      <span className="heading">Team Builder</span>
      <button className='button' onClick={ handleSwapButton }> { showListTeam ? "Create a Team" : "List of teams" }</button>
      {
        showListTeam ? (
          <ListTeams teams={teams} setTeams={setTeams} handleEditTeam={handleEditTeam} />
        ) :(
          <DragDropContext onDragEnd={onDragEnd}>
              <TeamField
                team={team}
                setTeam={setTeam}
                handleAddTeam={handleAddTeam}
              />
              <ChampionsField
                champions={champions}
                setChampions={setChampions}
              />
          </DragDropContext>
        )
      }
    </div>
  );
}

export default CreateTeam;

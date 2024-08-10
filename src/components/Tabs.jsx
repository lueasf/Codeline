import React from 'react'
import CodeTab from "./CodeTab"
import { useSelector } from 'react-redux' //hook
import {useState} from "react"; // pour gérer le systm d'onglet.
import ButtonTabs from './ButtonTabs';


export default function Tabs() {

  const tabs = useSelector(state => state.tabs)
  const [tabIndex, setTabIndex] = useState(tabs[0].id)
  // console.log(tabs); // voir le state tableau d'objet  

  return (
    <div className="flex grow">
        <div className="grow flex flex-col w-[180px] shrink-0
        text-slate-300 border-r border-slate-200">
            {tabs.map(tab => {
              <ButtonTabs
              key={tab.id}
              id={tab.id}
              togggleTab={id => setTabIndex(id)}
              imgURL={tab.imgURL}
              buttonContent={tab.buttonContent}
              />
            })}
        </div>
        <div className="w-full grow relative">
            <CodeTab/>
        </div>
    </div>
  )
}

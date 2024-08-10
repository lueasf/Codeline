import React from 'react'

export default function ButtonTabs(id, toggleTab, buttonContent, imgURL) {
  return (
    <button>
      <img src={imgURL} className="w-5" alt=""/>
      <span className="ml-3 text-slate-100 text-md">{buttonContent}</span>
    </button>
  )
}

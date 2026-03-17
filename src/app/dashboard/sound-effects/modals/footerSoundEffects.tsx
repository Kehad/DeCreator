import React from 'react'

interface FooterProps {
    icon: React.ReactElement | string,
    text: string;
    onMonitor?: () => void;
}

function FooterSoundEffects({icon, text, onMonitor}: FooterProps) {
  return (
    <footer onClick={onMonitor} className="p-4 bg-[#B6B690] mt-5 w-max border border-[#F5F5F6] text-black text-[20px] rounded-xl flex items-center gap-3">
        <span className="text-[#FF8D28]  font-bold">{icon}</span>
        <span className="text-black">{text}</span>
      </footer>
  )
}

export default FooterSoundEffects
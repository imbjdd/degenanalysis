'use client'

import { useEffect, useState } from 'react';

const AuditCard = ({ audit, n }: any) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseMove = (e: any) => {
      setPosition({
        x: e.clientX - 15,
        y: e.clientY - 15
      });
    };

    const container = document.querySelector('.container'+n);
    if(container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mousemove', handleMouseMove);
    }


    return () => {
      if(container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      className={"w-full border bg-black text-white p-6 rounded-2xl relative overflow-hidden cursor-none flex flex-col gap-0 container"+n}
    >
      <div
        className={`circle fixed w-[30px] h-[30px] bg-white mix-blend-difference rounded-full pointer-events-none ${isHovering ? 'block' : 'hidden'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <p className="font-light px-2">AUDIT#{audit.id}</p>
      <p className="font-bold px-2">@{audit.security_audit_provider}</p>
      <p className="font-base px-2">{audit.audit_date}</p>
      <a href="/" className="font-extralight p-2 cursor-none hover:bg-white hover:text-black w-fit">/Click_To_Download</a>
    </div>
  );
};

export default AuditCard;

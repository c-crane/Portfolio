import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';

function TypingInput() {
  const inputRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['MECHANICAL ENGINEER', 'WANNABE SOFTWARE ENGINEER'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
      showCursor: false,
      cursorChar: '|',
    };
    typedRef.current = new Typed('.typed', options);
    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <div className="flex justify-left">       
          <span className=" text-green font-mono text-xl typed whitespace-nowrap"></span>
        </div>
  );
}

export default TypingInput;



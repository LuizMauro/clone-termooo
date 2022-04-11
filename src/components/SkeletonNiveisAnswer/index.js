import React from 'react';

import { InputSkeleton } from './styles';



// const answer = [
//   {
//     letter: 'D',
//     positionCorrect: false,
//     isExist: false,
//   },
//   {
//     letter: 'E',
//     positionCorrect: true,
//     isExist: true,
//   },
//   {
//     letter: 'S',
//     positionCorrect: true,
//     isExist: true,
//   },
//   {
//     letter: 'E',
//     positionCorrect: false,
//     isExist: true,
//   },
//   {
//     letter: 'T',
//     positionCorrect: false,
//     isExist: true,
//   }
// ];



function SkeletonNiveisAnswer({ answer }) {
  function renderSkeleton(item, index) {
    if(item.positionCorrect){
    return (<InputSkeleton key={index} style={{background:  'green' }}>
        {item.letter}
      </InputSkeleton>)
    }

    if(item.isExist){
      return (<InputSkeleton key={index} style={{background:  'orange' }}>
        {item.letter}
      </InputSkeleton>)
    }

    if(!item.isExist && !item.positionCorrect){
      return (
      <InputSkeleton key={index}>
        {item.letter}
      </InputSkeleton>)
    }
  }

  return <div className='react-code-input' style={{display: 'flex'}}>
    {answer.map((item, index) => {
      return renderSkeleton(item, index);
    })}
  </div>;
}

export {SkeletonNiveisAnswer};
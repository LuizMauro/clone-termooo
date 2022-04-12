import React from 'react';
import { InputSkeleton } from './styles';

function SkeletonNiveisAnswer({ answer }) {
  function renderSkeleton(item, index) {
    if(item.positionCorrect){
    return (<InputSkeleton key={index} style={{background:  '#22b168' }}>
        {item.letter}
      </InputSkeleton>)
    }

    if(item.isExist){
      return (<InputSkeleton key={index} style={{background:  '#f7a62e' }}>
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
// import './ExampleTwo.scss';
import React from 'react';
import { AnimatedFade } from '../../../componenets/core/AnimatedFade';
import { ExampleScrollBackground } from '../../../ExampleScrollBackground';

function ExampleTwo() {
  return (
    <AnimatedFade>
      <div className="ExampleTwo">

        <ExampleScrollBackground />
      </div>
    </AnimatedFade>
  );
}

export default ExampleTwo;

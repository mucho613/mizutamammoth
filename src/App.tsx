import { Component, createSignal } from 'solid-js';

import Controller from './features/Controller/components/Controller';
import Preview from './features/Preview/components/Preview';

import { Circle } from './features/types/circle';

const App: Component = () => {
  const [circles, setCircles] = createSignal<Circle[]>([]);

  return (
    <>
      <h1 class="text-4xl m-4">mizutamammoth</h1>
      <div class="flex flex-row m-4 gap-x-4">
        <div class="w-1/2">
          <Controller circles={circles()} setCircles={setCircles} />
        </div>
        <div class="w-1/2">
          <Preview circles={circles()} setCircles={setCircles} />
        </div>
      </div>
    </>
  );
};

export default App;

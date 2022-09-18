import { Component, createSignal, Setter } from 'solid-js';
import { Circle } from '../../types/circle';
import sample from '../../../assets/images/sample.jpg';

type Props = {
  circles: Circle[];
  setCircles: Setter<Circle[]>
}

export const Controller: Component<Props> = (props: Props) => {
  const [x, setX] = createSignal(0);

  const handleClick = () => {
    props.setCircles((circles) => {
      setX(x => x + 100);
      return [
        ...circles,
        {
          centerPosition: {
            x: x(),
            y: 200
          },
          radius: 100
        }
      ];
    });
  };

  return (
    <div class="rounded-lg border-2 p-4">
      <h2 class="text-xl mb-2">Controller</h2>
      <img class="w-full" src={sample} />
      <ul>
        {props.circles.map(
          (circle) => <li>cx: {circle.centerPosition.x} cy: {circle.centerPosition.y} radius: {circle.radius}</li>
        )}
      </ul>
      <button class="border rounded my-2 p-4" onClick={handleClick}>追加</button>
    </div>
  );
};

export default Controller;

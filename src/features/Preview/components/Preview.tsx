import type { Component, Setter } from 'solid-js';
import { Circle } from '../../types/circle';
import sample from '../../../assets/images/sample.jpg';
import { styled } from 'solid-styled-components';

type Props = {
  circles: Circle[];
  setCircles: Setter<Circle[]>
}

const ClipedImage = styled('img')`
  clip-path:url(#clipMask);
`;

export const Preview: Component<Props> = (props: Props) => {
  return (
    <div class="rounded-lg border-2 p-4">
      <h2 class="text-xl mb-2">Preview</h2>
      <div class="relative">
        <ClipedImage class="w-full" src={sample} />
        <svg class="absolute top-0 w-full h-full">
          <clipPath id="clipMask">
            {
              props.circles.map(circle => (
                <circle cx={circle.centerPosition.x} cy={circle.centerPosition.y} r={circle.radius} />
              ))
            }
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default Preview;

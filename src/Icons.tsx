import { Icon, IconProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

const makeIcon =
  (node: ReactNode, defaultProps?: IconProps) => (props: IconProps) => {
    return (
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...defaultProps}
        {...props}
      >
        {node}
      </Icon>
    );
  };

export const ThumbUpOutlined = makeIcon(
  <>
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" />
  </>,
);

export const ThumbUp = makeIcon(
  <>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
  </>,
);

export const HeartOutlined = makeIcon(
  <>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
  </>,
);

export const Heart = makeIcon(
  <>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </>,
);

export const Twitter = makeIcon(
  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />,
);

export const MagicIcon = makeIcon(
  <>
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <polygon points="20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94" />
        <polygon points="8.5,7 9.44,4.94 11.5,4 9.44,3.06 8.5,1 7.56,3.06 5.5,4 7.56,4.94" />
        <polygon points="20,12.5 19.06,14.56 17,15.5 19.06,16.44 20,18.5 20.94,16.44 23,15.5 20.94,14.56" />
        <path d="M17.71,9.12l-2.83-2.83C14.68,6.1,14.43,6,14.17,6c-0.26,0-0.51,0.1-0.71,0.29L2.29,17.46c-0.39,0.39-0.39,1.02,0,1.41 l2.83,2.83C5.32,21.9,5.57,22,5.83,22s0.51-0.1,0.71-0.29l11.17-11.17C18.1,10.15,18.1,9.51,17.71,9.12z M14.17,8.42l1.41,1.41 L14.41,11L13,9.59L14.17,8.42z M5.83,19.59l-1.41-1.41L11.59,11L13,12.41L5.83,19.59z" />
      </g>
    </g>
  </>,
);

export const SaveIcon = makeIcon(
  <>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z" />
  </>,
);

export const ForkIcon = makeIcon(
  <g>
    <path
      d="M458.7,81.1L458.7,81.1c0-44.8-36.3-81.1-81.1-81.1c-44.8,0-81.1,36.3-81.1,81.1c0,40.3,29.3,73.7,67.8,80l0.5,0.1v37.3
		c0,28.3-22.9,51.2-51.2,51.2H151.5v-89.3c36.8-8.1,64-40.5,64-79.3c0-44.8-36.3-81.1-81.1-81.1C89.6,0,53.3,36.3,53.3,81.1
		c0,38.7,27.2,71.1,63.5,79.1l0.5,0.1v191.4c-36.8,8.1-64,40.5-64,79.3c0,44.8,36.3,81.1,81.1,81.1c44.8,0,81.1-36.3,81.1-81.1
		c0-38.7-27.1-71.1-63.5-79.1l-0.6-0.1v-67.9h162.1c47.1-0.1,85.3-38.2,85.3-85.3v-39.1C433.6,149.5,458.6,118.3,458.7,81.1
		L458.7,81.1z M87.5,81.1c0-25.9,21-46.9,46.9-46.9c25.9,0,46.9,21,46.9,46.9c0,25.9-21,46.9-46.9,46.9
		C108.5,128,87.5,107,87.5,81.1L87.5,81.1z M181.3,430.9c0,25.9-21,46.9-47,46.9c-25.9,0-46.9-21-46.9-46.9
		c0-25.9,21-46.9,46.9-46.9C160.3,384,181.3,405,181.3,430.9L181.3,430.9z M377.6,128c-25.9,0-47-21-47-46.9s21-46.9,47-46.9
		c25.9,0,46.9,21,46.9,46.9C424.5,107,403.5,128,377.6,128L377.6,128z"
    />
  </g>,
  {
    viewBox: '0 0 512 512',
  },
);

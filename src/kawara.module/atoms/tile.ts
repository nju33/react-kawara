import styled from 'styled-components';

const width = (props: any) => {
  if (typeof props.theme.width === 'number') {
    return `${props.theme.width}px`;
  }

  return props.theme.width;
};

const height = (props: any) => {
  if (typeof props.theme.height === 'number') {
    return `${props.theme.height}px`;
  }

  return props.theme.height;
};

const margin = (props: any) => {
  if (typeof props.theme.gutter === 'number') {
    return `${props.theme.gutter}px`;
  }

  return props.theme.gutter;
}

export const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &[role='button'] {
    cursor: pointer;
  }

  width: ${width};
  height: ${height};
  border: 1px solid #e5e5e5;
  box-sizing: border-box;

  &:nth-child(n + 2) {
    margin-left: ${margin};
  }
`;

import styled from 'styled-components';
import {Tile} from './kawara.module/atoms/tile';
import {createKawara} from './kawara.module/create-kawara';

export const MyKawara = createKawara({
  Tile: styled(Tile)`
    background: #393939;
    color: #fff;
  `,
});

import React from 'react';
import {ThemeProvider} from 'styled-components';
// import {TileGroup, Tile} from '../atoms';
import {kawaraAction} from '../actions';
import * as atoms from '../atoms';

export interface KawaraPassingProps {
  items: {
    key: string | number;
    element: React.ReactNode;
  }[];
  rect: {
    width: string | number;
    height: string | number;
  };
  gutter: string | number;
  /**
   * クリックアクションを発行するか
   */
  clickable?: boolean;
  onClick?(action: ReturnType<typeof kawaraAction.clickTile>): void;
  components?: Partial<typeof atoms>;
}

export interface KawaraProps {
  items: {
    key: string;
    element: React.ReactNode;
  }[];
  rect: {
    width: string | number;
    height: string | number;
  };
  gutter: string | number;
  /**
   * クリックアクションを発行するか
   */
  clickable: boolean;
  onClick(action: ReturnType<typeof kawaraAction.clickTile>): void;
  components: typeof atoms;
}

export class Kawara extends React.PureComponent<KawaraPassingProps> {
  static defaultProps = {
    clickable: false,
    // tslint:disable-next-line:no-empty
    onCLick: () => {},
    components: atoms,
  };

  // @ts-ignore
  props: KawaraProps;

  private clickTile = (key: string) => (ev: React.SyntheticEvent<unknown>) => {
    ev.preventDefault();

    return this.props.onClick(kawaraAction.clickTile(key));
  };

  private TileGroup: React.SFC = props => {
    let Component = atoms.TileGroup;
    if (this.props.components.TileGroup !== undefined) {
      Component = this.props.components.TileGroup;
    }

    return <Component>{props.children}</Component>;
  };

  private Tile: React.SFC = props => {
    let Component = atoms.Tile;
    if (this.props.components.Tile !== undefined) {
      Component = this.props.components.Tile;
    }

    return <Component {...props} />;
  };

  render() {
    return (
      <ThemeProvider theme={{...this.props.rect, gutter: this.props.gutter}}>
        <this.TileGroup>
          {this.props.items.map(item => {
            const tileProps: {
              key: string;
              onClick?(ev: React.SyntheticEvent<unknown>): void;
              role?: 'button';
            } = {
              key: item.key,
            };
            if (this.props.clickable) {
              tileProps.onClick = this.clickTile(item.key);
              tileProps.role = 'button';
            }

            return <this.Tile {...tileProps}>{item.element}</this.Tile>;
          })}
        </this.TileGroup>
      </ThemeProvider>
    );
  }
}

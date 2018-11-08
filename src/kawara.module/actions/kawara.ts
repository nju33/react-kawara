import {ReducerAction} from '@nju33/reducer-action';

export enum KawaraActionType {
  ClickTile = 'KawaraActionType__ClickTile',
}

export const kawaraAction = {
  /**
   * タイルがクリックされた時に発行
   * @param string タイルの key 値
   */
  clickTile(key: string) {
    return {
      type: KawaraActionType.ClickTile as KawaraActionType.ClickTile,
      payload: {key},
    };
  },
};

export type KawaraAction = ReducerAction<typeof kawaraAction>;

import { ComponentType, Dispatch, SetStateAction } from 'react';
import { UploadFile } from 'antd';

export type IActionType = 'burch' | 'resize' | 'text' | null;

export interface IAction {
  type: IActionType;
  Icon: ComponentType;
}

export interface IToolbar {
  tool: IActionType;
  setTool: Dispatch<SetStateAction<IActionType>>;
}

export interface IPhotoEditor {
  image: UploadFile;
  onEditionImage: (url: string, id: string) => void;
  canselEdit: () => void;
}

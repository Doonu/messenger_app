import { IPostState } from '../../../../entities/post/model/IPost';

export type IPost = Pick<IPostState, 'content' | 'isDisabledComments'> & {
  isActive: boolean;
  isWarningModal: boolean;
  isDraggablePhotoFocus: boolean;
  isPreviewPhoto: boolean;
  currentIndex: number;
  view: 'slider' | 'grid';

  isWarningModalTitle: string;
};

export interface IAllFiles {
  photos: IPhotos[];
  files: IFiles[];
}

export interface IFiles {
  id: string;
  file: any;
  url: any;
}

export interface IPhotos {
  photo: any;
  url: any;
  id: string;
}

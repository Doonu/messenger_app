import { postState } from '../../../../entities/post/model/IPost';

export type IPost = Pick<postState, 'content' | 'isDisabledComments'> & {
  isActive: boolean;
  isWarningModal: boolean;
  isDraggablePhotoFocus: boolean;
  isPreviewPhoto: boolean;
  currentIndex: number;

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

export interface IFilesPost {
  id: string;
  file: any;
}

export interface IPhotos {
  photo: any;
  url: any;
  id: string;
}

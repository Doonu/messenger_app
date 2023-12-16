import { IPost } from '../model/IPost';

export const initialValues: IPost = {
  content: [],
  isActive: false,
  isWarningModal: false,
  isDraggablePhotoFocus: true,
  isPreviewPhoto: false,
  isDisabledComments: false,
  view: 'slider',
  currentIndex: 0,

  isWarningModalTitle: '',
};

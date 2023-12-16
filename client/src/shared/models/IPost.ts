export interface IFilesPost {
  id: string;
  file: any;
}

export interface IToggleCommentsById {
  postId: number;
  isDisabledComments: boolean;
}

export interface ILikePost {
  isLike: boolean;
  postId: number;
}

export interface ILikeComments {
  commentId: number;
  isLike: boolean;
}

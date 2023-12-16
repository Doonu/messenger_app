export interface postState {
  id: number;
  userId: number;
  content: string[];
  countLikes: number;
  likesList: number[];
  shared: number;
  comments: [];
  files: string[];
  createdAt: string;
  updatedAt: string;
  isDisabledComments: boolean;
  author: {
    name: string;
    imgSubstitute: string;
  };
}

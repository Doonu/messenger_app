export interface IPhoto {
  url: string;
  onDelete?: () => void;
  onClick: () => void;
}

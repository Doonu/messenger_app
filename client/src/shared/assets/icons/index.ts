import styled from 'styled-components';
import { IoCaretDownOutline } from 'react-icons/io5';
import { BsFillCameraFill } from 'react-icons/bs';
import { AiOutlineFile, AiOutlinePlayCircle } from 'react-icons/ai';
import { HiOutlineMusicalNote } from 'react-icons/hi2';
import { GiTargetPoster } from 'react-icons/gi';
import { FiSettings } from 'react-icons/fi';

export const ArrowDown = styled(IoCaretDownOutline)``;

export const Camera = styled(BsFillCameraFill).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Video = styled(AiOutlinePlayCircle).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Music = styled(HiOutlineMusicalNote).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const File = styled(AiOutlineFile).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Poster = styled(GiTargetPoster).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Setting = styled(FiSettings).attrs({
  size: 35,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

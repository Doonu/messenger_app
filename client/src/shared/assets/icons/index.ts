import styled from 'styled-components';
import { IoCaretDownOutline } from 'react-icons/io5';
import { BsFillCameraFill } from 'react-icons/bs';
import { AiOutlineFile, AiOutlinePlayCircle } from 'react-icons/ai';
import { HiOutlineMusicalNote } from 'react-icons/hi2';
import { GiTargetPoster } from 'react-icons/gi';
import { FaPenFancy, FaRegHeart } from 'react-icons/fa';
import { IoMdClose, IoMdHeart } from 'react-icons/io';
import { TbShare3 } from 'react-icons/tb';
import { GoComment } from 'react-icons/go';
import { SlMagnifierAdd } from 'react-icons/sl';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';

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

export const Redaction = styled(FaPen).attrs({
  size: 15,
})`
  color: ${({ theme }) => theme.colors.text};
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

export const SFile = styled(AiOutlineFile).attrs({
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

export const Like = styled(FaRegHeart)`
  color: ${({ theme }) => theme.colors.text};
`;

export const BgLike = styled(IoMdHeart).attrs({})``;

export const Shared = styled(TbShare3)`
  color: ${({ theme }) => theme.colors.text};
`;

export const Comment = styled(GoComment)`
  color: ${({ theme }) => theme.colors.text};
`;

export const Close = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.active};
`;

export const Magnifier = styled(SlMagnifierAdd).attrs({
  size: 20,
})`
  color: ${({ theme }) => theme.colors.active};
`;

export const BeautPen = styled(FaPenFancy).attrs({
  size: 20,
})`
  color: ${({ theme }) => theme.colors.active};
`;

export const ArrowRight = styled(MdArrowBackIos).attrs({
  size: 50,
})`
  color: ${({ theme }) => theme.colors.active};
`;

export const ArrowLeft = styled(MdArrowForwardIos).attrs({
  size: 50,
})`
  color: ${({ theme }) => theme.colors.active};
`;

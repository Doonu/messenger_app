import React, { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import {
  Descriptions,
  SArrowLeft,
  SArrowRight,
  SCarousel,
  SContainer,
  SContainerInfo,
  SContainerProfile,
  SContent,
  SImg,
  SImgContainer,
  SInfoPic,
  SLeft,
  SRight,
} from './previewPhoto.styled';
import getProfile from '../../../../../../shared/api/user/getProfile';
import { useAppDispatch } from '../../../../../../hooks/redux';
import { authState } from '../../../../../../entities/user/user.slice';
import { postTime } from '../../../../../../shared/util/time';
import MainPostProfile from '../../../../../ui/profiles/mainPost';
import { CarouselRef } from 'antd/es/carousel';
import { IPhotos } from '../../../../../forms/AddPost/model/IPost';
import { useFormikContext } from 'formik';
import { Like } from '../../../../../ui/buttons/likesButton/like';
import { Slice } from '../../../../../ui/slice';
import { IPost } from '../../../../../forms/AddPost/model/IPost';

interface PreviewPhotoProps {
  list: IPhotos[];
  description: string[];
}

//TODO: 'Фотографии для публикации поста' - сделать динамическим(props)

export const PreviewPhoto: FC<PreviewPhotoProps> = ({ list, description }) => {
  const { values, setFieldValue } = useFormikContext<IPost>();
  const [userPhoto, setUserPhoto] = useState<authState>();
  const [isLike, setIsLike] = useState(false);

  const slider = useRef<CarouselRef>(null);

  const dispatch = useAppDispatch();
  const handlerGetProfile = () => {
    dispatch(getProfile())
      .unwrap()
      .then((fetchedUser) => {
        setUserPhoto(fetchedUser);
      });
  };

  const handleLikeClick = () => {
    setIsLike((prev) => !prev);
  };

  const handleLeft = () => {
    slider?.current?.prev();
    if (values.currentIndex !== 1) {
      setFieldValue('currentIndex', values.currentIndex - 1);
    } else {
      setFieldValue('currentIndex', list.length);
    }
  };

  const handleRight = () => {
    slider?.current?.next();
    if (values.currentIndex < list.length) {
      setFieldValue('currentIndex', values.currentIndex + 1);
    } else {
      setFieldValue('currentIndex', 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'ArrowRight') handleRight();
    if (e.code === 'ArrowLeft') handleLeft();
  };

  useEffect(() => {
    slider?.current?.goTo(values.currentIndex - 1);
  }, [values.currentIndex]);

  useEffect(() => {
    handlerGetProfile();
  }, []);

  return (
    <SContainer>
      <SContent>
        <SLeft onKeyDown={handleKeyDown}>
          <SCarousel ref={slider} dots={false} speed={0} infinite>
            {list.map(({ url, id }) => (
              <SImgContainer key={id}>
                {list.length > 1 && (
                  <>
                    <SArrowLeft onClick={handleLeft} />
                    <SArrowRight onClick={handleRight} />
                  </>
                )}
                <SImg draggable="false" src={url} alt="" />
              </SImgContainer>
            ))}
          </SCarousel>
        </SLeft>
        <SRight>
          <SContainerProfile>
            {userPhoto && (
              <MainPostProfile
                time={postTime('2023-10-08T13:50:06.441Z')}
                name={userPhoto.name}
                avatar={userPhoto.avatar}
              />
            )}
          </SContainerProfile>
          <SContainerInfo>
            <Like onClick={handleLikeClick} isLike={isLike}>
              12
            </Like>
          </SContainerInfo>
          <Descriptions>
            <Slice content={description} />
          </Descriptions>
        </SRight>
      </SContent>
      <SInfoPic>
        {list.length > 1
          ? `Фотографии для публикации поста ${values.currentIndex} из ${list.length}`
          : `Фотография для публикации поста`}
      </SInfoPic>
    </SContainer>
  );
};

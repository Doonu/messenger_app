import React, { FC, useEffect, useState } from 'react';
import { SComment, SContainer, SHead, SInfo, SMore, SP, SShared } from './post.styled';
import MainPostProfile from '../../profiles/mainPost';
import { postState } from '../../../../entities/post/model/IPost';
import { postTime } from '../../../../shared/util/time';
import LikeButton from '../../buttons/likesButton/likeButton';
import { IFilesPost } from '../../../forms/AddPost/model/IPost';
import { v4 } from 'uuid';

interface PostProps {
  post: postState;
}

const Post: FC<PostProps> = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const [files, setFiles] = useState<IFilesPost[]>([]);
  const [photos, setPhotos] = useState<IFilesPost[]>([]);

  const handleLikeClick = () => {
    setIsLike((prev) => !prev);
  };

  const filterFiles = () => {
    const allFiles = post.files.map((file) => {
      return {
        id: v4(),
        file: file,
      };
    });

    const photos: IFilesPost[] = allFiles.filter(({ file }) => {
      const arrayFile = file.split('.');
      if (
        arrayFile[arrayFile.length - 1].includes('jpg') ||
        arrayFile[arrayFile.length - 1].includes('png') ||
        arrayFile[arrayFile.length - 1].includes('webp')
      ) {
        return true;
      }
      return false;
    });

    const files: IFilesPost[] = allFiles.filter(({ file }) => {
      const arrayFile = file.split('.');
      if (
        arrayFile[arrayFile.length - 1].includes('pdf') ||
        arrayFile[arrayFile.length - 1].includes('docx')
      ) {
        return true;
      }
      return false;
    });

    setPhotos(photos);
    setFiles(files);
  };

  useEffect(() => {
    filterFiles();
  }, []);

  return (
    <SContainer>
      <SHead>
        <MainPostProfile
          time={postTime('2023-10-08T13:50:06.441Z')}
          name={post.author.name}
          avatar={post.author.imgSubstitute}
        />
        <SMore size={20} />
      </SHead>
      {photos.map(({ file, id }) => (
        <img key={id} style={{ width: '300px', height: '300px' }} src={file}></img>
      ))}
      {post.content.map((content, i) => (
        <SP key={post.id + i}>{content}</SP>
      ))}
      {files.map(({ file, id }) => (
        <a key={id} href={`http://localhost:5000/${file}`} target="blank">
          Сслы
        </a>
      ))}
      <SInfo>
        <LikeButton $isLike={isLike} onClick={handleLikeClick}>
          {post.countLikes}
        </LikeButton>
        <SComment>{post.comments.length}</SComment>
        <SShared>{post.shared}</SShared>
      </SInfo>
      {post.isDisabledComments && 'Запрещено писать комментарии'}
      <>Send Message</>
    </SContainer>
  );
};

export default Post;

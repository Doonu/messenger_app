import postLogin from './auth/postLogin';
import postRegistration from './auth/postRegistration';
import getProfile from './user/getProfile';
import postCreate from './post/postCreate';
import getAllPost from './post/getAllPost';
import deletePostById from './post/deletePostById';
import restorePostById from './post/restorePostById';
import toggleCommentsById from './post/toggleCommentsById';
import likePost from './post/likePost';
import getAllCommentsInPost from './comments/getAllCommentsInPost';
import createComment from './comments/createComment';
import deleteComments from './comments/deleteComments';
import likeComments from './comments/likeComments';
import updateComment from './comments/updateComment';

export default {
  postLogin,
  postRegistration,
  getProfile,
  postCreate,
  getAllPost,
  deletePostById,
  restorePostById,
  toggleCommentsById,
  likePost,
  getAllCommentsInPost,
  createComment,
  deleteComments,
  likeComments,
  updateComment,
};

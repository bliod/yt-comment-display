import axios from 'axios';

import {
  ICommentThreadsListResponse,
  IVideoCommentsDocument,
} from './interfaces';
import { db } from '../../loaders/mongoDb';
import config from '../../config';

export const fetchVideoComments = async (
  videoId: string,
): Promise<ICommentThreadsListResponse> => {
  const FIELDS = 'items';
  const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&items=${FIELDS}&maxResults=100&videoId=${videoId}&key=${config.youtubeApi}`;

  const response = await axios.get(url);
  return response.data;
};

export const getVideoComments = async (videoId: string) => {
  const comments = await db
    .collection<IVideoCommentsDocument>('videoComments')
    .findOne({ videoId });
  return comments;
};

export const updateVideoComments = async (
  videoId: string,
  comments: ICommentThreadsListResponse,
) => {
  const buildDocument = { timestamp: new Date(), videoId, comments };

  const result = await db.collection('videoComments').insertOne(buildDocument);
  return result;
};

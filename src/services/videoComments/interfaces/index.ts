export interface ICommentResource {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: {
      value: string;
    };
    channelId: string;
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    parentId?: string;
    canRate: boolean;
    viewerRating: string;
    likeCount: number;
    moderationStatus?: string;
    publishedAt: string;
    updatedAt: string;
  };
}

export interface ICommentThreadResource {
  kind: 'youtube#commentThread';
  etag: string;
  id: string;
  snippet: {
    channelId: string;
    videoId: string;
    topLevelComment: ICommentResource;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
  replies?: {
    comments: ICommentResource[];
  };
}

export interface ICommentThreadsListResponse {
  kind: 'youtube#commentThreadListResponse';
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ICommentThreadResource[];
}

export interface IVideoCommentsDocument {
  videoId: string;
  timestamp: Date;
  comments: ICommentThreadsListResponse;
}

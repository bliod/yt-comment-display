import { Router } from 'express';
import videoComments from './routes/videoComments';

export default () => {
  const app = Router();
  videoComments(app);

  return app;
};

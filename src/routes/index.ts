import { Hono } from "hono";

import { createPost, deletePost, getPostByID, getPosts, updatePost } from "../controllers/PostController";

const router = new Hono();
router.get('/', (c) => getPosts(c));
router.post('/', (c) => createPost(c));
router.get('/:id', (c) => getPostByID(c));

router.put('/:id', (c) => updatePost(c));
router.delete('/:id', (c) => deletePost(c));

export const Routes = router;
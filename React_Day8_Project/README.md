# Simple React Post App

A beginner-friendly Post App built with React using only `useState`, props, and event handlers.

## Features
- Add a post (textarea + Post button)
- Like and Dislike per post
- Add comments to each post
- Comments are shown under each post
- Disable posting empty text
- Shows total post count

## Concepts used
- **State** (`useState`) — store posts, likes, dislikes, and comment inputs.
- **Props** — pass data and action functions between components.
- **Event Handling** — handle input changes and button clicks.
- **Conditional Rendering** — show messages when no posts or no comments.

## Files
- `App.js` — main parent component; holds posts state and action functions:
  - `addPost(text)`
  - `likePost(id)`
  - `dislikePost(id)`
  - `addComment(id, commentText)`
- `PostForm.js` — textarea and Post button; calls `addPost`.
- `PostList.js` — loops posts and renders `PostItem` for each.
- `PostItem.js` — displays one post and its controls; manages local comment input.

## How to run
1. Create a new React app (if you don't have one):
   ```bash
   npx create-react-app my-post-app
   cd my-post-app

export const VIEW_ARTICLE = 'VIEW_ARTICLE';
export function viewArticle(content) {
  return {
    type: VIEW_ARTICLE,
    content
  };
}

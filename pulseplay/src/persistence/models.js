module.exports.init = function(db) {
  db.storeModel('post', {
    id: '',
    mediaType: '',
    media: '',
    thumbnail: '',
    preview: '',
    caption: '',
    title: '',
    content: '',
    source: '',
    link: '',
    author: '',
    owner: '',
    postDate: '',
    updateDate: '',
    approved: false,
    approvedBy: '',
    approvedDate: '',
    tags: '',
    likes: '',
    views: ''
  });

  db.storeModel('account', {
    id: '',
    access: '',
    meta: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    birthday: '',
    tags: '',
    media: '',
    thumbnail: '',
    preview: '',
    email: '',
    password: '',
    followers: '',
    follows: '',
    unfollows: '',
    tags: '',
    views: ''
  });

  db.storeModel('bookmark', {
    id: '',
    accountid: '',
    postid: ''
  });

  db.storeModel('tag', {
    id: '',
    code: '',
    name: ''
  });

  db.storeModel('media', {
    id: '',
    owner: '',
    targetDoc: '',
    beanType: '',
    mimeType: '',
    resolution: '',
    fieldName: '',
    size: 0,
    data: '',
    createDate: ''
  });

  db.storeModel('access', {
    id: '',
    name: '',
    action: '',
    target: '',
    global: false,
    allow: false
  });

  db.storeQuery(
    'getBookmark',
    'SELECT accountid, postid FROM `pulseplay` WHERE _type="bookmark" AND accountid=$accountid AND postid=$postid'
  );

  db.storeQuery(
    'getTags',
    'SELECT code, name FROM `pulseplay` WHERE _type="tag"'
  );

  db.storeQuery(
    'getAccount',
    'SELECT id, access, meta, firstName, middleName, lastName, gender, birthday, photo, preview, thumbnail, email, followers, follows, unfollows, tags, views FROM `pulseplay` WHERE _type="account"'
  );

  db.storeQuery(
    'getLatest',
    'SELECT id, mediaType, media, thumbnail, preview, caption, title, link, postDate, likes, views FROM `pulseplay` WHERE _type="post" ORDER BY postDate DESC LIMIT 10'
  );

  db.storeQuery(
    'searchPost',
    'SELECT id, mediaType, media, thumbnail, preview, caption, title, link, postDate, likes, views FROM `pulseplay` WHERE _type="post" AND (tags LIKE $q OR content LIKE $q OR title LIKE $q OR caption LIKE $q) ORDER BY postDate DESC LIMIT 10'
  );
};

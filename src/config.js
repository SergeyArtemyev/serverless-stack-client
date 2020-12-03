const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    'pk_test_51HttxqLQsfnxbeU3NOCaytXVkxoYKHBbVuOZCRsjtOnqBvQG6VGcRMY4WLxYGLWuucIPsJWWJFBxTNBuYVlObhjQ00XkFbwLmq',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'sergey-note-app-upload',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://ql1b8t922a.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_fbtpYtPhU',
    APP_CLIENT_ID: '61vvus3jkas81ifo6fatvvnf2v',
    IDENTITY_POOL_ID: 'us-east-1:0b15ab68-696b-4f41-abe5-b3322346b660',
  },
};

export default config;

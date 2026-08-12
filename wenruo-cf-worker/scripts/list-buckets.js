import { AwsClient } from 'aws4fetch';

const aws = new AwsClient({
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  service: 's3',
});

async function listBuckets() {
  const url = `${process.env.R2_ENDPOINT}/`;
  const res = await aws.fetch(url, { method: 'GET' });
  const text = await res.text();
  console.log('status:', res.status);
  console.log(text);
}

listBuckets().catch(console.error);

This is a demo project for deploying a Next.js application to AWS Amplify.

## Getting Started

To start development:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy to AWS Amplify
Refer to the [AWS Amplify documentation](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html#build-setting-detection-ssg-14) for detailed instructions on deploying an SSG application.

Note: In the `amplify.yml` configuration file, ensure the `baseDirectory` is set to the `.next` folder instead of the `out` folder, as used during local development.

![yaml config](https://github.com/user-attachments/assets/c103bba2-0201-48a1-96b1-e682ebe08997)

Deployment Steps:
- Choose source code provider: GitHub, GitLab, BitBucket,... or manually deploy from AWS S3, Zip file
- Add repository and branch: Grant AWS Amplify access to the repository and branch you want to deploy.
- App settings: app name, build command and custom config in yml file; add service role for logging to CloudWatch; Set up environment variables if needed.,...
- Review: Verify all settings and make any necessary adjustments before proceeding.


Check the result
![amplify-static-export](https://github.com/user-attachments/assets/e391d32f-6f71-408e-b3cb-c0880fd61a8a)

Video demo:
https://github.com/user-attachments/assets/ce68d2de-4398-4fe2-a841-72c5eb84dfe7


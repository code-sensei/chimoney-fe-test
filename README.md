## Getting Started

To run the project please run:

```bash
# clone git repository
git clone https://github.com/code-sensei/chimoney-fe-test.git
# install node_modules
npm i
# copy items from client/ to root directory
sudo cp -r client/app/ ./app && cp -r client/components/ ./components && cp -r client/pages/ ./pages 
# run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Routes
1. /
    1. Loads the application and does the following
    2. Get list of products from the Chimoney API
    3. Initializes product State with Redux
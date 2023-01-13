## Getting Started

To run the project please run:

```bash
# clone git repository
git clone https://github.com/code-sensei/chimoney-fe-test.git

______________________________________

# install node_modules
npm i

______________________________________

# copy items from client/ to root directory
sudo cp -r client/app/ ./app && 
cp -r client/components/ ./components && 
cp -r client/pages/ ./pages 

______________________________________

# run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Routes
1. `/` - Loads the application and does the following
    1. Get list of products from the Chimoney API
    2. Initializes product State with Redux

2. `/cart` - The cart page with the following functions
    1. Load cart items
    2. Update cart item quanity
    3. Remove cart item
    4. Show toast on item update
    5. Update cart subTotal on item update

### Ways To Improve App
1. Better color palette and layout to inprove User Experience
2. App can be made into a PWA and implementing a Cache to allow the app to the accessible in offline or poor network scenarios 
3. Use of skeleton loaders on Cart page
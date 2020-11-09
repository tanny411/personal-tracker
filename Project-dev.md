# Want to re-create?

Several things installed in order to create this app are (besides those in the package.json file):
- node, npm
- `npm install -g create-react-app` and `create-react-app .` on client folder. This will require node>=10 so break your bones trying to update nodejs. This may help: [Node manual installation](https://github.com/nodesource/distributions/blob/master/README.md#manual-installation).
- `npm i bootstrap reactstrap uuid react-transition-group` in client folder. Will also be in client package.json. 
- I used `reactstrap` to load in some of the html components such as navbar.
- Add [react dev tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to help see react stuff in browser dev tools.
- Also install `Redux devTools` extension and add this as an enhancer in your store file. Wrap everything you return from App.js with `<Provider = store={store}></Provider>` to access store in our components.
- We create out store.js file, types.js file in actions folder. Create all our actions in in it. And also in out reducers folder create all our reducers, and a index.js file contains the rooReducer.
- Finally using `connect` we export our components with arguments so that it can access the store and call Actions. The action and the state are set as props, so we should set proptypes.
- Then we should be calling our action from our component from `componentDidMount` method.
- Components with redux added to tem are calles `containers`.
- Refere to [reactstrap.github.io](https://reactstrap.github.io/) for reactstrap compoenet stuff.
- **Deploy**
    - If there was no backend, we could deploy it anywhere like github.io, after doing `npm run build` which create static assets in the build folder.
    - We deploy in heroku and use a script that builds for us the static assets.
    - Install [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) by `sudo snap install --classic heroku`.
    - Sign up to heroku.com
    - From projects main folder;
        ```
        heroku login
        heroku create
        ```
    - Go to heroku dashboard, click on the app just created and click deploy. Add heroku remote and push to it.
    - Remember to **allow all `IP`s** in atlas mongodb, else heroku ip cannot access it. (I only gave 1 week access to it)
    - Save mongodb **URI in heroku env** and load from there. 
    - Also remove **proxy from package.json of client** folder and the **enhancer for redux extension in chrome**.
    - Might need this https://github.com/bradtraversy/mern_shopping_list/issues/5
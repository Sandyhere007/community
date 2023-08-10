# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
<<<<<<< HEAD


import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { server } from '../..';

const SdeChallengeAdd1 = () => {
  // State for each question
  let name, value;
  const [question1, setQuestion1] = useState({
    questionText: '',
    tags: '',
    link1: '',
    link2: '',
    isComplete: false
  });


  const handleInputChange1 = (e) => {
    name = e.target.name;
    value = e.target.value;
    setQuestion1({ ...question1, [name]: value });
  };
  const [question2, setQuestion2] = useState({
    questionText: '',
    tags: '',
    link1: '',
    link2: '',
    isComplete: false
  });


  const handleInputChange2 = (e) => {
    name = e.target.name;
    value = e.target.value;
    setQuestion2({ ...question2, [name]: value });
  };
  const [question3, setQuestion3] = useState({
    questionText: '',
    tags: '',
    link1: '',
    link2: '',
    isComplete: false
  });


  const handleInputChange3 = (e) => {
    name = e.target.name;
    value = e.target.value;
    setQuestion3({ ...question3, [name]: value });
  };

  const [question4, setQuestion4] = useState({
    questionText: '',
    tags: '',
    link1: '',
    link2: '',
    isComplete: false
  });


  const handleInputChange4 = (e) => {
    name = e.target.name;
    value = e.target.value;
    setQuestion4({ ...question4, [name]: value });

  };

  const handleSubmit = async () => {
    try {

      const response = await axios.post(`${server}/challenge/addNew`,
        {
          question1, question2, question3, question4
        },
        
          {
            headers: { "Content-Type": "application/json",
           },
            withCredentials: true,
          }
        );
      toast.success(response.data.message);

    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while submitting.');
    }
  };

  return (
    <div className='sdechallengeadd1'>
      <div className="heading">
     
        <h3 className='date'> Add Questions  <input type="date"  placeholder='Enter Date Here' /> </h3>
        <h3>Admin Access</h3>
      </div>
      <div className="box" >
        <div className="content">
          <input
            type="text"
            name="questionText"
            placeholder={`Enter Question ${1} here`}
            value={question1.questionText}
            onChange={handleInputChange1}
          />
        </div>
        <input
          type="text"
          name="tags"
          placeholder={`Enter tags for Question ${1} here`}
          value={question1.tags}
          onChange={handleInputChange1}
        />
        <br />
        <div className="links">
          <input
            type="text"
            name="link1"
            placeholder={`Enter Link 1 for Question ${1} here`}
            value={question1.link1}
            onChange={handleInputChange1}
          />
          <input
            type="text"
            name="link2"
            placeholder={`Enter Link 2 for Question ${1} here`}
            value={question1.link2}
            onChange={handleInputChange1}
          />
        </div>
      </div>


      <div className="box" >
        <div className="content">
          <input
            type="text"
            name="questionText"
            placeholder={`Enter Question ${1 + 1} here`}
            value={question2.questionText}
            onChange={handleInputChange2}
          />
        </div>
        <input
          type="text"
          name="tags"
          placeholder={`Enter tags for Question ${1 + 1} here`}
          value={question2.tags}
          onChange={handleInputChange2}
        />
        <br />
        <div className="links">
          <input
            type="text"
            name="link1"
            placeholder={`Enter Link 1 for Question ${1 + 1} here`}
            value={question2.link1}
            onChange={handleInputChange2}
          />
          <input
            type="text"
            name="link2"
            placeholder={`Enter Link 2 for Question ${1 + 1} here`}
            value={question2.link2}
            onChange={handleInputChange2}
          />
        </div>
      </div>


      <div className="box" >
        <div className="content">
          <input
            type="text"
            name="questionText"
            placeholder={`Enter Question ${2 + 1} here`}
            value={question3.questionText}
            onChange={handleInputChange3}
          />
        </div>
        <input
          type="text"
          name="tags"
          placeholder={`Enter tags for Question ${2 + 1} here`}
          value={question3.tags}
          onChange={handleInputChange3}
        />
        <br />
        <div className="links">
          <input
            type="text"
            name="link1"
            placeholder={`Enter Link 1 for Question ${2 + 1} here`}
            value={question3.link1}
            onChange={handleInputChange3}
          />
          <input
            type="text"
            name="link2"
            placeholder={`Enter Link 2 for Question ${2 + 1} here`}
            value={question3.link2}
            onChange={handleInputChange3}
          />
        </div>
      </div>


      <div className="box" >
        <div className="content">
          <input
            type="text"
            name="questionText"
            placeholder={`Enter Question ${3 + 1} here`}
            value={question4.questionText}
            onChange={handleInputChange4}
          />
        </div>
        <input
          type="text"
          name="tags"
          placeholder={`Enter tags for Question ${3 + 1} here`}
          value={question4.tags}
          onChange={handleInputChange4}
        />
        <br />
        <div className="links">
          <input
            type="text"
            name="link1"
            placeholder={`Enter Link 1 for Question ${3 + 1} here`}
            value={question4.link1}
            onChange={handleInputChange4}
          />
          <input
            type="text"
            name="link2"
            placeholder={`Enter Link 2 for Question ${3 + 1} here`}
            value={question4.link2}
            onChange={handleInputChange4}
          />
        </div>
      </div>



      <button onClick={handleSubmit} >Add Questions</button>
      {/* <button >Submit</button> */}
    </div>
  );
};

export default SdeChallengeAdd1;
=======
>>>>>>> 0d5932b7e7d0552fe3e4289b06ca5fc7429ef3d9

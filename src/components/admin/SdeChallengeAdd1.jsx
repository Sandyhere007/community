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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(`${server}/challenge/addNew`,
        {
          question1, question2, question3, question4
        });
      toast.success("Questions added Successfully");

    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while submitting.');
    }
  };

  return (
    <div className='sdechallengeadd1'>
      <div className="heading">

        <h3 className='date'> Add Questions  <input type="date" placeholder='Enter Date Here' /> </h3>
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
            placeholder={`Enter Link of GFG for Question ${3 + 1} here`}
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



      <a onClick={handleSubmit} >Add Questions</a>
      {/* <button >Submit</button> */}
    </div>
  );
};

export default SdeChallengeAdd1;
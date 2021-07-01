import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile, updateProfileAction } from './../../../redux/actions/authActions';
import { RESET_USER_DETAILS } from './../../../redux/constant/authConstants';
import uploadImage from './../../../utils/uploadImageToAWS';
import FormData from 'form-data';
import Alert from '../../../extraPage/Alert';
import Loader from './../../components/Loader';

const Index = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState();
  const [email, setEmail] = useState('');
  // const [lookingForJob, setLookForJob] = useState('');
  // const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [imageLoading, setimageLoading] = useState(false);

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.getUserDetails);
  const { loading, error, user } = userDetails;

  const updateProfile = useSelector((state) => state.updateProfile);
  const { loading: updateLoading, error: updateError, success } = updateProfile;

  useEffect(() => {
    dispatch({ type: RESET_USER_DETAILS });
    dispatch(userProfile());
    if (user) {
      setUsername(user.username);
      setName(user.name);
      setImage(user.photo);
      setEmail(user.email);
      // setGender(user.gender);
      // setLookForJob(user.lookingForJob);
      setLocation(user.location);
      setBio(user.bio);
      setMobileNumber(user.mobileNumber);
    }
  }, [dispatch]);

  const onChangePicture = (e) => {
    e.preventDefault();
    setimageLoading(true);
    uploadImage(e.target.files[0], setImage, setimageLoading);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('name', name);
    data.append('username', username);
    data.append('email', email);
    // data.append('lookingForJob', lookingForJob);
    // data.append('gender', gender);
    data.append('location', location);
    data.append('bio', bio);
    data.append('mobileNumber', mobileNumber);
    data.append('image', image);

    dispatch(updateProfileAction(data));
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {loading && <Loader />}
      {imageLoading && <Loader />}
      {updateLoading && <Loader />}
      {error && <Alert message={error} type="error" />}
      {updateError && <Alert message={updateError} type="error" />}
      {success && <Alert message={success} type="success" />}
      <form onSubmit={submitHandler}>
        <div className="container mx-auto shadow bg-white dark:bg-gray-800 rounded">
          <div className="w-11/12 mx-auto">
            <div className="xl:w-9/12 mx-auto xl:mx-0">
              <div className="bg-center bg-cover bg-no-repeat rounded relative mt-8 h-48">
                <div className="w-40 h-40 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow">
                  <img
                    src={image}
                    alt
                    className="w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow"
                  />

                  <label
                    for="image-upload-id"
                    className="bg-red-400 dark:bg-gray-800 h-6 w-6 rounded-full flex items-center justify-center right-0 absolute cursor-pointer text-gray-600 dark:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>

                    <input type="file" onChange={onChangePicture} id="image-upload-id" accept="image/*" hidden />
                  </label>
                </div>
              </div>

              <div className="mt-8 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Location
                </label>
                <input
                  type="text"
                  id="email"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Mobile number
                </label>
                <input
                  type="Number"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              {/* <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Gender
                </label>
                <select
                  type="text"
                  name="gender"
                  id="gender"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  className="bg-white  border border-gray-300 z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800 dark:text-gray-100 rounded"
                >
                  <option value="male">Male</option>
                  <option value="female">female</option>
                </select>
              </div> */}

              {/* <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Are You looking for job
                </label>
                <select
                  type="text"
                  id="lookingForJob"
                  onChange={(e) => setLookForJob(e.target.value)}
                  defaultValue={lookingForJob}
                  className="bg-white  border border-gray-300 z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800 dark:text-gray-100 rounded"
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div> */}

              <div className="mt-8 flex flex-col xl:w-3/5 lg:w-3/5 w-full">
                <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Bio
                </label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent resize-none text-gray-800 dark:text-gray-100"
                  rows={5}
                />
                <p className="w-full text-right text-xs text-gray-500 pt-1">Character Limit: 200</p>
              </div>
            </div>

            {/* add new item */}
          </div>

          <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
            <button
              className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      )
    </div>
  );
};
export default Index;

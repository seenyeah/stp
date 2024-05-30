import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { auth, db } from '../Firebase/firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon

function Courses() {
  const [userDetails, setUserDetails] = useState(null);
  const [courses, setCourses] = useState([]);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  const fetchCourses = async () => {
    const coursesCollection = collection(db, 'Courses');
    const coursesSnapshot = await getDocs(coursesCollection);
    const coursesList = coursesSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setCourses(coursesList);
  };

  useEffect(() => {
    fetchUserData();
    fetchCourses();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "#/login";
      console.log("User logged out!");
    } catch (error) {
      console.log("Error logging out", error.message);
    }
  }

  const handleUser = () => {
    toast.success("Coming Soon", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Navbar />
      <div className="courses-container">
        <div className="user-info">
          {userDetails ? (
            <h3 className='bg-blue-500 p-4 text-white'>
              Welcome: {userDetails.Name} !!
            </h3>
          ) : (
            <h3 className='bg-blue-500 p-4 text-white'>Loading...</h3>
          )}
           <button
            onClick={handleLogout}
            className="logout-btn bg-red-500 text-white px-4 py-2 rounded-md flex items-center"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
        <div className="courses-list">
          <h2 className='text-2xl font-bold mb-4'>Available Courses</h2>
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <h3 className='text-xl font-semibold mb-2'>{course.title}</h3>
                  <p className='text-gray-700 mb-2'>{course.description}</p>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                    Access Course
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No courses available.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
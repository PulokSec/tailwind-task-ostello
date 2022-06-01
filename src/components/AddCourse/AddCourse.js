import React, { useState } from "react";
import "./AddCourse.css";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToAllCourses } from "../../redux/courseSlice";
const AddCourse = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({});
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleSubmit = (e) => {
    const formData = new FormData();

    formData.append("name", info.name);
    formData.append("category", info.category);
    formData.append("description", info.description);
    formData.append("duration", info.duration);
    formData.append("mode", info.mode);
    console.log(formData);
    dispatch(addToAllCourses(formData));
  };

  return (
    <div className="bg-white">
      <div className="max-w-8xl sm:px-6">
        <div className="flex">
          <a
            href="/"
            className="flex align-center justify-center text-tiny font-normal text-brand-2"
          >
            <MdOutlineArrowBackIos className="mt-2" />
            Back to courses
          </a>
          <div className="py-2 ml-auto pr-3">
            <button
              type="button"
              className="bg-white py-3 px-3 border border-brand-1 rounded-md shadow-sm text-sm leading-3 font-normal text-brand-1"
            >
              Save as a draft
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6 py-9">
          <div className="md:col-span-1">
            <div className="sm: pl-0">
              <p className="text-lg font-medium leading-6 text-brand-2 pl-5">
                Profile Section
              </p>
              <p className="mt-1 text-tiny font-normal text-brand-1 pt-3 px-[3rem]">
                Basic Details
              </p>
              <p className="mt-1 text-tiny font-normal text-brand-2 pt-3 px-[3rem]">
                Additional Description
              </p>
              <p className="mt-1 text-tiny font-normal text-brand-2 pt-3 px-[3rem]">
                Images and Videos
              </p>
              <p className="text-lg font-medium leading-6 text-brand-2 pl-5 py-5">
                Whats in this Course
              </p>
              <p className="mt-1 text-tiny font-normal text-brand-2 pt-3 px-[3rem]">
                Syllabus Description
              </p>
              <p className="mt-1 text-tiny font-normal text-brand-2 pt-3 px-[3rem]">
                FAQs
              </p>
              <p className="text-lg font-medium leading-6 text-brand-2 pl-5 py-5">
                Payments
              </p>
              <p className="mt-1 text-tiny font-normal text-brand-2 pt-3 px-[3rem]">
                Course price and coupons
              </p>
              <p className="mt-1 text-lg font-normal text-brand-2 pt-3 px-[3rem]">
                Production Support
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2 pl-5">
            <form action="#" onSubmit={handleSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-1 gap-2">
                    <p className=" text-lg font-medium text-brand-2">
                      Basic Details
                    </p>
                    <div className="mt-1 rounded-md pr-5">
                      <input
                        type="text"
                        name="name"
                        className="flex-1 shadow-sm h-10 block w-full sm:text-sm border border-brand-9 rounded-md"
                        placeholder="Course Name*"
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="mt-1 rounded-md pr-5">
                      <input
                        type="text"
                        name="mode"
                        className="flex-1 shadow-sm h-10 block w-full sm:text-sm border border-brand-9 rounded-md"
                        placeholder="Mode of Course*"
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="mt-1 rounded-md pr-5">
                      <input
                        type="text"
                        name="duration"
                        className="flex-1 shadow-sm h-10 block w-full sm:text-sm border border-brand-9 rounded-md"
                        placeholder="Course Duration*"
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="mt-1 rounded-md pr-5">
                      <textarea
                        name="description"
                        rows={4}
                        className="shadow-sm mt-1 block w-full sm:text-sm border border-brand-9 rounded-md"
                        placeholder="Course Description*"
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="mt-1 rounded-md pr-5">
                      <input
                        type="text"
                        name="duration"
                        className="flex-1 shadow-sm h-10 block w-full sm:text-sm border border-brand-9 rounded-md"
                        placeholder="Course Duration*"
                      />
                    </div>
                    <div className="mt-1 rounded-md pr-5">
                      <select
                        name="category"
                        autoComplete="category-name"
                        className="mt-1 shadow-sm h-10 block w-full sm:text-sm border border-brand-9 rounded-md text-brand-2"
                        onBlur={handleBlur}
                      >
                        <option>Graphic Design</option>
                        <option>Graphic Design</option>
                        <option>Graphic Design</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-4 gap-4 pr-5">
                      <div className="inline-flex font-normal text-sm justify-center py-2 px-4 border border-transparent shadow-sm rounded-lg text-white bg-brand-1">Graphic Design ×</div>
                      <div className="inline-flex font-normal text-sm justify-center py-2 px-4 border border-transparent shadow-sm rounded-lg text-white bg-brand-1">Graphic Design ×</div>
                      <div className="inline-flex font-normal text-sm justify-center py-2 px-4 border border-transparent shadow-sm rounded-lg text-white bg-brand-1">Graphic Design ×</div>
                      <div className="inline-flex font-normal text-sm justify-center py-2 px-4 border border-transparent shadow-sm rounded-lg text-white bg-brand-1">Graphic Design ×</div>
                      <div className="inline-flex font-normal text-sm justify-center py-2 px-4 border border-transparent shadow-sm rounded-lg text-white bg-brand-1">Graphic Design ×</div>
                      <div className="inline-flex font-normal text-sm justify-center py-2 px-4 border border-transparent shadow-sm rounded-lg text-white bg-brand-1">Graphic Design ×</div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex font-normal text-sm justify-center py-2 px-4 border border-transparent shadow-sm rounded-lg text-white bg-brand-1"
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;

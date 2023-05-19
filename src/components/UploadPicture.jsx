import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

function UploadPicture() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageOptions, setImageOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [search, setSearch] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    //readImage(file)
  };

  function handleSearchUpload(event) {
    const backendUrl = "https://optica.herokuapp.com";
    event.preventDefault();
    setLoading(true);

    fetch(`${backendUrl}/virtualsearch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        //score: score/100,
        image: selectedImage.split(",")[1],
      }),
    }).then((response) => {
      /* if(response.status < 400) {
            return response.json().then(similarities => {
              if(similarities.length > 0){
                setPages(organizePages(similarities.map(gls => {
                  gls.price = parseFloat(gls.price)
                  return gls
                })))
                setShowFilter(true)
              }
              setLoading(false)
            })
          } else {
            setLoading(false)
          } */
    });
    /* .catch(e => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: e.message,
            footer: 'Check your internet connection and try again.',
          });
          setLoading(false)
        }) */
  }

  return (
    <>
      <div
        className="relative min-h-screen flex items-center justify-center py-12 px-4 bg-slate-100"
        style={{ backgroundImage: "url('389.jpg')" }}
      >
        <h1 className="absolute top-5 mt-5 text-3xl font-bold text-white">
          Upload Picture
        </h1>
        <form onSubmit={handleSearchUpload} className="mt-8 space-y-3">
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-white tracking-wide">
              Title
            </label>
            <input
              className="text-base p-2 border border-white rounded-lg focus:outline-none focus:border-teal-500"
              type=""
              placeholder="mail@gmail.com"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-white tracking-wide">
              Attach Document
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                  <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                    <AiOutlineCloudUpload className="w-24 mt-16 text-5xl text-white" />
                  </div>
                  <p className="pointer-none text-white ">
                    <span className="text-sm">Drag and drop</span> files here{" "}
                    <br /> or{" "}
                    <a href="" id="" className="text-teal-400 hover:underline">
                      select a file
                    </a>{" "}
                    from your computer
                  </p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <span>File type: doc,pdf,types of images</span>
          </p>
          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-teal-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-teal-400 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UploadPicture;

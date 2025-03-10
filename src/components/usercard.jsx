// write the component code here

const Usercard = () => {
  // Static user details
  const profilePhoto = 'clair-obscur-expedition-33-4k-p8.jpg';
  const name = "Diven Saini";
  const email = "diven@example.com";
  const phone = "+91 xxxxxxxxxx";
  const address = "123 Main Street, Pinjore, India";

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4">
      <img
        className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
        src={profilePhoto}
        alt="Profile"
      />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600 mt-2">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;

import logo from '../../assets/logo.png'
import AppwriteSvg from '../../Appwrite.svg';

const Loader = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-muted px-4">
      <div className="flex items-center gap-10">
        <div className="rounded-full border border-[#19191C0A] bg-[#F9F9FA] p-3 shadow-md">
          <div className="rounded-full border border-[#FAFAFB] bg-white p-5 shadow-sm">
            <img
              alt="Heroship logo"
              src={logo}
              className="fly-animation h-12 w-12 animate-pulse brightness-125"
            />
          </div>
        </div>

        <div className="rounded-full border border-[#19191C0A] bg-[#F9F9FA] p-3 shadow-md">
          <div className="rounded-full border border-[#FAFAFB] bg-white p-5 shadow-sm">
            <img
              alt="Appwrite logo"
              src={AppwriteSvg}
              className="h-12 w-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;

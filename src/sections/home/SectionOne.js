import homeBgImg from "../../images/home-bg.png";
import homeImageImg from "../../images/home-image.png";

export const SectionOne = () => {
  return (
    <div
      style={{ backgroundImage: `url(${homeBgImg})` }}
      className="home-section-one bg-right-top flex bg-no-repeat pt-[200px] font-roboto"
    >
      <div className="w-[60%] flex flex-col">
        <div className="w-[540px] mx-auto">
          <h3 className="text-5xl not-italic font-medium text-[#091133] mb-8">
            Introduce Your Product Quickly & Effectively
          </h3>
          <p className="text-lg not-italic font-normal text-[#505F98]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="text-lg not-italic font-normal text-[#505F98]">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </div>
        <div className="w-[540px] mx-auto pt-16">
          <button className="w-48 h-[36px] flex-shrink-0 bg-[#111B47] text-white">
            Purchase UI Kit
          </button>
          <button className="w-48 h-[36px] flex-shrink-0 text-[#091133] text-base not-italic font-medium border-solid border-[#091133] border-[2px] ml-8">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-[40%] flex justify-end items-end">
        <img src={homeImageImg} className="w-[580px] h-[580px]" alt="" />
      </div>
    </div>
  );
};

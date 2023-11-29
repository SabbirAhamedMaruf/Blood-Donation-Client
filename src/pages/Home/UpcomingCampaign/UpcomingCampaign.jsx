import { Carousel } from "react-responsive-carousel";

const UpcomingCampaign = () => {
    return (
        <div>
                      <div className="h-[60%] text-left">
            <Carousel
              axis="vertical"
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              swipeable={true}
              stopOnHover={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
            >
              <div className="h-[40vh] flex flex-col justify-center items-center space-y-5">
                <h1 className="w-52 lg:w-96 md:text-3xl lg:text-7xl font-bold text-red-500">
                  Simple Act, Big Impact
                </h1>
                <p className="lg:text-xl w-[60%] font-semibold opacity-60">
                  One donation can touch multiple lives and create a ripple of
                  positivity.
                </p>
              </div>

            </Carousel>
          </div>
        </div>
    );
};

export default UpcomingCampaign;
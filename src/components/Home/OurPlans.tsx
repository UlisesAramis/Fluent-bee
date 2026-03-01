import Image from "next/image";
import PriceGlob from "@/assets/globo.webp";

const OurPlans = () => {
  return (
    <section className="w-full bg-white">
      <div>
        <div>
          <h1>Our Plans</h1>
          <div>
            <p>
              Only the time you spend speaking is deducted from your available
              minutes; the AI tutor´s responses do not impact your time balance.
              So, a conversation where you speak for two minutes could actually
              span twelve minutes of interaction, maximizing the value you
              recive from each session.
            </p>
          </div>
        </div>

        <div>
          <div>
            <p>Keep learning and get your first 15 minutes</p>
            <p>for just $1 usd</p>
          </div>

          <Image src={PriceGlob} alt="price" />
        </div>
      </div>
    </section>
  );
};

export default OurPlans;

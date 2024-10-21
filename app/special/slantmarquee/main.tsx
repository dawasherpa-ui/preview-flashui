import Marquee from "./marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <div className="w-full mx-auto rounded-lg shadow-md border">
      <img
        src="https://res.cloudinary.com/dpb8r7bqq/image/upload/v1726390892/Black_Minimalist_Website_Mockup_Instagram_Post_j5ca4p.png"
        alt="Image"
        className="w-full h-52 object-top object-cover rounded-lg mb-4"
      />
      <div className="px-4">
        <h2 className="text-lg font-bold text-secondary-900 dark:text-gray-100 mb-2">FlashAI</h2>
        <p className="text-sm text-secondary-900 dark:text-gray-100 mb-4">
          By{" "}
          <a
            href="javascript:void(0);"
            className="text-primary hover:text-purple-500 dark:hover:text-white"
          >
            FlashUi
          </a>
        </p>
      </div>
    </div>
  );
};

const MarqueeSlant = () => {
  return (
    <div className=" relative flex h-96 flex-row items-center justify-center overflow-hidden rounded-lg  bg-secondary  gap-6 md:shadow-xl w-10/12">
      <Marquee pauseOnHover vertical className="[--duration:20s] ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]  ">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee  pauseOnHover vertical className="[--duration:20s] ">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-secondary-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-secondary-950"></div>
    </div>
  );
};

export default MarqueeSlant;

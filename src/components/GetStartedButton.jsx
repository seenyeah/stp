import './Button.css';

const GetStartedButton = () => {
  return (
    <a class="mt-5 inline-block md:mt-11" href="/get-started">
      <button class="inline-block " type="button" >
        <div class=" text-white bg-tertiary font-bold inline-block  px-8 py-4 md:px-[75px] md:py-5 rounded-lg t-18 select-none appearance-none transition-opacity duration-[400ms] hover:opacity-90 leading-[1.4] tracking-[0.01em]  ">Get started</div>
      </button>
    </a>
  );
};

export default GetStartedButton;

const Header = () => {
  return (
    <header className=" fixed left-0 right-0 top-0 z-[1001] -mb-[77px] w-full px-[15px] md:px-[30px] bg-white shadow-md transition-colors duration-300 transform-none">
      <div className="flex w-full items-center justify-between py-4 xl:pl-5 xl:pr-[10px]">
        <div className="hidden items-center font-medium leading-[1.4] tracking-[0.01em] text-tertiary  md-large:flex">
          <div className="pr-[30px] cursor-pointer">
            <div className="relative">
              <div className="group flex items-center gap-[6px]">
                <span>Solutions</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L5 5L9 1"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

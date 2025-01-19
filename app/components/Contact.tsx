export default function Contact() {
  return (
    <div className="mx-56 my-24 flex justify-between items-center gap-20">
      <h1 className="font-primary text-8xl tracking-wide">
        Get 25% Off Your First Order
      </h1>
      <div className="mr-10">
        <p className="text-secondary text-2xl text-right mb-10 tracking-wide">
          Sign up to receive exclusive offers, decor tips and features about
          Society6 artists.
        </p>
        <div className="w-[90%] flex items-center justify-between px-2 py-4 border border-black rounded-full float-right">
          <input
            type="email"
            placeholder="Email Address"
            className="outline-none border-none pl-4 ml-2 placeholder:text-black"
          />
          <button className="bg-black text-white rounded-full px-4 py-2 font-bold mr-px">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

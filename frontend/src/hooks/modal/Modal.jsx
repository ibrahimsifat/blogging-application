export default function Modal({ open, control, children }) {
  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/70 cursor-pointer transition-all duration-300"
        ></div>
        <div className="rounded-xl w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </>
    )
  );
}

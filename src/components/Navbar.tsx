export const Navbar = () => {
  return (
    <div className='w-full bg-amber-700 p-4'>
      <ul className='flex flex-row font-mono font-bold text-white [&_a]:hover:text-amber-200 [&>li]:pr-5'>
        <li>
          <a href='./'>Home</a>
        </li>
        <li>
          <a href='./'>About us</a>
        </li>
        <li>
          <a href='./'>Contact us</a>
        </li>
      </ul>
    </div>
  );
};

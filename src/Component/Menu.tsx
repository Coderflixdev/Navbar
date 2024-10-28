import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";


const Menu = () => {
    return (
        <nav className='fixed top-0 bottom-0 w-80 bg-blue-900 bg-clip-pedding backdrop-filter bg-opacity-30 pt-24 transform -translate-x-full will-change-transform overflow-hidden'>
            <ul className='flex flex-col gap-8 p-4'>
                <li className='text-white text-4xl font-bold transform opacity-0 blur-lg scale-50 will-change-transform'>Portfolio</li>
                <li className='text-white text-4xl font-bold transform opacity-0 blur-lg scale-50 will-change-transform'>About</li>
                <li className='text-white text-4xl font-bold transform opacity-0 blur-lg scale-50 will-change-transform'>Contact</li>
                <li className='text-white text-4xl font-bold transform opacity-0 blur-lg scale-50 will-change-transform'>Resume</li>
                <div className='border-[1px] border-blue-400 opacity-10 w-56 h-[1px] my-6'></div>
                    <ul className='flex gap-6'>
                        <li className='text-white text-4xl font-bold transform opacity-0 blur-lg scale-50 will-change-transform'><FaGithub /></li>
                        <li className='text-white text-4xl font-bold transform opacity-0 blur-lg scale-50 will-change-transform'><FaInstagram /></li>
                        <li className='text-white text-4xl font-bold transform opacity-0 blur-lg scale-50 will-change-transform'><FaTwitter /></li>
                        <li className='text-white text-4xl font-bold transform opacity-0 blur-lg scale-50 will-change-transform'><FiLinkedin /></li>
                    </ul>
                
            </ul>
        </nav>
    );
};

export default Menu;
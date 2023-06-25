import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
    currentUser: null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return ( 
    <header className='fixed h-[80px] w-full bg-white'>
        <div className="flex items-center justify-between h-full px-10">
            <Logo />
            <Search/>
            <UserMenu />
        </div>
        
    </header> 
    );
}
 
export default Navbar;
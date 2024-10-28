interface MenueToggleProps {
    toggle: () => void;
}

const Path = (props: any) => (
    <path fill="transparent"
        strokeWidth="3"
        stroke="white"
        strokeLinecap="round"
        {...props}

    />
)

export const ToggleMenu = ({ toggle }: MenueToggleProps) => (
    <button onClick={toggle} className="absolute top-4 left-6 w-12 flex justify-center items-center rounded-full bg-clip-padding backdrop-filter backdrop-blur p-2 h-12 bg-blue-600 ">
        <svg width="23" height="18" viewBox="0 0 23 18">
            <Path d="M 2 2.5 L 20 2.5" className="top" />
            <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
            <Path d="M 2 16.346 L 20 16.346" className="bottom" />
        </svg>
    </button>
);
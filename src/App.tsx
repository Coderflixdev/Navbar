import  { useEffect, useState } from 'react';
import { stagger, useAnimate } from 'framer-motion';
import image from './assets/bg.jpg'
import Menu from './Component/Menu';
import { ToggleMenu } from './Component/ToggleMenu';


const useMenuAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
        [
          "nav",
          { transform: "translateX(0%)" },
          { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
        ],
        [
          "li",
          { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
          { delay: stagger(0.05), at: "-0.1" }
        ]
      ]
      : [
        [
          "li",
          { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
          { delay: stagger(0.05, { from: "last" }), at: "<" }
        ],
        ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
      ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen]);

  return scope;
}

const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const scope = useMenuAnimation(isOpen)


  return (
    <div ref={scope}>
      <img src={image} className='w-full h-[100vh]' alt="" />
      <Menu />
      <ToggleMenu toggle={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default App;
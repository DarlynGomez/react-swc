import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types'
import ActionButton  from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useState } from 'react';
import homePageImage from "@/assets/background.png"
import { relative } from 'path';
import { motion } from 'framer-motion';



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const [scrollY, setScrollY] = useState(0);
    
    return <section
        id='home'
        className=' bg-white-100 '
    >

    {/* Image and Main Header*/}
        <motion.div style={{
                position: "relative",
                display: "inline-block",
                verticalAlign: "top",
                margin: "0px",
                padding: "0px",
                top: "0",
                width: "100%",
            }}
            className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
            {/* Main Header*/}
            <div >
                {/* Headings*/}
                <motion.div 
                    className='md:-mt-20'
                    initial= "hidden"
                    whileInView="visibile"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0},
                }} 
                >
                    <div className="relative">
                        <div className='before:absolute before:-top-2'>
                            Hello
                        </div>
                    </div>
                    <p></p>

                </motion.div>
                {/* Actions*/}
                <motion.div style={{

                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    zIndex: "20",
                }}
                    className='mt-8 flex items-center gap-8 md:justify-start'
                    initial= "hidden"
                        whileInView="visibile"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50},
                            visible: { opacity: 1, x: 0},
                }} 
                >
                    <ActionButton setSelectedPage={setSelectedPage} >
                        Register to Adopt
                    </ActionButton>
                    <AnchorLink
                        className='text-sm font-bold text-white-100 hover:text-gray-50'
                        onClick={() => setSelectedPage(SelectedPage.Adopt)}
                        href={`#${SelectedPage.Adopt}`}
                    >

                    </AnchorLink>
                </motion.div>
            </div>

            {/* Image*/} 
            <div style={{
                position: "absolute",
                top: "0",
                display: "inline-block",
                verticalAlign: "top",
                margin: "0px",
                width: "100%",
            }}>
                <img style={{
                    margin: "0",
                    display:"block",
                    position: 'absolute',
                    width: "100%",
                }} alt='home-pageGraphic' src={homePageImage}></img>
            </div>
            <div style={{
                backgroundColor: "white",
                height: "50%",
                zIndex: "25",
                top: "-20px",
            }}>

            </div>


        </motion.div>

        {/* Sponsors */}
    </section>

}

export default Home
import {motion} from 'framer-motion';
import React, { useState } from 'react';
import { FlipCard, FlipCardBack, FlipCardFront, FlipCardInner } from './styles';

const CardFlip = ({  }) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setIsFlipped(!isFlipped);
            setTimeout(() => {
                setIsAnimating(false);
            }
            , 1000);
        }
    };

    return (
        <FlipCard className='w-[600px] h-[400px] rounded-md' onClick={handleFlip}>
            <motion.div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                }}
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}>
<FlipCardFront className='bg-[#bbb] text-black w-full h-full absolute'>
    <p>Front</p>
</FlipCardFront>
<FlipCardBack className='bg-[#2980b9] text-black w-full h-full absolute'>
    <p>Back</p>
</FlipCardBack>
            </motion.div>
            
        </FlipCard>
    );
 };


export default CardFlip;
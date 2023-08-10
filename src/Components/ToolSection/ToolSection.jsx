import React, { useEffect } from 'react'
import './ToolSection.css'
import Excel from '../../Elements/logoIcons/Excel';
import GoogleAds from '../../Elements/logoIcons/GoogleAds';
import Figma from '../../Elements/logoIcons/Figma';
import Github from '../../Elements/logoIcons/Github';
import Illustrator from '../../Elements/logoIcons/Illustrator';
import JavaScript from '../../Elements/logoIcons/JavaScript';
import Notion from '../../Elements/logoIcons/Notion';
import NodeJS from '../../Elements/logoIcons/NodeJS';
import NPM from '../../Elements/logoIcons/npm';
import Photoshop from '../../Elements/logoIcons/Photoshop';
import ReactIcon from '../../Elements/logoIcons/ReactIcon';
import Sass from '../../Elements/logoIcons/Sass';
import Sheets from '../../Elements/logoIcons/Sheets';
import Tailwind from '../../Elements/logoIcons/Tailwind';
import Unity from '../../Elements/logoIcons/Unity';
import VisualStudio from '../../Elements/logoIcons/VisualStudio';
import WebFlow from '../../Elements/logoIcons/WebFlow';
import WordPress from '../../Elements/logoIcons/WordPress';

const IconSection = () => {

  useEffect(() => {

    const isHover = e => e.parentElement.querySelector(':hover') === e;    

    const impact = document.getElementById('impactLogo');
    const Scale = document.querySelector('.scaleLogo');
    const Move = document.querySelector('.toolLogoContainer')

    // Create a media condition that targets viewports at least 768px wide
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    if (mediaQuery.matches) {

        document.querySelector('#IconSection').addEventListener('mouseenter', function()  {

            Move.style.transition = 'all .1s ease';
        
        });

        document.querySelector('#IconSection').addEventListener('mousemove', function checkHover(e) {

            let xAxis = (window.innerWidth  - e.pageX) / 15;
            let yAxis = (window.innerHeight  - e.pageY + 2000) / 15;

            const hovered = isHover(impact);
            let i = 0;
            if (hovered !== true) {           
                Move.style.transform = `translateY(${yAxis}px) translateX(${xAxis}px)`;
                Scale.style.transform = `scale3d(1, 1, 1)`; 
            } 
            
            if (hovered !== false) {
                Move.style.transform = `translateY(${yAxis}px) translateX(${xAxis}px)`;
                Scale.style.transform = `scale3d(1.4, 1.4, 1.4)`;
            }
        });

        document.querySelector('#IconSection').addEventListener('mouseleave', function()  {

            Move.style.transition = 'all .5s ease-in-out';
            Move.style.transform = `translateY(0px) translateX(0px)`;
        
        });
    }

})

  return (
    <section id="IconSection" className='flex flex-h'>

        <div className='flex flex-h trigger'>
            <h1 className=''>
                
                <div className='word'>
                    <label className='char toShow'>I</label>
                </div>

                <div className='word'>
                    <label className='char toShow'>u</label>
                    <label className='char toShow'>s</label>
                    <label className='char toShow'>e</label>
                </div>

                <div className='word'>
                    <label className='char toShow'>v</label>
                    <label className='char toShow'>a</label>
                    <label className='char toShow'>r</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>o</label>
                    <label className='char toShow'>u</label>
                    <label className='char toShow'>s</label>
                </div>
                
            </h1>
            <h1 className='impact word' id="impactLogo">

                    <div className='word'>
                        <label className='char toShow'>p</label>
                        <label className='char toShow'>o</label>
                        <label className='char toShow'>w</label>
                        <label className='char toShow'>e</label>
                        <label className='char toShow'>r</label>
                        <label className='char toShow'>f</label>
                        <label className='char toShow'>u</label>
                        <label className='char toShow'>l</label>
                    </div>

                    <div className='word'>
                        <label className='char toShow'>t</label>
                        <label className='char toShow'>o</label>
                        <label className='char toShow'>o</label>
                        <label className='char toShow'>l</label>
                        <label className='char toShow'>s</label>
                    </div>

            </h1>
        </div>

        <div className='scaleLogo'>

            <div className='toolLogoContainer flex flex-h'>

                <div className='flexIcons'>
                    <Excel className="toolIcon" />
                    <div className='toolDot' />
                    <GoogleAds className="toolIcon" />
                    <div className='toolDot' />
                    <Photoshop className="toolIcon" />
                    <div className='toolDot' />
                    <Sass className="toolIcon" />
                    <div className='toolDot' />
                </div>

                <div className='flexIcons'>
                    <div className='toolDot' />
                    <Figma className='toolIcon' />
                    <div className='toolDot' />
                    <VisualStudio className='toolIcon' />
                    <div className='toolDot' />
                    <Github className='toolIcon' />
                    <div className='toolDot' />
                    <Sheets className='toolIcon' />
                </div>
                
                <div className='flexIcons'>
                    {/* <div className='toolDot' />
                    <NPM className='toolIcon' />
                    <div className='toolDot' />
                    <Github className='toolIcon' />
                    <div className='toolDot' /> */}
                    <WebFlow className="toolIcon" />
                    <div className='toolDot' />
                    <ReactIcon className='toolIcon' />
                    <div className='toolDot' />
                    <NodeJS className="toolIcon" />
                    <div className='toolDot' />
                    <Notion className="toolIcon" />
                    <div className='toolDot' />
                </div>

                <div className='flexIcons'>
                    <div className='toolDot' />
                    <Unity className='toolIcon' />
                    <div className='toolDot' />
                    <JavaScript className='toolIcon' />
                    <div className='toolDot' />
                    <Tailwind className='toolIcon' />
                    <div className='toolDot' />
                    <WordPress className='toolIcon' />
                    
                </div>


            </div>

        </div>      

        <div className='border' />
      
  </section>
  )
}

export default IconSection
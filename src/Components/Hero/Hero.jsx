import React, { useEffect } from 'react'
import './Hero.css'
import FadeIn from '../../Hooks/FadeIn'

const Hero = () => {

    FadeIn(".trigger")

    useEffect(() => {


        const isHover = e => e.parentElement.querySelector(':hover') === e;    

        const impact = document.getElementById('impactHeader');
        const cubes = document.querySelectorAll('.hero_cubes_item');
        const cubesScale = document.querySelectorAll('.scale');
    
        // Create a media condition that targets viewports at least 768px wide
        const mediaQuery = window.matchMedia('(min-width: 768px)')

        if (mediaQuery.matches) {
            
            document.querySelector('#Hero').addEventListener('mousemove', function checkHover(e) {

                const hovered = isHover(impact);
                let i = 0;
                
                for(i = 0; i < cubes.length; i++){
    
                    let xAxis = ((window.innerWidth / 2 - e.pageX) / 30) * cubes[i].getAttribute("datax");
                    let yAxis = ((window.innerHeight / 2 - e.pageY) / 15) * cubes[i].getAttribute("datay");
    
                    cubes[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(${yAxis}px) translateX(${xAxis}px)`;
    
                    if (hovered !== true) {
                        cubesScale[i].style.transform = `scale3d(1, 1, 1)`;
                    }
                
                    if (hovered !== false) {
                        cubesScale[i].style.transform = `scale3d(1.2, 1.2, 1.2)`;
                    } 
                }
            });
            
          }


    })


  return (
    <section id="Hero" className='flex'>

        <div className='flex flex-h heroText'>
            <h1 className='heroHeader'>

                <div className='word'>
                    <label className='char toShow'>I</label>
                </div>

                <div className='word'>
                    <label className='char toShow'>b</label>
                    <label className='char toShow'>u</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>l</label>
                    <label className='char toShow'>d</label>
                </div>

                <label className='impact word' id="impactHeader">
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>m</label>
                    <label className='char toShow'>p</label>
                    <label className='char toShow'>a</label>
                    <label className='char toShow'>c</label>
                    <label className='char toShow'>t</label>
                    <label className='char toShow'>f</label>
                    <label className='char toShow'>u</label>
                    <label className='char toShow'>l</label>
                </label> 
                
                <div className='word'>
                    <label className='char toShow'>w</label>
                    <label className='char toShow'>e</label>
                    <label className='char toShow'>b</label>
                    <label className='char toShow'>s</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>t</label>
                    <label className='char toShow'>e</label>
                </div>

                <div className='word'>
                    <label className='char toShow'>w</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>t</label>
                    <label className='char toShow'>h</label>
                </div>

                <div className='word'>
                    <label className='char toShow'>R</label>
                    <label className='char toShow'>e</label>
                    <label className='char toShow'>a</label>
                    <label className='char toShow'>c</label>
                    <label className='char toShow'>t</label>
                </div>
            </h1>

            <h3 className='heroDesc'>
                
                <label className='word'>
                    <label className='char toShow'>I</label>
                </label> 

                <label className='word'>
                    <label className='char toShow'>f</label>
                    <label className='char toShow'>o</label>
                    <label className='char toShow'>c</label>
                    <label className='char toShow'>u</label>
                    <label className='char toShow'>s</label>
                </label> 
                
                <label className='word'>
                    <label className='char toShow'>o</label>
                    <label className='char toShow'>n</label>
                </label> 

                <label className='word'>
                    <label className='char toShow'>m</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>x</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>n</label>
                    <label className='char toShow'>g</label>
                </label> 

                <label className='word'>
                    <label className='char toShow'>m</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>n</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>m</label>
                    <label className='char toShow'>a</label>
                    <label className='char toShow'>l</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>s</label>
                    <label className='char toShow'>m</label>
                </label> 

                <label className='word'>
                    <label className='char toShow'>w</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>t</label>
                    <label className='char toShow'>h</label>
                </label>

                <label className='word'>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>n</label>
                    <label className='char toShow'>t</label>
                    <label className='char toShow'>e</label>
                    <label className='char toShow'>r</label>
                    <label className='char toShow'>a</label>
                    <label className='char toShow'>c</label>
                    <label className='char toShow'>t</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>b</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>l</label>
                    <label className='char toShow'>i</label>
                    <label className='char toShow'>t</label>
                    <label className='char toShow'>y</label>
                </label> 
                
            </h3>
        </div>


        <div className='hero_cubes_item is-1' datax="+1" datay="+1">

            <div className='scale'>

            <div className="hero_cubes_side"></div>
            <div className="hero_cubes_side is-top"></div>
            <div className="hero_cubes_side is-right"></div>
            <div className="hero_cubes_side is-left"></div>
            <div className="hero_cubes_side is-front">
                <div className="hero_cubes_embed-icon w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="120px" height="120px">    <path d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"/></svg>
                </div>
            </div>
            <div className="hero_cubes_side is-back"></div>
            </div>
        </div>

        <div className='hero_cubes_item is-2' datax="-1" datay="-1">

            <div className='scale'>

            <div className="hero_cubes_side"></div>
            <div className="hero_cubes_side is-top"></div>
            <div className="hero_cubes_side is-right"></div>
            <div className="hero_cubes_side is-left"></div>
            <div className="hero_cubes_side is-front">
                <div className="hero_cubes_embed-icon w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="120px" height="120px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M15,20.38 c0,1.777-1.09,2.773-2.9,2.773c-1.788,0-2.927-1.045-2.927-2.735h1.937c0.005,0.627,0.379,1.023,0.957,1.023 c0.594,0,0.913-0.374,0.913-1.078v-5.365H15V20.38z M20.481,23.153c-2.009,0-3.273-0.946-3.307-2.476H19.1 c0.049,0.578,0.626,0.946,1.463,0.946c0.754,0,1.272-0.363,1.272-0.886c0-0.44-0.347-0.677-1.255-0.858l-1.045-0.209 c-1.453-0.275-2.201-1.067-2.201-2.316c0-1.552,1.244-2.57,3.158-2.57c1.86,0,3.147,1.007,3.18,2.476h-1.865 c-0.044-0.561-0.578-0.952-1.289-0.952c-0.709,0-1.176,0.336-1.176,0.864c0,0.435,0.352,0.688,1.188,0.853l1.022,0.198 c1.569,0.303,2.273,1.012,2.273,2.272C23.826,22.152,22.561,23.153,20.481,23.153z"/></svg>
                </div>
            </div>
            <div className="hero_cubes_side is-back"></div>
            </div>

        </div>

        <div className='hero_cubes_item is-3' datax="-1" datay="+1">

            <div className='scale'>

            <div className="hero_cubes_side"></div>
            <div className="hero_cubes_side is-top"></div>
            <div className="hero_cubes_side is-right"></div>
            <div className="hero_cubes_side is-left"></div>
            <div className="hero_cubes_side is-front">
                <div className="hero_cubes_embed-icon w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="128px" height="128px"><path d="M 15.994141 3 C 15.629141 3 15.264219 3.0895313 14.949219 3.2695312 L 5.0390625 8.9902344 C 4.3990625 9.3602344 4 10.060781 4 10.800781 L 4 21.179688 C 4 21.929688 4.3990625 22.620234 5.0390625 22.990234 L 7.640625 24.490234 C 8.900625 25.110234 9.3499219 25.109375 9.9199219 25.109375 C 11.789922 25.109375 12.859375 23.979531 12.859375 22.019531 L 12.859375 11.310547 C 12.859375 11.150547 12.730312 11.019531 12.570312 11.019531 L 11.320312 11.019531 C 11.150313 11.019531 11.029297 11.150547 11.029297 11.310547 L 11.029297 22.009766 C 11.029297 22.889766 10.120391 23.749531 8.6503906 23.019531 L 5.9296875 21.449219 C 5.8296875 21.399219 5.7695313 21.289687 5.7695312 21.179688 L 5.7695312 10.810547 C 5.7695312 10.690547 5.8296875 10.589297 5.9296875 10.529297 L 15.839844 4.8105469 C 15.929844 4.7505469 16.050391 4.7505469 16.150391 4.8105469 L 26.060547 10.529297 C 26.160547 10.589297 26.220703 10.690781 26.220703 10.800781 L 26.220703 21.179688 C 26.220703 21.289687 26.160313 21.399219 26.070312 21.449219 L 16.150391 27.179688 C 16.060391 27.229688 15.929844 27.229688 15.839844 27.179688 L 13.289062 25.669922 C 13.219062 25.619922 13.120781 25.610391 13.050781 25.650391 C 12.340781 26.050391 12.210781 26.100078 11.550781 26.330078 C 11.390781 26.380078 11.140625 26.479766 11.640625 26.759766 L 14.949219 28.720703 C 15.269219 28.900703 15.630234 29 15.990234 29 C 16.360234 29 16.719062 28.900703 17.039062 28.720703 L 26.960938 22.990234 C 27.600938 22.620234 28 21.929688 28 21.179688 L 28 10.810547 C 28 10.060547 27.600938 9.37 26.960938 9 L 17.039062 3.2695312 C 16.724063 3.0895313 16.359141 3 15.994141 3 z M 18.660156 11.005859 C 15.830156 11.005859 14.140625 12.205078 14.140625 14.205078 C 14.140625 16.375078 15.819062 16.974141 18.539062 17.244141 C 21.789062 17.564141 22.039062 18.045547 22.039062 18.685547 C 22.039062 19.785547 21.150547 20.255859 19.060547 20.255859 C 16.430547 20.255859 15.850156 19.594922 15.660156 18.294922 C 15.640156 18.154922 15.520859 18.054688 15.380859 18.054688 L 14.089844 18.054688 C 13.929844 18.054688 13.810547 18.185938 13.810547 18.335938 C 13.810547 20.005937 14.720547 21.994141 19.060547 21.994141 C 22.200547 21.994141 24 20.755703 24 18.595703 C 24 16.455703 22.549766 15.884609 19.509766 15.474609 C 16.419766 15.074609 16.109375 14.864531 16.109375 14.144531 C 16.109375 13.544531 16.380156 12.755859 18.660156 12.755859 C 20.690156 12.755859 21.449766 13.194453 21.759766 14.564453 C 21.789766 14.694453 21.899062 14.794922 22.039062 14.794922 L 23.330078 14.794922 C 23.410078 14.794922 23.479063 14.755313 23.539062 14.695312 C 23.589062 14.645313 23.619375 14.564609 23.609375 14.474609 C 23.409375 12.114609 21.840156 11.005859 18.660156 11.005859 z"/></svg>
                </div>
            </div>
            <div className="hero_cubes_side is-back"></div>
            </div>

        </div>

        <div className='hero_cubes_item is-4' datax="+1" datay="-1">

            <div className='scale'>

            <div className="hero_cubes_side"></div>
            <div className="hero_cubes_side is-top"></div>
            <div className="hero_cubes_side is-right"></div>
            <div className="hero_cubes_side is-left"></div>
            <div className="hero_cubes_side is-front">
                <div className="hero_cubes_embed-icon w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px">    <path d="M 43.816406 1 C 43.210406 1.01 28.899922 1.327375 22.919922 10.109375 L 12.390625 28.878906 C 11.615625 30.249906 12.042422 31.996516 13.357422 32.853516 L 26.380859 41.496094 C 26.891859 41.833094 27.478547 41.994141 28.060547 41.994141 C 28.956547 41.994141 29.844547 41.610766 30.435547 40.884766 L 44.095703 24.183594 C 44.114703 24.161594 44.132438 24.139234 44.148438 24.115234 C 46.340438 20.901234 47.015 17.077 47 13.5 C 46.974 7.379 44.902672 1.9848125 44.763672 1.6328125 C 44.610672 1.2468125 44.214406 1.036 43.816406 1 z M 33.492188 12 C 34.551504 11.99775 35.622984 12.299922 36.568359 12.935547 C 39.089359 14.630547 39.759453 18.047359 38.064453 20.568359 C 36.369453 23.089359 32.952641 23.759453 30.431641 22.064453 C 27.910641 20.369453 27.240547 16.952641 28.935547 14.431641 C 29.994922 12.856016 31.72666 12.00375 33.492188 12 z M 15.640625 19.009766 C 10.450625 19.139766 6.3692187 21.230625 3.1992188 25.390625 C 2.9692188 25.700625 2.9396094 26.099453 3.0996094 26.439453 C 3.2696094 26.779453 3.62 27 4 27 L 5.75 27 C 7.15 27 8.9595313 27.139688 10.769531 27.679688 L 15.640625 19.009766 z M 38.179688 34.539062 C 34.819688 38.629062 31.579375 42.569297 31.359375 42.779297 C 32.719375 44.749297 33.480234 46.789922 33.990234 48.169922 L 34.060547 48.349609 C 34.190547 48.689609 34.489609 48.940234 34.849609 48.990234 C 34.899609 49.000234 34.95 49 35 49 C 35.31 49 35.610781 48.859375 35.800781 48.609375 C 38.040781 45.649375 39 42.78 39 39 C 39 37.35 38.649687 35.839063 38.179688 34.539062 z M 13.423828 35.292969 C 11.273828 38.832969 9.613625 46.246203 12.765625 48.408203 C 13.341625 48.802203 14.0265 49.001953 14.8125 49.001953 C 15.1515 49.001953 15.509766 48.963625 15.884766 48.890625 C 18.965766 48.285625 22.792594 45.242406 24.558594 42.691406 L 22.484375 41.3125 C 20.545375 43.1855 17.604281 44.781234 15.863281 43.615234 C 14.122281 42.441234 14.438922 39.121141 15.419922 36.619141 L 13.423828 35.292969 z"/></svg>
                </div>
            </div>
            <div className="hero_cubes_side is-back"></div>
            </div>

        </div>


        <div className='absolute flex'>
            <div className='background-grid_box-wrapper' id="bg-grid">
                <div className="bakground-grid_overlay pointer-events-off"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
                <div className="background-grid_box"></div>
            </div>
        </div>
        
        <div className='border' />

    </section>
  )
}

export default Hero
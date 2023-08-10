import React, { useEffect } from 'react'

function FadeIn(id) {

   

    useEffect(() => {

        //Animation effect, character by character
        function animateNext(test) {
            var elements = test.querySelectorAll(".toShow");
            elements.forEach((element, i) => {
                setTimeout(() => {
                    element.classList.add('fade-in');
                    
                }, i * 20);
                
            })
          }

          //Fire for Hero doc
          animateNext(document.getElementById('Hero'));

          const bg = document.getElementById('bg-grid');
          setTimeout(() => {
            bg.style.opacity = '0.3';
            
        }, 1400);
          const cube = document.querySelectorAll('.hero_cubes_item');
          cube.forEach((element) => {
            setTimeout(() => {
                element.style.opacity = '1';
            }, 1400);
        })

          let scrollTriggers = document.querySelectorAll(id);
          let array = Array.from(scrollTriggers);

          //Enters in viewport
          window.addEventListener("scroll", () => {

            array.forEach((trigger) => {
                var top = trigger.getBoundingClientRect().top
                if (top < window.innerHeight -100) {
                    animateNext(trigger);
                    let index = array.indexOf(trigger)
                    array.splice(index, 1);
                }
                if (array == 0) {
                    window.removeEventListener("scroll", null);
                }
            })
          })

        }





)}

export default FadeIn

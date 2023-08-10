import React, { useEffect } from 'react'
import './Contact.css'
import Mail from '../../Elements/logoIcons/Mail';
import LinkedIn from '../../Elements/logoIcons/LinkedIn';

const Contact = () => {



  return (
    <section id="Contact" className='flex flex-h'>
        


        <div className='flex flex-h trigger'>
            <h1 className=''>
              
              <div className='word'>
                  <label className='char toShow'>H</label>
                  <label className='char toShow'>o</label>
                  <label className='char toShow'>w</label>
              </div>

              <div className='word'>
                <label className='char toShow'>a</label>
                <label className='char toShow'>b</label>
                <label className='char toShow'>o</label>
                <label className='char toShow'>u</label>
                <label className='char toShow'>t</label>
            </div>

            <div className='word'>
                <label className='char toShow'>a</label>
            </div> 
              
            </h1>
            
            <h1 className='impact' id="impactContact">
              
              <div className='word'>
                  <label className='char toShow'>l</label>
                  <label className='char toShow'>i</label>
                  <label className='char toShow'>t</label>
                  <label className='char toShow'>t</label>
                  <label className='char toShow'>l</label>
                  <label className='char toShow'>e</label>
              </div>

              <div className='word'>
                <label className='char toShow'>c</label>
                <label className='char toShow'>h</label>
                <label className='char toShow'>a</label>
                <label className='char toShow'>t</label>
                <label className='char toShow'>?</label>
              </div>
              
            </h1>
        </div>

        <div className='flex contactLinks'>
          <Mail  />
          <LinkedIn />
        </div>

        <p className='coffee'>(coffee is on me)</p>

    </section>
  )
}

export default Contact
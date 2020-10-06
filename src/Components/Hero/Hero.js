import React from 'react';

import './Hero.css';
import e_pic from '../../res/esha_dad.jpg'
import s_pic from '../../res/shub_dad.jpg'

const Hero = () => {
  return (
    <div class="hero">
        <div className="letter col">
            <div className="Esha-letter let">
              <strong style={{fontSize: "2rem"}}>Dear Dad, </strong>
              <p>     Thank you for giving me time to drive 

Even though I never ask when you arrive 

thanks for tending to the garden

none of us remember so you do your part and

thanks for making food when mom was tired 

As well as working hard on your job so you don’t get fired

thank you for trying to balance your time

with food and work

It’s always nap time 

Thank you for handling kushi when we couldnt 

And forgetting the potty bag which you shouldn’t

Thank you for giving me the motivation to work

When I’m stressed and trapped of homework

we could thank you for a lot and so much more

but thanks for being the dad we always asked for

</p>
            </div>
        </div>
        <div className="pic-cont col">
          <div className="pic esha-pic">
            <img src={e_pic}></img>
          </div>
        </div>
        <div className="pic-cont col">
          <div className="pic shub-pic">
            <img src={s_pic}></img>
          </div>
        </div>
        <div className="letter col">
          <div className="Shub-letter let">
            <strong style={{fontSize: "2rem"}}>Dear Dad, </strong>
            <p>Thank you for everything that you've ever done, given, made, etc. (I have more verbs, but you get the point) for Esha and I. You've always seemed to know how to fix any issues any of us have ever gotten into. You tend to have a very head strong peronality which means we butt heads during arguments or conversations (never anything too out of hand though) but that quality is especially nice when its harnessed against mutual enemies! I owe you more than I'd ever be able to pay back, so hopefully this site is good for now.</p>
          </div>
        </div>
    </div>
  );
}

export default Hero;

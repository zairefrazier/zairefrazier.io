import React from "react";
  
const About = () => {
  return (
    <div className="about">
      <section class="hero container max-w-screen-sm mx-auto px-5 py-10">
                <h3>Hello, I'm Zaire.</h3>
                <p>Originally from Maryland, currently in Delaware, I am a multi-faceted software engineer specializing in full stack development.
                    I originate from Seoul, South Korea.
                </p>
                <p>I am a Delaware State University graduate with a degree in Computer Science.</p>
                <p>
                    My main goal is to connect humans with technology.
                </p>

                <p>I consider myself a full stack developer - my main interests are:</p>
                <ul>
                    <li>Human Computer Interaction, Intentional Design</li>
                    <li>Infrastructure Design / Implementation</li>
                    <li>Mobile Apps</li>
                </ul>

                <p>Outside of my line of work, I really enjoy:</p>
                <ul>
                    <li>Clothes - boots and old denim</li>
                    <li>Reading - non-fiction and philosophy</li>
                    <li>Bass guitar</li>
                    <li>Distance running and exercise</li>
                </ul>
                <p>
                    My resume and contact information can be viewed by clicking <a id="resume-link" target="_blank" href="https://us-central1-jinkim-backend.cloudfunctions.net/app/resume" rel="noreferrer">
                        here
                    </a>. Feel free to reach out for potential contract work or interesting opportunities.
                </p>
      </section>
    </div>
  );
}
  
export default About;
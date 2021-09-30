import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Story = () => (
  <>
    <Col>
        <Row
            className="header-row justify-content-center text non-text"
        >
        <h1>My Story</h1>
        </Row>
        <Row
            className="body-row justify-content-center text non-text"
        >
        <p>
            For me it all began deep into my youth: convincing my parents to teach me how to build a PC, learning to script so I could cheat in Runescape, even taking naive attempts at sorting algorithms for my itunes playlists all before I had even made it to high school. Despite my heavy interests in development I grew up with the constant belief that I was going to be a chef. Determined to follow these ambitions I tested out of high school as early as I could to begin my apprenticeship in fine dining. While I'm grateful for the multitude of life lessons and opportunities I was afforded in the culinary industry; years later I came to the stark and sudden realization it wasn't what I truly wanted to do in life.
        </p>
        <p>
            While at one of many pop-up restaurants with a chef I had been working with for some time I was assigned a lot of responsibilities that I could deeply sense weren't meant for human hands. Sorting inventory, price tracking, constant menu alterations and more simply left too much for one mind to track all while being expected to finish in time to work the line at full capacity later that night. Quickly I began teaching myself to make coding work for me, implementing stacks like python, NodeJS, and MySQL optimizing my responsibilities to be faster, more accurate and occasionally even hands free. Originally my intentions were to free up more time to focus on cooking, but I was surprised to find that the times I was most excited for work was when I would have a chance to practice my hand at coding.
        </p>
        <p>
            Finally the time came to take the leap; I studied for a handful of entry level IT certifications, got myself taken under the wing of a company willing to show me the ropes, and immersed myself in the CS industry. After a number of years with a focus on Network Security and Systems Management I've finally been able to make moves into the direction of my true ambitions in software development. Even years later I truly believe the passion and excitement I have for my work shines through in my projects and will do the same for any team I find myself as a part of. 
        </p>
        <p>
            Thank you for taking the time to read my story, if you have any other questions or remarks I would love a chance to connect with you!<br/>Please feel free to use the contact me section of this website to reach out.
        </p>
        </Row>
        <Row
            className="header-row justify-content-center text non-text"
        >
        <h1>Career Path</h1>
        </Row>
        <Row
            className="body-row justify-content-center text non-text"
        >
        <p>Following my graduation from Hack Reactor's software engineering immersive I have spent months in rehearsing and applying my skills as a web-developer. Working for privately contracted clients on everything from RESTful web applications to office productivity clients. Moving forward I am looking looking to join a talented team of developers on a project that I truly feel passionate about that will allow me to challenge myself and act as a critical team member or leader. In the long-term of my ambitions I would like to translate my skills into a career in security development and eventually pursue an AWS Solutions Architect certification.</p>
        </Row>
    </Col>
  </>
)

export default Story;
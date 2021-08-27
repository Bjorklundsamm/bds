import React from 'react';
import { Row } from 'react-bootstrap';

const Resume = () => (
  <>
      <iframe
        title="resume"
        className="pdf"
        height= "100%"
        width= "100%"
        frameBorder="0"
        src={`https://bjorklund-design-services.s3.us-west-2.amazonaws.com/SamB+-+Resume.pdf`}
      >
      </iframe>
  </>
)

export default Resume;

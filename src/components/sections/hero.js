import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const TypingEffect = () => {
  const baseText = 'The '; // Text that remains unchanged
  const sentences = [
    'Finance Bro.',
    'Tech Bro.',
    'Bro.',
  ];

  const [currentSentence, setCurrentSentence] = useState(0);
  const [displayText, setDisplayText] = useState(baseText);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = baseText + sentences[currentSentence];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, baseText.length + charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setDisplayText(fullText.substring(0, baseText.length + charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      // If the sentence is fully typed out
      if (!isDeleting && charIndex === sentences[currentSentence].length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } 
      // If the sentence is fully deleted (except for 'The')
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentSentence((prev) => (prev + 1) % sentences.length);
      }

      setTypingSpeed(isDeleting ? 65 : 100); // Faster backspacing
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, currentSentence, typingSpeed]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Samved Patil.</h2>;
  const three = (
    <h3 className="big-heading">
      <TypingEffect />
    </h3>
  );
  const four = (
    <>
      <p>
        Before ultimate year student majoring in AI and Data Science, software development engineer, I'm a "Daily Coffee and Startup fundraising" guy. 
        I love building exceptional human
        experiences, currently, I’m working on something that is very close to my heart
        {' '}
        <a href="https://www.linkedin.com/company/graystoneandco/" target="_blank" rel="noreferrer">
          Graystone & Co.
        </a>

      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://www.linkedin.com/in/samved24/"
      target="_blank"
      rel="noreferrer">
      Check out my Linkedin to keep updated !
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;

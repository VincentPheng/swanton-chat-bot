/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSpring, animated } from '@react-spring/web';

export default function GreetingCard() {
  const titleText = "Welcome to Swanton Poppy Chat!";
  const descriptionText = `Ask anything you want to know about the ranch!
  Check out some commonly asked questions by clicking the question mark above.`;
  const logoSrc = `/logo512.png`;
  const logoAltText = `Swanton Poppy Logo`;

  const animCardStyle = useSpring({
    from: { opacity: 0, width: '50%', transform: 'translate3d(0, 300px, 0)' },
    to: { opacity: 1, width: '70%', transform: 'translate3d(0, 0px, 0)' },
  });

  const animTitleStyle = useSpring({
    from: { opacity: 0, fontSize: '10px' },
    to: { opacity: 1, fontSize: '20px' },
  });

  const animDescStyle = useSpring({
    from: { opacity: 0, fontSize: '8px' },
    to: { opacity: 1, fontSize: '16px' },
  });


  const cardStyles = css`
    align-self: center;
    margin-top: 50px;
    padding: 50px;
    border-radius: 15px;
    background: white;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  `;

  const logoStyle = css`
    padding: 25px;
    display: block;
    margin: 0 auto;
    width: 50%;
    height: auto;
  `;

  const titleStyle = css`
    text-align: center;
  `;

  const descriptionStyle = css`
    font-size: 16px;
    text-align: center;
  `;

  const description = descriptionText.split("\n").map((text, i) => (
    <animated.p key={i} style={animDescStyle} css={descriptionStyle}>
      {text}
    </animated.p>
  ));

  return (
    <animated.div style={animCardStyle} css={cardStyles}>
      <img css={logoStyle} src={logoSrc} alt={logoAltText}/>
      <animated.h2 style={animTitleStyle} css={titleStyle}>{titleText}</animated.h2>
      {description}
    </animated.div>
  );
}

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { useSpring, animated } from '@react-spring/web';

export default function MessageBubble({
  text,
  alignLeft,
  showFeedback,
  onFeedbackGiven,
  timestamp,
}) {
  const animWrapperStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const animTextStyle = useSpring({
    from: { opacity: 0, fontSize: '5px' },
    to: { opacity: 1, fontSize: '20px' },
  });

  const messageCss = (theme) =>
    css`
      display: inline-block;
      color: ${alignLeft ? theme.color.primary : theme.color.secondary};
      padding: 20px 14px;
      text-align: left;
      padding: 20px 14px;
      background: ${alignLeft ? theme.color.secondary : theme.color.primary};
      box-shadow: ${theme.shadow.message};
      border-radius: 37px 37px ${alignLeft ? "37px 7px" : "7px 37px"};
      border: 1px solid rgba(34, 34, 34, 0.2);
      border-color: ${alignLeft && "transparent"};
      margin-right: ${showFeedback ? "20px" : 0};
    `;
    
  const messageWrapperCss = css`
    width: max-content;
    max-width: 70%;
    margin: 20px 0;
    align-self: ${!alignLeft && "flex-end"};
  `;

  const feedbackIconCss = css`
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
    vertical-align: middle;
    fill: transparent;
    transition: fill 0.4s, transform 0.4s;
  `;

  const positiveFeedbackHover = (theme) => css`
    &:hover {
      fill: ${theme.color.accent};
      transform: translateY(-2px);
    }
  `;

  const negativeFeedbackHover = (theme) => css`
    &:hover {
      fill: ${theme.color.error};
      transform: translateY(2px);
    }
  `;

  return (
    <animated.div style={animWrapperStyle} css={messageWrapperCss}>
      <animated.p style={animTextStyle} css={messageCss}>{text}</animated.p>
      {showFeedback && (
        <>
          <ThumbsDown
            css={[feedbackIconCss, negativeFeedbackHover]}
            onClick={() => onFeedbackGiven(timestamp, false)}
          />
          <ThumbsUp
            css={[feedbackIconCss, positiveFeedbackHover]}
            onClick={() => onFeedbackGiven(timestamp, true)}
          />
        </>
      )}
    </animated.div>
  );
}

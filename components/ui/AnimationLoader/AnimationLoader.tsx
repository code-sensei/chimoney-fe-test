import Lottie from 'react-lottie-player';

export default function RegularAnimationLoader({ animationData }: any) {
  return (
    <Lottie
      animationData={animationData}
      speed={1}
      style={{ width: '75%', height: '150px', margin: 'auto' }}
      loop
      play
    />
  );
}

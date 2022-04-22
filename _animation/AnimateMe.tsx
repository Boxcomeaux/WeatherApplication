import {Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';

const AnimateMe: React.FC<{
  children: any;
  duration: number;
  from: number;
  to: number;
  type: string;
  delay: number;
  style: {};
}> = ({children, style, from, to, duration = 0, type, delay = 0}) => {
  const init = useRef(new Animated.Value(from)).current;

  useEffect(() => {
    Animated.timing(init, {
      useNativeDriver: false,
      toValue: to,
      delay: delay,
      easing: Easing.bounce,
      duration: duration,
    }).start();
  }, [duration, init, to]);

  let newStyle;
  switch (type) {
    case 'fadeUp':
      newStyle = {...style, translateY: init};
      break;
    default:
      newStyle = {...style, opacity: init};
  }

  return <Animated.View style={newStyle}>{children}</Animated.View>;
};

export default AnimateMe;

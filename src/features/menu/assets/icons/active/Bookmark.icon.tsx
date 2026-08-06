import React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

const BookmarkActiveIcon = (props: SvgProps) => {
  return (
    <Svg height={512} viewBox="0 0 32 32" width={512} {...props}>
      <G id="_07_playlist" data-name="07 playlist">
        <Path d="m24 4h-16a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm4 3a1 1 0 0 0 -1-1h-22a1 1 0 0 0 0 2h22a1 1 0 0 0 1-1zm-15 15.382 4.764-2.382-4.764-2.382zm17-9.382v14a3 3 0 0 1 -3 3h-22a3 3 0 0 1 -3-3v-14a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3zm-9 7a1 1 0 0 0 -.553-.895l-8-4a1 1 0 0 0 -1.447.895v8a1 1 0 0 0 1.447.895l8-4a1 1 0 0 0 .553-.895z" />
      </G>
    </Svg>
  );
};

export default BookmarkActiveIcon;

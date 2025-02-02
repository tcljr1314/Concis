import React from 'react';
import CheckBox from '..';
import usePageListener from '../../_util/hooks/usePageListener';

export default function TimePickerDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('CheckBox');

  const checkCallback = (result: boolean) => {
    console.log(result);
  };

  return (
    <CheckBox checked={true} checkCallback={checkCallback}>
      Apple
    </CheckBox>
  );
}

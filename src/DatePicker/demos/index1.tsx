import React from 'react';
import TimePicker from '..';
import usePageListener from '../../_util/hooks/usePageListener';

export default function TimePickerDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('DatePicker');

  const handleChange = (date: string) => {
    console.log(date);
  };
  return <TimePicker type="primary" handleChange={handleChange} />;
}

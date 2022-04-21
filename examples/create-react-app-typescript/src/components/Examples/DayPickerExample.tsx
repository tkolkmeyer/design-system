import React from 'react';
import { DayPicker,
  CaptionProps,
  CaptionLabel,
  MonthsDropdown,
  YearsDropdown,
  useDayPicker,
  useNavigation,
  MonthChangeEventHandler } from 'react-day-picker';


function DayPickerExample(): React.ReactElement {
  const [selected, setSelected] = React.useState<Date>();
  return (
    <div>
      <h2>DayPicker Example</h2>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}

export default DayPickerExample;

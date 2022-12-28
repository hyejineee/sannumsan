import React from 'react';
import { useSelector } from 'react-redux';

import SelectedOptions from 'presentational/SelectedOptions';

export default function SelectedOptionContainer() {
  const { selectedOptions } = useSelector((state) => ({
    selectedOptions: state.selectedOptions,
  }));

  return (
    <div>
      <SelectedOptions selectedOptions={selectedOptions} />
    </div>
  );
}

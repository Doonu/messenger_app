import { TabsProps } from 'antd';
import { SelectProps } from 'rc-select';

const convertedSelect = (arr: TabsProps['items']): SelectProps['options'] => {
  return arr?.map(({ label, key, disabled }) => ({
    label,
    disabled,
    value: key,
  }));
};

export default convertedSelect;

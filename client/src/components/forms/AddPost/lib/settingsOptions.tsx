import { MenuProps } from 'antd';
import React from 'react';
import { CheckBox } from '../../../ui/checkbox';
import { useFormikContext } from 'formik';
import { IPost } from '../model/IPost';

const SwitchComments = () => {
  const { values, setFieldValue } = useFormikContext<IPost>();

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <CheckBox
        onChange={(e) => setFieldValue('isDisabledComments', e.target.checked)}
        checked={values.isDisabledComments}
      >
        Выключить комментарии
      </CheckBox>
    </div>
  );
};

export const settingItemsDropdown: MenuProps['items'] = [
  {
    label: <div>Что-то важное</div>,
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: <div>Что-то важное</div>,
    key: '1',
  },
  {
    type: 'divider',
    key: '2',
  },
  {
    label: <SwitchComments />,
    key: '3',
  },
];

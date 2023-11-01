import React from 'react';
import BaseInput from '../../../ui/inputs/baseInput/ui/BaseInput';
import BaseButton from '../../../ui/buttons/baseButton';
import { ISearch } from '../model/ISearch';
import { ContainerSearch } from './searchForm.styled';
import { Formik } from 'formik';
import { Form } from 'antd';

const SearchForm = () => {
  //TODO: при нажатии на инпут загружается превью с вазможным результатом поиска с дебаунсом
  const initialValue: ISearch = {
    search: '',
  };

  const formSubmit = (values: ISearch) => {
    console.log(`Поиск по строке - ${values.search}`);
  };

  return (
    <Formik initialValues={initialValue} onSubmit={formSubmit}>
      {({ handleSubmit, values, setFieldValue }) => (
        <Form layout="vertical" onFinish={handleSubmit}>
          <ContainerSearch>
            <BaseInput
              onChange={(e) => setFieldValue('search', e.target.value)}
              value={values.search}
              minWidth="400px"
              placeholder="Поиск..."
              border="none"
              height="40px"
            />
            <BaseButton disabled={!values.search} htmlType="submit" height="40px">
              Поиск
            </BaseButton>
          </ContainerSearch>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;

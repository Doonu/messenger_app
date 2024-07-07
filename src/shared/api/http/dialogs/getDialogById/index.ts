import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIDialogChat, IDialogChat, IConfigAsyncThunk } from '@shared/models';
import { API } from '@shared/api';

import { getDialogByIdConvertation } from './getDialogById.convertation';
import { ValidationSchema } from './getDialogById.validation';

export const getDialogById = createAsyncThunk<IDialogChat, number, IConfigAsyncThunk>(
  'Dialog/getById',
  (id, { rejectWithValue }) => {
    return API<APIDialogChat>({
      url: `api/dialogs/${id}`,
      method: 'GET',
    })
      .then(({ data }) => {
        const isValid = ValidationSchema.isValidSync(data);

        if (!isValid) {
          console.warn(ValidationSchema.validateSync(data));
        }
        return getDialogByIdConvertation(data);
      })
      .catch(({ response }) => {
        return rejectWithValue(response?.data);
      });
  }
);

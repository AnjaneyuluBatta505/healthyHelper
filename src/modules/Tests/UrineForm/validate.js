import { isNumber } from '../../../helpers/regexp';

export const validate = (values) => {
  const errors = {};

  if (values.relativeDensityField && !isNumber.test(values.relativeDensityField)) {
    errors.relativeDensityField = 'Введите число';
  }

  if (values.erythrocytesField && !isNumber.test(values.erythrocytesField)) {
    errors.erythrocytesField = 'Введите число';
  }

  if (values.leukocytesField && !isNumber.test(values.leukocytesField)) {
    errors.leukocytesField = 'Введите число';
  }

  if (!values.sex) {
    errors.sex = 'Обязательное поле';
  }

  return errors;
};

export const blank = () => {};

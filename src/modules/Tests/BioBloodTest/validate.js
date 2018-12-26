import { isNumber } from '../../../helpers/regexp';

export const validate = (values) => {
  const errors = {};

  if (values.BELOK && !isNumber.test(values.BELOK)) {
    errors.BELOK = 'Введите число';
  }

  if (values.hemoglobin && !isNumber.test(values.hemoglobin)) {
    errors.hemoglobin = 'Введите число';
  }

  if (values.haptoglobin && !isNumber.test(values.haptoglobin)) {
    errors.haptoglobin = 'Введите число';
  }

  if (values.glucose && !isNumber.test(values.glucose)) {
    errors.glucose = 'Введите число';
  }

  if (values.creatinine && !isNumber.test(values.creatinine)) {
    errors.creatinine = 'Введите число';
  }

  if (values.urea && !isNumber.test(values.urea)) {
    errors.urea = 'Введите число';
  }

  if (values.cholesterol && !isNumber.test(values.cholesterol)) {
    errors.cholesterol = 'Введите число';
  }

  if (values.bilirubin && !isNumber.test(values.bilirubin)) {
    errors.bilirubin = 'Введите число';
  }

  if (values.ALT && !isNumber.test(values.ALT)) {
    errors.ALT = 'Введите число';
  }

  if (values.АСТ && !isNumber.test(values.АСТ)) {
    errors.АСТ = 'Введите число';
  }

  if (values.lipase && !isNumber.test(values.lipase)) {
    errors.lipase = 'Введите число';
  }

  if (values.alphaAmylase && !isNumber.test(values.alphaAmylase)) {
    errors.alphaAmylase = 'Введите число';
  }

  if (values.pancreaticAmylase && !isNumber.test(values.pancreaticAmylase)) {
    errors.pancreaticAmylase = 'Введите число';
  }


  if (!values.sex) {
    errors.sex = 'Обязательное поле';
  }

  return errors;
};

export const blank = () => {};

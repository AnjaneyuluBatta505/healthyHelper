import { isNumber } from '../../../helpers/regexp';

export const validate = (values) => {
  const errors = {};

  if (values.RBC && !isNumber.test(values.RBC)) {
    errors.RBC = 'Введите число';
  }

  if (values.RBC && !isNumber.test(values.RBC)) {
    errors.RBC = 'Введите число';
  }

  if (values.RBC && !isNumber.test(values.RBC)) {
    errors.RBC = 'Введите число';
  }

  if (values.ESR && !isNumber.test(values.ESR)) {
    errors.ESR = 'Введите число';
  }

  if (values.MO_RELATIVE && !isNumber.test(values.MO_RELATIVE)) {
    errors.MO_RELATIVE = 'Введите число';
  }

  if (values.LYM_RELATIVE && !isNumber.test(values.LYM_RELATIVE)) {
    errors.LYM_RELATIVE = 'Введите число';
  }

  if (values.NEU && !isNumber.test(values.NEU)) {
    errors.NEU = 'Введите число';
  }

  if (values.Bands && !isNumber.test(values.Bands)) {
    errors.Bands = 'Введите число';
  }

  if (values.EOS_RELATIVE && !isNumber.test(values.EOS_RELATIVE)) {
    errors.EOS_RELATIVE = 'Введите число';
  }

  if (values.BA_RELATIVE && !isNumber.test(values.BA_RELATIVE)) {
    errors.BA_RELATIVE = 'Введите число';
  }

  if (values.WBC && !isNumber.test(values.WBC)) {
    errors.WBC = 'Введите число';
  }

  if (values.PLT && !isNumber.test(values.PLT)) {
    errors.PLT = 'Введите число';
  }

  if (values.RTC && !isNumber.test(values.RTC)) {
    errors.RTC = 'Введите число';
  }

  if (values.МСНС && !isNumber.test(values.МСНС)) {
    errors.МСНС = 'Введите число';
  }

  if (values.МСН && !isNumber.test(values.МСН)) {
    errors.МСН = 'Введите число';
  }

  if (values.MCV && !isNumber.test(values.MCV)) {
    errors.MCV = 'Введите число';
  }

  if (values.HTC && !isNumber.test(values.HTC)) {
    errors.HTC = 'Введите число';
  }

  if (values.Hb && !isNumber.test(values.Hb)) {
    errors.Hb = 'Введите число';
  }

  if (!values.sex) {
    errors.sex = 'Обязательное поле';
  }

  return errors;
};

export const blank = () => {};

// import { Indicators } from './config';

export const undefCheck = value => typeof value !== 'undefined';

const numbCheck = value => Number.isNaN(parseInt(value, 10));

export const validate = (values) => {
  const errors = {};

  if (!values.RBC) {
    // errors.RBC = 'Обязательное поле';
  } else if (numbCheck(values.RBC)) {
    errors.RBC = 'Недопустимый формат';
  }

  if (!values.Hb) {
    // errors.Hb = 'Обязательное поле';
  } else if (numbCheck(values.Hb)) {
    errors.Hb = 'Недопустимый формат';
  }

  if (!values.HTC) {
    // errors.HTC = 'Обязательное поле';
  } else if (numbCheck(values.HTC)) {
    errors.HTC = 'Недопустимый формат';
  }

  if (!values.MCV) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.MCV)) {
    errors.MCV = 'Недопустимый формат';
  }

  if (!values.МСН) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.МСН)) {
    errors.МСН = 'Недопустимый формат';
  }

  if (!values.МСНС) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.МСНС)) {
    errors.МСНС = 'Недопустимый формат';
  }

  if (!values.RDW) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.RDW)) {
    errors.RDW = 'Недопустимый формат';
  }

  if (!values.MCV) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.MCV)) {
    errors.MCV = 'Недопустимый формат';
  }

  if (!values.RTC) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.RTC)) {
    errors.RTC = 'Недопустимый формат';
  }

  if (!values.PLT) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.PLT)) {
    errors.PLT = 'Недопустимый формат';
  }

  if (!values.WBC) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.WBC)) {
    errors.WBC = 'Недопустимый формат';
  }

  if (!values.BA_RELATIVE) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.BA_RELATIVE)) {
    errors.BA_RELATIVE = 'Недопустимый формат';
  }

  if (!values.EOS_RELATIVE) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.EOS_RELATIVE)) {
    errors.EOS_RELATIVE = 'Недопустимый формат';
  }

  if (!values.Bands) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.Bands)) {
    errors.Bands = 'Недопустимый формат';
  }

  if (!values.NEU) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.NEU)) {
    errors.NEU = 'Недопустимый формат';
  }

  if (!values.LYM_RELATIVE) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.LYM_RELATIVE)) {
    errors.LYM_RELATIVE = 'Недопустимый формат';
  }

  if (!values.MO_RELATIVE) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.MO_RELATIVE)) {
    errors.MO_RELATIVE = 'Недопустимый формат';
  }

  if (!values.ESR) {
    // errors.MCV = 'Обязательное поле';
  } else if (numbCheck(values.ESR)) {
    errors.ESR = 'Недопустимый формат';
  }

  if (!values.sex) {
    errors.sex = 'Обязательное поле';
  }

  return errors;
};

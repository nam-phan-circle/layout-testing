import { extend } from 'vee-validate'
import {
  required,
  email,
  numeric,
} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_}は必須です'
})
extend('tel', {
  validate (value) {
    return numeric.validate(value)
  },
  message: '{_field_}は数値が必要です'
})
extend('email', {
  ...email,
  message: '正しいメールアドレスを入力してください'
})

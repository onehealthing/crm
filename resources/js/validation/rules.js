import { required, max } from '@vee-validate/rules';
import { defineRule } from 'vee-validate';

defineRule('required', required);
defineRule('max', max);

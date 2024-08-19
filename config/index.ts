import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const IS_WORKFLOW = `${process.env.NEXT_PUBLIC_APP_TYPE_WORKFLOW}` === 'true'
export const APP_INFO: AppInfo = {
  title: 'Outreach Generator',
  description: 'The tool is designed to streamline your outreach efforts. It operates by accepting user-provided input, conducting competitive research on the specified school, evaluating the provided URL for potential marketing opportunities, and generating introductory and follow-up emails. This workflow is specifically tailored for outreach use cases.',
  copyright: 'IER',
  privacy_policy: 'This is a placeholder privacy policy.',
  default_language: 'en-US',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

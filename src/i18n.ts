import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  zh: {
    common: {
      course: 'FIT5122 · Professional Practice',
      ownTime: 'Own-time 摘要',
      examFocus: '考点整理',
      viewMode: '学习维度',
      selectWeek: '选择周次',
      selectChapter: '选择章节',
      language: '语言',
      print: '打印 / 导出 PDF',
      published: '已发布',
      comingSoon: '待整理',
      placeholderTitle: '这一周的汇总页还在路上',
      placeholderBody: '资料位置已经预留。未来补充内容时，将自动沿用同一套导航、双语与响应式布局。',
      backLatest: '返回最新一周',
      notFoundTitle: '没有找到这个页面',
      notFoundBody: '请选择 Week 01–07，或返回最新已发布的学习页。',
      sourceNote: '课程私有资料仅列出来源名称，不在公开站点上传原文件。',
      contents: '本页目录',
      updated: '更新',
      weeks: {
        '01': { label: 'Week 01', title: '会议、演示与负责任使用 AI' },
        '02': { label: 'Week 02', title: '团队、思考与专业沟通' },
        '03': { label: 'Week 03', title: '冲突处理与领导力' },
        '04': { label: 'Week 04', title: '跨文化沟通与团队协作' },
        '05': { label: 'Week 05', title: '质量、可靠性与专业责任' },
        '06': { label: 'Week 06', title: '软件质量的衡量与管理' },
        '07': { label: 'Week 07', title: '有效沟通、受众与叙事结构' },
      },
      chapters: {
        '01': { label: 'Chapter 01', title: '专业沟通与负责任使用 AI', weeks: 'Week 01' },
        '02': { label: 'Chapter 02', title: '团队、领导力与跨文化协作', weeks: 'Week 02–04' },
        '03': { label: 'Chapter 03', title: '质量与可靠性', weeks: 'Week 05–06' },
        '04': { label: 'Chapter 04', title: '有效沟通与专业表达', weeks: 'Week 07' },
      },
    },
  },
  en: {
    common: {
      course: 'FIT5122 · Professional Practice',
      ownTime: 'Own-time Summary',
      examFocus: 'Exam Focus',
      viewMode: 'Study view',
      selectWeek: 'Select week',
      selectChapter: 'Select chapter',
      language: 'Language',
      print: 'Print / Export PDF',
      published: 'Published',
      comingSoon: 'Coming soon',
      placeholderTitle: 'This week’s study guide is on the way',
      placeholderBody: 'The route is ready. Future content will automatically inherit the same navigation, bilingual support, and responsive layout.',
      backLatest: 'Back to latest week',
      notFoundTitle: 'Page not found',
      notFoundBody: 'Choose Week 01–07 or return to the latest published study guide.',
      sourceNote: 'Private course materials are named as sources but their files are not uploaded to the public site.',
      contents: 'On this page',
      updated: 'Updated',
      weeks: {
        '01': { label: 'Week 01', title: 'Meetings, Presentations & Responsible AI' },
        '02': { label: 'Week 02', title: 'Teams, Thinking & Professional Communication' },
        '03': { label: 'Week 03', title: 'Conflict Management & Leadership' },
        '04': { label: 'Week 04', title: 'Cross-cultural Communication & Teamwork' },
        '05': { label: 'Week 05', title: 'Quality, Reliability & Professional Responsibility' },
        '06': { label: 'Week 06', title: 'Measuring & Managing Software Quality' },
        '07': { label: 'Week 07', title: 'Effective Communication, Audiences & Storytelling' },
      },
      chapters: {
        '01': { label: 'Chapter 01', title: 'Professional Communication & Responsible AI', weeks: 'Week 01' },
        '02': { label: 'Chapter 02', title: 'Teams, Leadership & Cross-cultural Collaboration', weeks: 'Weeks 02–04' },
        '03': { label: 'Chapter 03', title: 'Quality & Reliability', weeks: 'Weeks 05–06' },
        '04': { label: 'Chapter 04', title: 'Effective Communication & Professional Discourse', weeks: 'Week 07' },
      },
    },
  },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common',
    supportedLngs: ['zh', 'en'],
    fallbackLng: 'zh',
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'fit5122-language',
      caches: ['localStorage'],
    },
  })

export type Locale = 'zh' | 'en'

export function asLocale(language?: string): Locale {
  return language?.startsWith('en') ? 'en' : 'zh'
}

export default i18n

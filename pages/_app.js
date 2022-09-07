// State Management
import { RecoilRoot } from 'recoil'

// Translations
import { I18NProvider } from '@/contexts/i18n'

// Styles
import '@/styles/global.scss'

function MyApp ({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <RecoilRoot>
      <I18NProvider>
        {getLayout(<Component {...pageProps} />)}
      </I18NProvider>
    </RecoilRoot>
  )
}

export default MyApp

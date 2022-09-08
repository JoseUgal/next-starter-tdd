// State Management
import { wrapper } from '@/store/config'

// Translations
import { I18NProvider } from '@/contexts/i18n'

// Styles
import '@/styles/global.scss'

function MyApp ({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <I18NProvider>
      {getLayout(<Component {...pageProps} />)}
    </I18NProvider>
  )
}

export default wrapper.withRedux(MyApp)

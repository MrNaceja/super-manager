import { AppRoutes } from '../routes/app.routes';
import { TScreenListSuperProps } from '../routes/app.routes'

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {
        home: undefined,
        newSuper: undefined,
        superList: TScreenListSuperProps
      }
    }
  }
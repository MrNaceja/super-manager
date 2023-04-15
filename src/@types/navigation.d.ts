import { AppRoutes } from '../routes/app.routes';
import { TScreenListSuperProps } from '../routes/app.routes'
import { ISuperMarket } from '../storage/appDTO';

export type PropsScreenSuperList = {
  superMarket: ISuperMarket
} 

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {
        home: undefined,
        newSuper: undefined,
        superList: PropsScreenSuperList
      }
    }
  }
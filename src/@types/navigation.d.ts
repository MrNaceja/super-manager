import { AppRoutes }             from '../routes/app.routes';
import { TScreenListSuperProps } from '../routes/app.routes'
import { ISuperMarket }          from '../storage/appDTO';

export type PropsScreenSuperList = {
  superMarketId: string
} 

declare global {
    namespace ReactNavigation {
      export interface RootParamList extends RootStackParamList {
        home: undefined,
        newSuper: undefined,
        superList: PropsScreenSuperList
      }
    }
  }
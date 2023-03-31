import { AppRoutes } from '../routes/app.routes';
declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {
        home: undefined,
        newSuper: undefined,
        listSuper: undefined
      }
    }
  }
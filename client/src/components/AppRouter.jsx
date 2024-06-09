import React, { useContext } from 'react';

import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {authRoutes,publicRoutes} from "../routes";
import {CATALOG_ROUTE} from "../utils/consts";
import { Context } from '..';
import { observer } from 'mobx-react-lite';


const AppRouter = observer(() => {
    const {user} = useContext(Context) // прокидываем context из index <- Storage
    return(
      <Routes>
        {user.isAuth && authRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} element={<Component/>} exact />
        )}
        {publicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} element={<Component/>} exact />
        )}
        <Route path="*" element={<Navigate to={CATALOG_ROUTE} />}/>
    </Routes>
    );
});
export default AppRouter;
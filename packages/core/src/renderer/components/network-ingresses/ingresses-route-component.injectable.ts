/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import ingressesRouteInjectable from "../../../common/front-end-routing/routes/cluster/network/ingresses/ingresses-route.injectable";
import { routeSpecificComponentInjectionToken } from "../../routes/route-specific-component-injection-token";
import { Ingresses } from "./ingresses";

const ingressesRouteComponentInjectable = getInjectable({
  id: "ingresses-route-component",

  instantiate: (di) => ({
    route: di.inject(ingressesRouteInjectable),
    Component: Ingresses,
  }),

  injectionToken: routeSpecificComponentInjectionToken,
});

export default ingressesRouteComponentInjectable;

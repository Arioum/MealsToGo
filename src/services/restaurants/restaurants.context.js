import React, { useState, useEffect, createContext, useMemo } from "react";

import { restaurantRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

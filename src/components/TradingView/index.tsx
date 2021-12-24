import * as React from 'react';
import './index.css';
import { useMarket, USE_MARKETS } from '../../utils/markets';
import * as saveLoadAdapter from './saveLoadAdapter';
import { flatten } from '../../utils/utils';
import { BONFIDA_DATA_FEED } from '../../utils/bonfidaConnector';

export interface ChartContainerProps {

  // BEWARE: no trailing slash is expected in feed URL
  // datafeed: any;
  datafeedUrl: string;
  theme: string;
}

export interface ChartContainerState {}


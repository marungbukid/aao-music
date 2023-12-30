import { Location } from '../generated/client';
import { Decimal } from '../generated/client/runtime/library';

export const taytay: Location = {
  id: 1,
  address: '18th Genesis St. Brgy. San Juan, Taytay, Rizal 1920',
  lat: new Decimal(14.578714192393432),
  long: new Decimal(121.14154446609302),
};

export const binangonan: Location = {
  id: 2,
  address: 'Sitio Mata, Brgy. Palangoy, Binangonan, Rizal',
  lat: new Decimal(14.540971933202233),
  long: new Decimal(121.14154446609302),
};

export const bulacan = {
  id: 3,
  address: 'Sitio 2 Bahay Pare, Manggahan St. City of Meycauayan Bulacan',
  lat: new Decimal(14.768652113448997),
  long: new Decimal(121.01080972883642),
};

export const defaultLocations = [taytay, binangonan, bulacan];

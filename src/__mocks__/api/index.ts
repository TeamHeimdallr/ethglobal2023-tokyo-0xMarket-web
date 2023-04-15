import { apiAccountPortfolios } from './account-portfolios';
import { apiAccounts } from './accounts';
import { apiNotifications } from './notifications';

export default [...apiNotifications, ...apiAccounts, ...apiAccountPortfolios];

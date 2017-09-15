import getMenuItems from '../../api/getMenuItems.js';

export default function getMenuItemsProcess() {
  return (dispatch, getState, env) => {
    dispatch({ type: 'GET_MENU_ITEMS' });
    return getMenuItems({
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(menuItems => {
      dispatch({ type: '', menuItems });
      return menuItems;
    });
  };

  //
}

// import OrderPage from '../../components/OrderPage';
// import { connect } from 'react-redux'; //the curly bracket means you are importing multiple modules
// import { lifecycle } from 'recompose';
//
// import getMenuItemsProcess from '../thunks/getMenuItemsProcess';
//
// function mapStateToProps(state, ownProps) {
//   const { userById } = this.props.store.getState();
//   const { authorId } = ownProps.match.params;
//   const author = usersById[authorId] || null;
//   return {
//     author
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     onDidMount: ({ authorId }) =>
//       dispatch(getMenuItemsProcess.create({ authorId }))
//   };
// }
//
// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
//
// const withlifecycle = lifecycle({
//   componentDidMount() {
//     const { authorId } = this.props.match.params;
//     this.props.onDidMount({ authorId });
//   }
// });
//
// export default connectToStore(withlifecycle(AuthorPage));

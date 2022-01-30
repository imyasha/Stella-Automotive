import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "../components/Home";
import { getMovies } from "../store/movies/action";
import { wrapper } from "../store/store";

const Index = (props) => {
  return <Home />;
};

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(getMovies());
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: bindActionCreators(getMovies, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Index);

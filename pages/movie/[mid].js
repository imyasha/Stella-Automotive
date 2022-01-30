import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useRouter } from 'next/router';
import MovieInfo from "../../components/MovieInfo";
import { getDetail } from "../../store/movies/action";

const Detail = (props) => {
  const router = useRouter();
  const { mid } = router.query;
  useEffect(() => {
    props.getDetail(mid);
  }, [])
  return <MovieInfo />
};

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: bindActionCreators(getDetail, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Detail);
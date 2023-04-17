import { useLocation, useParams } from "react-router-dom";

function CourseDetail() {
  //   const courseId = useLocation();
  const params = useParams();
  return <div>course ID:{params.courseId}</div>;
}

export default CourseDetail;

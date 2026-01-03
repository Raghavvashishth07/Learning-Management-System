import React,{useState,useEffect} from 'react'
import { homeCoursesStyles } from '../assets/dummyStyles'
import { coursesData } from '../assets/dummyHdata'
import { useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react'

const HomeCourses = () => {
    const navigate = useNavigate();
    const { title, course: courseFont, detail } = homeCoursesStyles.fonts;
    const visibleCourses = coursesData.slice(0, 8);

    const [userRatings, setUserRatings] = useState(() => {
        try {
            const raw = localStorage.getItem("userCourseRatings");
            return raw ? JSON.parse(raw) : {};
        } catch {
            return {};
        }
    });
    const [hoverRatings, setHoverRatings] = useState({});

    return (
        <div className={homeCoursesStyles.container}>
            <div className={homeCoursesStyles.mainContainer}>
                <div className={homeCoursesStyles.header}>
                    <h2 className={`${title} ${homeCoursesStyles.title}`}>
                        <Star className={homeCoursesStyles.titleIcon} />
                        Explore Top Courses
                        <Star className={homeCoursesStyles.titleIcon} />
                    </h2>
                </div>

                <div className={homeCoursesStyles.courseCard}>
                    {visibleCourses.map((course) => {
                        const isFree = !!course.isFree || !course.price;
                        return (
                            <div
                                key={course.id}
                                onClick={() => handleCourseClick(course.id)}
                                className={homeCoursesStyles.courseCard}
                            >

                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default HomeCourses

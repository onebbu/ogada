package com.odiga.mytrip.course.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.odiga.mytrip.course.vo.CourseVO;
import com.odiga.mytrip.course.vo.CourseImportVO;

@Mapper
public interface CourseDAO {
    List<CourseVO> getResultList(String nickname);
    int saveCourseData(CourseImportVO courseImportVO);
    void updateCourseWriteYN(String courseno);
}


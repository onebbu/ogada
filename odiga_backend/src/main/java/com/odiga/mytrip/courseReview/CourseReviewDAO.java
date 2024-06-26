package com.odiga.mytrip.courseReview;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CourseReviewDAO {

    List<CourseReviewVO> detailPage(int boardNo);
    void viewCount(int boardNo);
    List<CommentsVO> comments(int boardNo);
    void commentWrite(CommentsVO commentsVO);
    void boardGrade(int boardNo);
    void likeCount(int boardNo);
    void articleDelete(int boardNo);
    void likeCancel(int boardNo);
    List<CourseReviewVO> getMemberArticles(String nickname);
    void commentDel(CommentsVO commentsVO);
    List<CourseReviewVO> courseReviewSearch(String search);
    void courseReviewEdit(CourseReviewVO courseReviewVO);
    void commentEdit(CommentsVO commentsVO);
    void updateCourseWriteYN(int boardNo);
}

package com.odiga.mytrip.travel.dao;

import java.util.List;

import com.odiga.mytrip.travel.vo.WishVO;
import org.apache.ibatis.annotations.Mapper;
import com.odiga.mytrip.travel.vo.TravelListVO;
import com.odiga.mytrip.travel.vo.ReviewDataVO;
import com.odiga.mytrip.travel.vo.TravelCatKorVO;

@Mapper
public interface TravelDAO {
    TravelListVO getTravelInfo(String contentId);
    void countPlusOne(String contentId);
    void fetchOverview(String contentid , String overview);
    void importReviewData(ReviewDataVO reviewData);
    List<ReviewDataVO> getReviewList(String contentId);
    TravelCatKorVO cattranskr(String cat1 , String cat2 , String cat3);
    void reviewUpdate(int reviewno , String reviewcomment , int reviewgrade);
    void reviewDelete(String reviewno);
    void wishPlus(String contentid , String email , String nickname);
    void wishDelete(String contentid , String nickname);
    String travelGradeAvg(String contentId);
    List<WishVO> selectAllWish(String nickname);
    List<WishVO> selectWishforRegion(String nickname, String areacode);
    int wishUserInfo(int contentid , String nickname);
}
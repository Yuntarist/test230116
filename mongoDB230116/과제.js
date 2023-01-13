/*
 telegram 봇에 기능 추가하기
1) mongoDB 와 연동하여 대화(키:값) CRUD가 가능하게 하라.
예)  아이유 :  아이유이쁘다
      네이버 : 네이버링크 www.naver.com
      동해바다(jpg) : 사진ID로 해당 사진이
       mongoDB에서 불러와짐
2) 일정 시간이 되면 다음 세가지 종류의 메세지를 받아라.
   (1) 아침등교 : 환률정보와 (+팀이 원하는 데이터)
   (2) 점심시간 : 점심시간 알림 과 미세먼지 정보 (+팀이 원하는 데이터)
   (3) 마칠때 : 버스도착알림과 개봉영화순위 정보 (+팀이 원하는 데이터)
3) 번역기능
   봇에게 일정 명령을 보내면 그 후에 대화는 영어로 하게 하라.
   예) 봇 번역해 :  그 후의 대화는 영어로 번역됨
4) 로또 라고 치면
   로또 당첨번호와 함께 임의의 로또번호 2개를 봇이 추천해준다(랜덤)
5) 식단을 물어보면 해당요일에 해당하는 부산대학교 식단을 불러와서 알려준다.
6) 삼성전자 주 API 값을 1시간 간격으로 값을 mongoDB에 저장하여 로드할때
    Chart.js 로 자신만의 꺽은선 차트를 그려라.
*/

/*
해결 과제

새로운 봇 하나 만들기 // 만들었음 봇이름 TESTBOTTT / API : 텔레그램 참고 / @ds_230111_testbot

데이터 json파일로 전환하여 담아놔야한다.
   ex) 아이유 치면 아이유 이쁘다가 나올 수 있도록
   {"name" : "아이유"
   "내용" : "아이유 이쁘다"}

여러 API 값들 따오기
   ex) 환율정보, 미세먼지정보, 버스도착알림, 파파고,삼성전자 주식값(아마 크롤링일듯)

API 안주는것들은 크롤링해서 가져올것
   ex) 개봉영화 순위정보, 부산대학교 월식단

몽고DB와 연동시키기
   일단 이거먼저
*/

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Slot</title>
  <link href="<c:url value="/resources/css/styles.css" />" rel="stylesheet">
</head>
<body>
  <div class="slot">
    メダル<input type="number" id="medal" disabled>枚
    <input type="text" id="result" disabled>
    <div class="panel">
      <img id="leftImg" width="90" height="110">
      <div id="left" class="stop">Stop</div>
    </div>
    <div class="panel">
      <img id="centerImg" width="90" height="110">
      <div id="center" class="stop">Stop</div>
    </div>
    <div class="panel">
      <img id="rightImg" width="90" height="110">
      <div id="right" class="stop">Stop</div>
    </div>
    <div id="spin">Start</div>
  </div>
  <div class="dividenTable">
    配当表
    <p><img class="dividen" src="<c:url value="/resources/img/seven.png" />" width="70" height="90">　×　５０枚</p>
    <p><img class="dividen" src="<c:url value="/resources/img/bell.png" />" width="70" height="90"> 　×　１５枚</P>
    <p><img class="dividen" src="<c:url value="/resources/img/cherry.png" />" width="70" height="90">　×　４枚</p>
  </div>

  <script src="<c:url value="/resources/js/main.js" />"></script>
</body>
</html>

import { csv2geojson } from './csv2geojson';

const data = `都道府県コード又は市区町村コード,NO,都道府県名,市区町村名,名称,名称_カナ,名称_通称,POIコード,住所,方書,緯度,経度,電話番号,内線番号,法人番号,団体名,利用可能曜日,開始時間,終了時間,利用可能時間特記事項,説明,バリアフリー情報,URL,備考
304280,1,和歌山県,串本町,橋杭公衆トイレ,ハシグイコウシュウトイレ,,2101,和歌山県東牟婁郡串本町くじの川,,33.492024,135.790637,,,,,月火水木金土日,,,終日利用可能,,,,
304280,2,和歌山県,串本町,橋杭園地公衆トイレ,ハシグイエンチコウシュウトイレ,,2101,和歌山県東牟婁郡串本町くじの川1597番地,,33.488412,135.794503,,,,,月火水木金土日,,,終日利用可能,,,,
304280,3,和歌山県,串本町,桟橋公衆便所,サンバシコウシュウベンジョ,,2101,和歌山県東牟婁郡串本町串本1733番地17,,33.468222,135.781653,,,,,月火水木金土日,,,終日利用可能,,,,
304280,4,和歌山県,串本町,馬坂公衆トイレ,ウマサカコウシュウトイレ,,2101,和歌山県東牟婁郡串本町串本1727番地1,,33.458817,135.772966,,,,,月火水木金土日,,,終日利用可能,,,,
304280,5,和歌山県,串本町,潮岬灯台前公衆トイレ,シオノミサキトウダイマエコウシュウトイレ,,2101,和歌山県東牟婁郡串本町潮岬2876番地1,,33.438441,135.759313,,,,,月火水木金土日,,,終日利用可能,,,,
304280,6,和歌山県,串本町,潮岬公衆トイレ,シオノミサキコウシュウトイレ,,2101,和歌山県東牟婁郡串本町潮岬2706番地30,,33.437651,135.761293,,,,,月火水木金土日,,,終日利用可能,,,,
304280,7,和歌山県,串本町,大島公衆便所,オオシマコウシュウベンジョ,,2101,和歌山県東牟婁郡串本町大島9番地,,33.471846,135.802003,,,,,月火水木金土日,,,終日利用可能,,,,
304280,8,和歌山県,串本町,樫野駐車場公衆便所,カシノチュウシャジョウコウシュウベンジョ,,2101,和歌山県東牟婁郡串本町樫野,,33.466593,135.851768,,,,,月火水木金土日,,,終日利用可能,,,,
304280,9,和歌山県,串本町,大島ポケットパーク公衆便所,オオシマポケットパークコウシュウベンジョ,,2101,和歌山県東牟婁郡串本町大島385番地1,,33.46785,135.800283,,,,,月火水木金土日,,,終日利用可能,,,,
304280,10,和歌山県,串本町,樫野崎公衆便所,カシノザキコウシュウベンジョ,,2101,和歌山県東牟婁郡串本町樫野,,33.466593,135.851768,,,,,月火水木金土日,,,終日利用可能,,,,
`;

test('parses csv to geojson', () => {
  const geojson = csv2geojson(data);
  expect(geojson.features.length).toBe(10);
});